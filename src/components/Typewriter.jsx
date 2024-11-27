import { useTypewriter } from "../hooks/useTypewriter";


export function Typewriter( {text, speed}){

    const typeText = useTypewriter( text, speed);

    return(
        
        <p> {typeText}</p>
    )
}