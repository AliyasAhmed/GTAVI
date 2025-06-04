import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TextAnimation() {
  useGSAP(() => {
    gsap.to('.textsec', {
      opacity: 0,
      y: 20,
      stagger: 0.5,
      duration: 0.7,
      scrollTrigger: {
        trigger: '.textdiv',
        start: 'top top',
        end: '+=800',
        pin: true,
        scrub: 3
      }
    });
  }, []);

  return (
    <div className="textdiv flex flex-wrap justify-center h-[100vh] items-center text-[4rem] lg:text-[10rem] text-white bg-[#14131C] gap-10">
      {['If', 'anything', 'happens', "I'm", 'right', 'behind', 'you'].map((text, i) => (
        <span key={i} className="textsec mx-2 text-white leading-none">{text}</span>
      ))}
    </div>
  );
}