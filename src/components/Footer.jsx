import { useNavigate } from "react-router-dom";

export function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <nav className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            <p>
              <span>{"< "}</span>
              <a onClick={() => navigate("/home")}>Lisa</a>
              <span>{" />"}</span>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <a href="https://www.linkedin.com/in/lisa-eriksen-738a6533a/" target="_blank">
            <img src="/img/linkedin.png"></img>
          </a>
          <a href="https://fr.github.com/LisaRXN" target="_blank">
            <img src="/img/github.png"></img>
          </a>
          <a href="https://www.instagram.com/lisa_rxn/" target="_blank">
            <img src="/img/instagram.png"></img>
          </a>
        </div>
      </nav>
    </footer>
  );
}
