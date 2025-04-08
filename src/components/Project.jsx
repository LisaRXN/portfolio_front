import { useEffect, useState } from "react";
import { Card } from "./Card";

export function Project() {
  const [projects, setProjects] = useState([]);

  console.log(projects);

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

  return(
    <div className="projects">
    {projects.slice(0,3).map((project) => (
        <Card
            id={project.id}
            key={project.id}
            iframe={project.iframe}
            image={project.image}
            stack={project.stack}
            title={project.title}
            description={project.description}
            links={project.links.map( link => ({
                href: link.href,
                label: link.label
        }))}
    />

))}
</div> )
}
