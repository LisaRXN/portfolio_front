import  { useState, useEffect } from 'react';

export function useTypewriter(text, speed=50){

    const [visibletext, setVisibleText] = useState('');

    useEffect( ()=> {
        let i = 0;

        const typeInterval = setInterval( ()=> {
            if (i == 0 ){
                setVisibleText(text[i])
                i++
            }
            if ( i < text.length ){
                setVisibleText( a => a + text[i-1] )
                i++
            }else{
                clearInterval( typeInterval );
            }
        }, speed)

        
        return ()=> {
            clearInterval( typeInterval );
        };
    }, [text, speed]);

    return visibletext;
}