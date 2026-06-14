import React, { Component } from "react";
import * as THREE from "three";
import { colors } from "./design-system/tokens";

// Compact GLSL 3D simplex noise (Ashima / Stefan Gustavson, public domain).
const NOISE_GLSL = `
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x,289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0);
  const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy));
  vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);
  vec3 l=1.0-g;
  vec3 i1=min(g.xyz,l.zxy);
  vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+1.0*C.xxx;
  vec3 x2=x0-i2+2.0*C.xxx;
  vec3 x3=x0-1.0+3.0*C.xxx;
  i=mod(i,289.0);
  vec4 p=permute(permute(permute(
    i.z+vec4(0.0,i1.z,i2.z,1.0))
    +i.y+vec4(0.0,i1.y,i2.y,1.0))
    +i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=1.0/7.0;
  vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z);
  vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy;
  vec4 y=y_*ns.x+ns.yyyy;
  vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);
  vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0;
  vec4 s1=floor(b1)*2.0+1.0;
  vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
  vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);
  vec3 p1=vec3(a0.zw,h.y);
  vec3 p2=vec3(a1.xy,h.z);
  vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
  m=m*m;
  return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}
`;

const VERTEX_SHADER = `
uniform float uTime;
varying float vDisplacement;
${NOISE_GLSL}
void main(){
  float n = snoise(normal * 1.4 + uTime * 0.25);
  vDisplacement = n;
  vec3 displaced = position + normal * n * 0.32;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
}
`;

const FRAGMENT_SHADER = `
uniform vec3 uColorA;
uniform vec3 uColorB;
varying float vDisplacement;
void main(){
  float t = smoothstep(-1.0, 1.0, vDisplacement);
  vec3 color = mix(uColorA, uColorB, t);
  gl_FragColor = vec4(color, 0.85);
}
`;

class MorphingMesh extends Component {
  constructor(props) {
    super(props);

    this.container = React.createRef();
    this.renderFrame = this.renderFrame.bind(this);
    this.queueResize = this.queueResize.bind(this);
  }

  componentDidMount() {
    if (typeof window === "undefined" || !this.container.current) {
      return;
    }

    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) {
      // No WebGL support — leave the empty container, graceful fallback.
      return;
    }

    this.prefersReducedMotion =
      typeof window.matchMedia === "function"
        ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
        : false;

    const { clientWidth: width, clientHeight: height } = this.container.current;

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    this.camera.position.z = 3.2;

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(width, height);
    this.renderer.setClearColor(0x000000, 0);

    this.geometry = new THREE.IcosahedronGeometry(1, 20);
    this.material = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      transparent: true,
      uniforms: {
        uTime: { value: 0 },
        uColorA: { value: new THREE.Color(colors.accentPurple) },
        uColorB: { value: new THREE.Color(colors.accentBlue) },
      },
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);

    this.container.current.appendChild(canvas);

    window.addEventListener("resize", this.queueResize);

    // Pause the loop while the divider is scrolled out of view.
    if (typeof IntersectionObserver !== "undefined") {
      this.observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          this.start();
        } else {
          this.stop();
        }
      });
      this.observer.observe(this.container.current);
    } else {
      this.start();
    }

    if (this.prefersReducedMotion) {
      // Single static frame, no animation.
      this.stop();
      this.material.uniforms.uTime.value = 0.5;
      this.renderer.render(this.scene, this.camera);
    }
  }

  componentWillUnmount() {
    this.stop();
    window.removeEventListener("resize", this.queueResize);

    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.resizeFrame) {
      window.cancelAnimationFrame(this.resizeFrame);
    }
    if (this.geometry) {
      this.geometry.dispose();
    }
    if (this.material) {
      this.material.dispose();
    }
    if (this.renderer) {
      this.renderer.dispose();
      const canvas = this.renderer.domElement;
      if (canvas && canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
    }
  }

  start() {
    if (this.animationFrame || this.prefersReducedMotion || !this.renderer) {
      return;
    }
    this.lastTime = null;
    this.animationFrame = window.requestAnimationFrame(this.renderFrame);
  }

  stop() {
    if (this.animationFrame) {
      window.cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
  }

  renderFrame(now) {
    if (this.lastTime === null) {
      this.lastTime = now;
    }
    const delta = (now - this.lastTime) / 1000;
    this.lastTime = now;

    this.material.uniforms.uTime.value += delta;
    this.mesh.rotation.y += delta * 0.15;
    this.mesh.rotation.x += delta * 0.05;

    this.renderer.render(this.scene, this.camera);
    this.animationFrame = window.requestAnimationFrame(this.renderFrame);
  }

  queueResize() {
    if (this.resizeFrame) {
      return;
    }
    this.resizeFrame = window.requestAnimationFrame(() => {
      this.resizeFrame = null;
      if (!this.renderer || !this.container.current) {
        return;
      }
      const { clientWidth: width, clientHeight: height } = this.container.current;
      this.renderer.setSize(width, height);
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      if (this.prefersReducedMotion) {
        this.renderer.render(this.scene, this.camera);
      }
    });
  }

  render() {
    return (
      <div className="morphing-mesh" aria-hidden="true" ref={this.container}>
        <style jsx>{`
          .morphing-mesh {
            width: 100%;
            height: 320px;
            pointer-events: none;
            display: flex;
            justify-content: center;
            overflow: hidden;
          }

          .morphing-mesh :global(canvas) {
            display: block;
          }

          @media only screen and (max-width: 45rem) {
            .morphing-mesh {
              height: 200px;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default MorphingMesh;
