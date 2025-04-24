import "react-vertical-timeline-component/style.min.css";
import { PageTitle } from "../components/PageTitle";
import { Title } from "../components/Title";
import { Timeline } from "../components/Timeline";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Skill } from "../components/Skill";
import { PongMobile } from "../components/PongMobile";
import { Pong } from "../components/Pong";

export function About() {
  //changement du titre
  useEffect(() => {
    document.title = "About-me";
  }, []);


    //modification du ping-pong
    const [mobileSize, setMobileSize] = useState(false);


    const handleSize = () => {
      if (window.innerWidth <= 600) {
        setMobileSize(true);
      } else {
        setMobileSize(false);
      }
    };
  
    useEffect(() => {
      handleSize();
      window.addEventListener("resize", handleSize);
  
      return () => {
        window.removeEventListener("resize", handleSize);
      };
    }, []);

  return (
    <>
      <Helmet>
        <title>About Me</title>
        <meta
          name="description"
          content="Learn more about me, my journey in web development, and the projects I'm passionate about."
        />
        <meta
          name="keywords"
          content="web development, fullstack, programming, about me, developer, journey, react, node.js, php, javascript, mysql. "
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="web-container">
        <PageTitle
          title="About-me"
          subtitle="Snapshot of my career journey and personnel background."
        />


        {/*----------- Who am I-----------*/}
        <Title title="who am I" />

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
              href="/CV_ERIKSEN.pdf"
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
                Web and mobile application development (RNCP5) at Epitech,
                Barcelona Campus, Spain.
              </div>
            </div>
          </div>

          <div className="about-formation-card">
            <div className="about-formation-card-title">
              <p>My Education</p>
            </div>

            <div className="about-formation-card-description">
              <div className="about-formation-card-date">2005::2011</div>
              <div className="about-formation-card-text">
                Master{"'"}s Degree in Physics and Chemistry, University of
                Paris-Saclay, France.
              </div>
            </div>
          </div>
        </div>

        {/*----------- skills -----------*/}
        <Title title="skills" />

        <section className="skills">
          <div className="skills-left">
            <div className="skills-left-container">
              <Skill title="Langagues Back-end" text="Python PHP Node.js" />
              <Skill title="Databases" text="SQLite MySQL" />
            </div>
            <div className="skills-left-container">
              <Skill title="Langagues Front-end" text="JavaScript CSS SCSS" />
              <Skill
                title="Frameworks and Libraries"
                text="Express Vue.js React"
              />
            </div>
          </div>
          <div className="skills-right">
            {mobileSize ? <PongMobile /> : <Pong></Pong>}
          </div>
        </section>

        {/*----------- Timeline -----------*/}
        <Title title="my profesional journey" />
        <Timeline />
      </div>

      <Footer />
    </>
  );
}
