import React, { Component } from 'react';
import Link from 'next/link'
import Project from '../components/Project';
import Row from '../components/Row';
import Misc from '../components/Misc';
import Footer from '../components/Footer';

import kivakaupunki from '../static/media/home/kivakaupunki.jpg';
import aikakone from '../static/media/home/aikakone.jpg';

class Home extends Component {

  constructor(){
    super();

    const date = new Date();

    let hours = date.getHours();

    if(hours < 12){
      this.state = {
        greeting: "Good morning"
      }
    }
    else if (hours >= 12 && hours<= 17){
      this.state = {
        greeting: "Good afternoon"
      }
    }
    else if (hours > 17 && hours <= 24){
      this.state = {
        greeting: "Good evening"
      }
    }
    else {
      this.state = {
        greeting: "Hello"
      }
    }
  }

  render() {

    return (
      <div className="Home container">
        <div className="pohja">
        </div>
        <div className="intro">

          <Row content={
            <h3 className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">{this.state.greeting}, I’m</h3>
          }/>

          <Row content={
            <h1 className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 name">Harri Halonen</h1>
          }/>

          <Row content={
            <div className="col-xs-12 col-sm-8 col-md-9 col-lg-6 col-xl-6">
              <p>
                An experience designer passionate about creating better customer insight, increasing business value and improving customer experience for every client. 
                I believe in quick results withdrawn from user centered - hands on research and co-creation. 
              </p>
              <p>
                You could say I'm on a quest to make technology delightful, intuitive, and accessible to
                everyone.
              </p>
              <p>
                Currently I'm planning my Master's degree thesis for Tampere University's HCI program and searching for opportunities starting Summer 2018 and beyond.
              </p>
              <p>
                Scroll down to see some highlighted projects, or get an overall sense by <a href={'/static/HarriHalonen_Resume.pdf'} target="_blank">reading my resume.<div style={{content: '',display: 'block', height: 8, width: '98%', background: 'rgba(139, 200, 246, 0.565)', marginTop: -9, marginLeft: 2}} /></a>
              </p>
              <p>
                Want to learn about the person behind the work? <Link prefetch href='/about' as={'/about'}><a>Get to know me.<div style={{content: '',display: 'block', height: 8, width: '98%', background: 'rgba(139, 200, 246, 0.565)', marginTop: -9, marginLeft: 2}} /></a></Link>
              </p>
            </div>
          }/>

        </div>

        <Project title="Kiva Kaupunki" description="From thoughts to action. Information of surroundings to city officials as well as for the public, so they can be even better." image={kivakaupunki} link="/kivakaupunki" alt="Application for city reporting" color="blue" percentage='8%'/>

        <Project title="Aikakone" description="Dementia/Alzheimer diseases increasing and growing concern about quality of health care systems. Nurses don’t have sufficient time to engage individually and it’s difficult to get patients excited in common activities." image={aikakone} link="/aikakone" alt="Concept service for people with memory deseaces" color="purple" percentage='28%'/>

        <Row content={
          <h3 className={"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 other-stuff"}>Some other stuff I’ve done</h3>
        }/>

        <Misc/>


        <Row content={
          <h3 className={"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 get-in-touch"}>Get in touch</h3>
        }/>

        <Row content={
          <p className={"col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 col-xl-4 col-xl-offset-4 contact"}>
            Feel free to <a href="mailto:hi@harritaito.com">email me<div style={{content: '',display: 'block', height: 8, width: '98%', background: 'rgba(139, 200, 246, 0.565)', marginTop: -9, marginLeft: 2}} /></a> or <a href={"https://calendly.com/harritaito/45min/"}>book time on my calendar<div style={{content: '',display: 'block', height: 8, width: '98%', background: 'rgba(139, 200, 246, 0.565)', marginTop: -9, marginLeft: 2}} /></a>.
          </p>
        }/>

        <Footer/>

      <style jsx>{`
        .Home h1 {
          margin-top: -.5rem;
          font-family: 'Trirong', serif;
        }


        .Home {
          padding-top: 5rem;
          padding-bottom: 2rem;
        }

        .pohja {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background: url('../static/media/pohja.svg');
          background-size: cover;
          z-index: -1;
          opacity: .55;
        }

        .pohja svg {
        }

        .Home .other-stuff {
          text-align: center;
          margin-top: -1.5em;
          margin-bottom: 1.5em;
        }

        .Home .get-in-touch {
          text-align: center;
          margin-top: 4em;
          margin-bottom: 0em;
        }

        .Home .contact {
          text-align: center;
        }

        @media only screen and (max-width: 412px)  {
          .Home .name {
            font-size: 2.8em;
          }
        }
      `}</style>
      </div>
    );
  }
}

export default Home;
