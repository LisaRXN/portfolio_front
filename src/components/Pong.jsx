import anime from "animejs";
import { useEffect, useState } from "react";


export function Pong() {



  useEffect(() => {
    
    const loop = true;
    const easing = "linear";
    const direction = "alternate";

    anime({
      targets: '.ball',
      translateX: 470,
      translateY: 100,
      easing,
      loop,
      direction,
      background: [
        { value: '#573796' }, 
        { value: '#FB89FB' },
        { value: '#FBF38C' },
        { value: '#18FF92' },
        { value: '#5A87FF' }
      ]
    })
    const ballTimeline = anime.timeline({
      loop,
      direction
    })
    const bar2Timeline = anime.timeline({
      loop,
      direction
    })
    const bar1Timeline = anime.timeline({
      loop,
      direction
    })
    ballTimeline
    .add({
      targets: '.ball',
      translateY: 100,
      translateX: 470,
      easing
    }).add({
      targets: '.ball',
      translateY: 0,
      translateX: 0,
      easing
    }).add({
      targets: '.ball',
      translateY: '-80',
      translateX: 470,
      easing
    })
    bar2Timeline
    .add({
      targets: '.bar2',
      translateY: 100,
      easing,
      background: '#573796'
    }).add({
      targets: '.bar2',
      translateY: 0,
      easing,
      background: '#FB89FB'
    }).add({
      targets: '.bar2',
      translateY: '-100',
      easing,
      background: '#FBF38C'
    })
    bar1Timeline
    .add({
      targets: '.bar1',
      translateY: '-80',
      easing,
      background: '#18FF92'
    }).add({
      targets: '.bar1',
      translateY: 10,
      easing,
      background: '#5A87FF'
    }).add({
      targets: '.bar1',
      translateY: 60,
      easing,
      background: '#FF1461'
    })
  }, []);

  return (
    <div className="container">  
        <div className="bar bar1"></div>
        <div className="ball"></div>
        <div className="bar bar2"></div>
    </div>
  );
  
}


