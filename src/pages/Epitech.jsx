import { Competencies } from "../components/epitech/Competencies";
import { Career } from "../components/epitech/Career";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Title } from "../components/Title";
import { PageTitle } from "../components/PageTitle";
import { Timeline } from "../components/Timeline";
import { Rncp1 } from "../components/epitech/Rncp1";
import { Carousel } from "../components/Carousel";
import { Rncp2 } from "../components/epitech/Rncp2";

export function Epitech() {
  const portfolioSlides = [
    {"src": "/img/portfolio1.png"},
    {"src": "/img/portfolio2.png"},
    {"src":"/img/portfolio3.png"}
  ];

  useEffect(() => {
    document.title = "Epitech";
  }, []);

  const [text, setText] = useState([
    "Exclusively visible to my amazing teaching team !",
  ]);

  const [projects, setProjects] = useState([]);
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
      <div className="web-container">
        {/*----------- banner -----------*/}

        <section className="banner">
          <div className="banner-left">
            <p className="banner-title">
              <span
                className="gradient-text"
                style={{ fontSize: "70px", lineHeight: "90px" }}
              >
                Pedagogic Portfolio
              </span>
            </p>

            <div className="banner-text" style={{ fontSize: "30px" }}>
              <Typewriter words={text} />
            </div>
          </div>

          <div className="banner-right">
            <img
              src="/img/lisa.png"
              alt="Portrait of Lisa Eriksen, a fullstack web developper"
            ></img>
          </div>
        </section>

        {/*----------- projets -----------*/}

        <PageTitle title="My Projects" />

        <Title title="I-Shop" />
        {projects.length > 0 && projects[0].slides && (
          <Carousel slides={projects[0].slides} project={projects[0]} />
        )}
        <Rncp1></Rncp1>

        <Title title="Portfolio" />
        <Carousel slides={portfolioSlides} project={portfolioSlides} />

        <Rncp2></Rncp2>

        <br></br>
        <br></br>
        <br></br>
        <Competencies />



{/*       
        <Title title="Projects" all={true} />
        <Project /> */}

        {/* <Title title="Progress Overview" />

        <div style={{ padding: "0 50px 50px 50px" }}>
          <p>
            Since the beginning of the Coding Academy at Epitech in October, I
            have made significant progress in my web development skills. I have
            gained a solid understanding of fundamental concepts such as
            algorithms, inheritance in programming, and API management, which
            allow me to write structured and optimized code.{" "}
          </p>
          <br></br>

          <p>
            Today, I am capable of developing a complete website, including the
            backend (PHP or Node.js) and the front-end (HTML, SCSS, and React).
            These skills provide me with the autonomy needed to create
            functional and well-designed projects.{" "}
          </p>
          <br></br>

          <p>
            However, I still have room for improvement, particularly in
            understanding the various options for deploying websites and the
            workings of servers. Although I have already deployed a few
            projects, I feel the need to master the tools and configurations
            that enable effective site management in production. These
            limitations represent opportunities for me to continue learning and
            improving in a field that I am passionate about.
          </p>
        </div> */}

        <br></br>

        {/*----------- about -----------*/}
        <PageTitle title="About-me" />

        <Title title="who I am" />

        <div className="page-about">
          <div className="page-about-left">
            <p className="page-about-text">
              A Web developer with a background in physics, originally from
              France and now based in Spain. I’m passionate about algorithms and
              enjoy the way they resemble solving physical equations. Coding for
              me is about finding elegant solutions to complex problems. My
              training at the Coding Academy of Epitech has provided me with a
              strong foundation in web development, blending the logical
              thinking of a physicist with the creativity of a coder. I’m eager
              to contribute to innovative projects where every challenge becomes
              an opportunity to create something impactful.
            </p>

            <a
              className="page-about-btn"
              href="/ERIKSEN_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View my CV
            </a>
          </div>

          <div className="page-about-right">
            <img
              src="/img/lisa2.png"
              alt="Portrait of Lisa Eriksen, fullstack web developper"
            ></img>
          </div>
        </div>

        {/*----------- My background -----------*/}
        <Title title="my background" />

        <div className="about-formation">
          <div className="about-formation-card">
            <div className="about-formation-card-title">
              <p>My Training</p>
            </div>

            <div className="about-formation-card-description">
              <div className="about-formation-card-date">2024</div>
              <div className="about-formation-card-text">
                Fullstack Development at the Coding Academy by Epitech,
                Barcelona Campus, Spain.
              </div>
            </div>
          </div>

          <div className="about-formation-card">
            <div className="about-formation-card-title">
              <p>My Education</p>
            </div>

            <div className="about-formation-card-description">
              <div className="about-formation-card-date">2005::2010</div>
              <div className="about-formation-card-text">
                Master{"'"}s Degree in Physics and Chemistry, University of
                Paris-Saclay, France.
              </div>
            </div>
          </div>
        </div>

        <br></br>

        {/*----------- Career -----------*/}
        <Title title="my career" />

        <Timeline />

        <PageTitle title="More Information" />
        <br></br>

        <Career />
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}
