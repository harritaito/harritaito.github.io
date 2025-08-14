import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Project from "../components/Project";
import ProjectsList from "../components/Projects";

const ProjectsPage = () => {
  const projects = new ProjectsList().projects;
  return (
    <div className="Projects container">
      <Navbar nextProjectLink={null} nextProjectName={null} color="grey" />
      {projects.map((p) => (
        <Project
          key={p.name}
          title={p.name}
          description={p.description}
          link={p.link}
          image={p.image}
          alt={p.alt}
          color={p.color}
          parallax={false}
        />
      ))}
      <Footer />
      <style jsx>{`
        .Projects {
          padding-top: 5rem;
          padding-bottom: 2rem;
        }
        @media only screen and (max-width: 45rem) {
          .Projects {
            padding-top: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectsPage;
