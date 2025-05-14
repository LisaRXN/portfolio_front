import { Title } from "../components/Title";
import { Pong } from "../components/Pong";
import { PongMobile } from "../components/PongMobile";
import { Skill } from "../components/Skill";
import { useEffect, useState } from "react";
import { Project } from "../components/Project";
import { ContactForm } from "../components/ContactForm";
import { Helmet } from "react-helmet";
import { Typewriter } from "react-simple-typewriter";

export function Home() {
  const [text, setText] = useState([
    "Focused on building powerful and intuitive websites and applications",
  ]);

  //changement du titre
  useEffect(() => {
    document.title = "Home";
  }, []);

  //scroll jusqu'au contact
  const handleContact = () => {
    const contact_div = document.querySelector(".contact");

    window.scrollTo({
      top: contact_div.offsetTop - 100,
      behavior: "smooth",
    });
  };

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
        <title>Home - Porfolio Lisa Eriksen</title>
        <meta
          name="description"
          content="Welcome to the homepage of my Fullstack Portfolio !"
        />
        <meta name="keywords" content="Home, homepage, Fullstack Portfolio" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="web-container">
        {/*----------- banner -----------*/}

        <section className="banner">
          <div className="banner-left">
            <p className="banner-title">
              Hi, I{"'"}m Lisa, a passionate{" "}
              <span className="gradient-text">front-end</span> developer
            </p>

            <div className="banner-text">
              <Typewriter words={text} />
            </div>
            <button onClick={handleContact} className="banner-btn">
              Contact me {">>"}
            </button>
          </div>

          <div className="banner-right">
            <img
              src="/img/lisa.png"
              alt="Portrait of Lisa Eriksen, a fullstack web developper"
            ></img>
            <span></span>
          </div>
        </section>

        {/*----------- quotes -----------*/}
        <section className="quote">
          <span className="quote-top">{'"'}</span>
          <p>
            In a universe of infinite possibilities, every bug is an opportunity
            to discover a new dimension of solutions
          </p>
          <span className="quote-bottom">{'"'}</span>
        </section>

        {/*----------- projecs -----------*/}

        <Title title="projects" all={true} />

        <Project />

        {/*----------- skills -----------*/}

        <Title title="skills" />

        <section className="skills">
          <div className="skills-left">
            <div className="skills-left-container">
              <Skill
                title="Langagues"
                text="TypeScript JavaScript SQL Python"
              />
              <Skill title="Tools" text="Figma Git GitHub" />
            </div>
            <div className="skills-left-container">
              <Skill
                title="Frameworks and Libraries"
                text="Angular React Next.js Node.js Express"
              />
              <Skill title="Styling & Design" text="Tailwind CSS SCSS" />
            </div>
          </div>
          <div className="skills-right">
            {mobileSize ? <PongMobile /> : <Pong></Pong>}
          </div>
        </section>

        {/*----------- about -----------*/}

        <Title title="about-me" all={true} />

        <section className="about">
          <p>
            Web developer with a background in physics, originally from France
            and now based in Spain. I’m passionate about algorithms and enjoy
            the way they resemble solving physical equations. For me, coding is
            about finding elegant solutions to complex challenges. My training
            at the Coding Academy of Epitech has provided me with a strong
            foundation in web development, blending the logical thinking of a
            physicist with the creativity of a coder. I’m eager to contribute to
            innovative projects where every challenge is an opportunity to
            create something meaningful.
          </p>
          <div className="about-right">
            <a
              className="page-about-btn"
              href="/CV_ERIKSEN.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View my CV
            </a>
          </div>

          <img src=""></img>
        </section>

        {/*----------- contact -----------*/}

        <Title title="contact" all={false} />

        {/* <section className="contact">
          <div className="contact-left">
            <p className="contact-text">
              I{"'"}m currently looking to join a dynamic team of developers
              where I can contribute, learn, and grow. Feel free to reach out if
              you
              {"'"}d like to connect!
            </p>

            <div className="contact-card">
              <div className="contact-card-title">Contact me here</div>
              <div className="contact-card-body">
                <div>
                  <img src="/img/mail.png" alt="Email icon"></img>{" "}
                  <a
                    href="mailto:lisa.eriksen@epitech.eu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Email me
                  </a>
                </div>
                <div>
                  <img src="/img/linkedin.png" alt="LinkedIn icon"></img>
                  <a
                    href="https://www.linkedin.com/in/lisa-eriksen-738a6533a/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linkedin
                  </a>
                </div>
                <div>
                  <img src="/img/github.png" alt="GitHub icon"></img>{" "}
                  <a
                    href="https://github.com/LisaRXN"
                    target="_blank"
                    title="Email me"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </div>
                <img></img>
                <p></p>
              </div>
            </div>
          </div>
          <ContactForm />
        </section> */}

        <section className="contact">
          <div className="contact-left">
            <p className="contact-text">
              I{"'"}m currently looking to join a dynamic team of developers
              where I can contribute, learn, and grow. Feel free to reach out if
              you
              {"'"}d like to connect!
            </p>
          </div>
          <div className="contact-card">
            <div className="contact-card-title">Contact me here</div>
            <div className="contact-card-body">
              <div>
                <img src="/img/mail.png" alt="Email icon"></img>{" "}
                <a
                  href="mailto:lisa.eriksen@epitech.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Email me
                </a>
              </div>
              <div>
                <img src="/img/linkedin.png" alt="LinkedIn icon"></img>
                <a
                  href="https://www.linkedin.com/in/lisa-eriksen-738a6533a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </div>
              <div>
                <img src="/img/github.png" alt="GitHub icon"></img>{" "}
                <a
                  href="https://github.com/LisaRXN"
                  target="_blank"
                  title="Email me"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </div>
              <img></img>
              <p></p>
            </div>
          </div>
        </section>

        {/*----------- web-container -----------*/}
      </div>
      {/*------------------------------------*/}
    </>
  );
}
