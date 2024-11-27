import { useState } from "react";

export function useToggle(){

    const[ state, setState ] = useState(false)

    const toggle = () => setState( state => !state)

    return [state, toggle]
    
}