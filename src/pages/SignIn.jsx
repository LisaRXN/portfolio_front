import { useEffect, useState } from "react";
import { useNavigate} from 'react-router-dom';


export function SignIn() {

  useEffect(() => {
    document.title = "signin";
  }, []);

  const navigate = useNavigate(); 
  const [password, setPassword] = useState("");

  const verifyPassword = () => {

      if (password == "epitech") {
        console.log("yes");
        navigate("/epitech"); 

      } else {
        console.log("no");
      }

  };

  return (
    <>
      <div className="web-container">
        <div className="signin">
          <p className="signin-text">Access restricted to Epitech members.</p>
          <input
            className="signin-input"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          ></input>
          <button onClick={verifyPassword}>Enter {'>>'}</button>
        </div>
      </div>
    </>
  );
}
