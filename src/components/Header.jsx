import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePage, setActivePage] = useState("home");

  const navigate = useNavigate(); 


  const handleLinkClick = (page) => {
    setActivePage(page);
    navigate(page)
    setIsModalOpen(false)
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800 && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isModalOpen]);

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Lisa Eriksen'portfolio. Web developer, fullstack developer, PHP Node.js javascript React Vue.js."
        />
        <link rel="icon" href="/img/logo-lisa.ico" />
        <title>Lisa Eriksen fullstack developper Portfolio</title>
      </head>

      <nav className="navbar">

        <div className="navbar-logo">
          {/* <span style={{ color: "#646cff" }}>{"< "}</span>
          <a onClick={() => navigate('home')}>Lisa</a>
          <span style={{ color: "#646cff" }}>{" />"}</span> */}
          <a onClick={() => navigate('home')}><img className="navbar-logo-img"src="/img/logo-lisa.ico"></img></a>
        </div>

        <div className="navbar-links">
          <a
            className={activePage === "home" ? "active" : ""}
            onClick={() => handleLinkClick("home")}
          >
            <span>#</span>home
          </a>
          <a
            className={activePage === "projects" ? "active" : ""}
            onClick={() => handleLinkClick("projects")}
          >
            <span>#</span>projects
          </a>
          <a
            className={activePage === "about" ? "active" : ""}
            onClick={() => handleLinkClick("about")}
          >
            <span>#</span>about-me
          </a>
          <a
            className={activePage === "epitech" ? "active" : ""}
            onClick={() => handleLinkClick("signin")}
          >
            <div className="navbar-epitech-container"><img className="navbar-epitech" src="/img/epitech.png"></img></div>
          </a>
        </div>
        <div
          className="navbar-toggle"
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          <span>&#9776;</span>
        </div>

        {isModalOpen && (
          <div className="navbar-modal">
            <a onClick={() => handleLinkClick("home")}>
              <span>#</span>home
            </a>
            <a onClick={() => handleLinkClick("projects")}>
              <span>#</span>projects
            </a>
            <a onClick={() => handleLinkClick("about")}>
              <span>#</span>about-me
            </a>
            <a
            className={activePage === "epitech" ? "active" : ""}
            onClick={() => handleLinkClick("signin")}
          >
            <div className="navbar-epitech-container"><img className="navbar-epitech" src="/img/epitech.png"></img></div>
          </a>
          </div>
        )}
      </nav>
    </>
  );
}
