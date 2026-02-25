import React from 'react'
import {useScrollReveal} from '../hooks/useScrollReveal'
import FadeIn from './FadeIn';


const ScrollReveal = (
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,


) => {
  const { ref, isVisible} = useScrollReveal({threshold: 0.1});

  const animationClass ={
    fadeUp: "opacity-0 translate-y-8",
    FadeIn: "opacity-0",
    slideLeft: "opacity-0 -translate-x-12",
    slideRight: "opacity-0 translate-x-12",
    scaleIn: "opacity-0 scale-90",

  };

  const visibleClasses = 'opacity-100 translate-y-0 scale-100';

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${isVisible ? visibleClasses : animationClass[animation]}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );

 
}

export default ScrollReveal