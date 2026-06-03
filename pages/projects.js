import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Misc from "../components/Misc";
import Project from "../components/Project";
import ProjectsList from "../components/Projects";
import Row from "../components/Row";

const ProjectsPage = () => {
  const projects = new ProjectsList().projects;
  return (
    <div className="Projects container">
      <Navbar nextProjectLink={null} nextProjectName={null} color="grey" />
      <Row
        content={
          <div className="col-xs-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 archive-intro">
            <h1>Archive</h1>
            <p>
              Older selected work stays here because it still shows useful thinking, process, artifacts, and constraints. HRI Study and Aikakone remain the strongest archive cases while newer case-study material is being developed; Kiva Kaupunki is kept as supporting evidence for civic MVP and implementation work.
            </p>
          </div>
        }
      />
      <Row
        content={
          <h2 className="col-xs-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 archive-heading archive-heading-first">
            Selected older cases
          </h2>
        }
      />
      {projects.map((p) => (
        <Project
          key={p.name}
          title={p.name}
          description={p.description}
          link={p.link}
          image={p.image}
          alt={p.alt}
          color={p.color}
          label={p.label}
          parallax={false}
        />
      ))}
      <Row
        content={
          <h2 className="col-xs-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 archive-heading">
            Foundations
          </h2>
        }
      />
      <Row
        content={
          <p className="col-xs-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 archive-copy">
            Earlier community, course, and volunteer work is kept as provenance: useful context for facilitation, collaboration, and early service-design practice, without making it the lead professional signal.
          </p>
        }
      />
      <Misc />
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

        .archive-intro,
        .archive-heading,
        .archive-copy {
          margin-top: 1.5rem;
        }

        .archive-intro h1 {
          margin-bottom: 0.5rem;
        }

        .archive-heading {
          margin-top: 4rem;
          margin-bottom: 0.25rem;
        }

        .archive-heading-first {
          margin-top: 3rem;
        }

        .archive-copy {
          margin-bottom: 0;
        }
      `}</style>
    </div>
  );
};

export default ProjectsPage;
