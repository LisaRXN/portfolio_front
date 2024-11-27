// import { Typewriter } from "./Typewriter";
import { Typewriter } from 'react-simple-typewriter';
// import TypeWriter from 'react-typewriter';



export function PageTitle({ title, subtitle }) {

  const array = [subtitle]

  return (
    <>
      <div className="page-projects">
        <div className="page-projects-title">
          <span>{"{"}</span>
          <h1>{title}</h1>
          <span>{"}"}</span>
        </div>
        

        <div className="page-projects-subtitle">
          {<Typewriter typeSpeed={80} words={array}></Typewriter>}
        </div>
      </div>
    </>
  );
}
