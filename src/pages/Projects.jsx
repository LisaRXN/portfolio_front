import { Carousel } from "../components/Carousel";
import { PageTitle } from "../components/PageTitle";
import { Title } from "../components/Title";
import { CardProject } from "../components/CardProject";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

export function Projects() {
  const [projects, setProjects] = useState([]);

  //changement du titre
  useEffect(() => {
    document.title = "Projects";
  }, []);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch projects data.");
        }
        return response.json();
      })
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);


  return (
    <>
      <Helmet>
        <title>My Fullstack Projects</title>
        <meta name="description" content="Explore my latest projects built with fullstack development using modern web technologies." />
        <meta name="keywords" content="React, Web Development,Fullstack, Projects, Technology" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="web-container">
        <PageTitle
          title="My projects"
          subtitle="Explore my work, where passion meets purpose."
        />

        {projects.map((project, index) => {
          return (
            <>
              <Title title={project.title} />
              <Carousel key={index} slides={project.slides} project={project} />
              <CardProject
                key={`cardProject-${index}`}
                title={project.title}
                stack={project.stack}
                text={project.text}
                links={project.links.map((link) => ({
                  href: link.href,
                  label: link.label,
                }))}
              />
            </>
          );
        })}


        <Title title="comments" />

        <div className="form">
          <div className="form-container form-comments-container">
            <p className="form-title">
              If you liked any of these projects, leave me a comment:
            </p>
            <textarea
              className="form-comments-input"
              rows="5"
              cols="4"
              placeholder=""
            ></textarea>
            <a className="card-links" type="submit">
              Send {">>"}
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
