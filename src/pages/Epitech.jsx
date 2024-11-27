import { Competencies } from "../components/epitech/Competencies";
import { PageTitle } from "../components/PageTitle";
import { Progress } from "../components/epitech/Progress";
import { Career } from "../components/epitech/Career";
import { useEffect } from "react";

export function Epitech() {

  useEffect(() => {
    document.title = "Epitech";
  }, []);

  return (
    <>
      <div className="web-container">
        <PageTitle
          title="Epitech"
          subtitle="Only visible for my teaching team"
        />

        <br></br>
        <br></br>


        <Competencies />

        <Progress />
        
        <Career />

      </div>
    </>
  );
}
