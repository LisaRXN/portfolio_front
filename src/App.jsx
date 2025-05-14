import { Header } from "./components/Header.jsx";
import { Home } from "./pages/Home.jsx";
import { Projects } from "./pages/Projects.jsx";
import { About } from "./pages/About.jsx";
import { Epitech } from "./pages/Epitech.jsx";
import { SignIn } from "./pages/SignIn.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />

        <div className="global">
          <Routes>
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/epitech" element={<Epitech />} />
          </Routes>
        </div>

        <Footer />

      </Router>
    </>
  );
}

export default App;
