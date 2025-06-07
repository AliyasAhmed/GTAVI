import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function TextAnimation({ text, sectionClass }) {
  const containerRef = useRef();

  useGSAP(() => {
    gsap.to(`.${sectionClass} .textsec`, {
      opacity: 0,
      y: 20,
      stagger: 0.5,
      duration: 0.7,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=1200',
        pin: true,
        scrub: 3
      }
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className={`${sectionClass} flex flex-wrap justify-center items-center h-[100vh] gap-10 bg-[#14131C]`}
    >
      {text.map((word, i) => (
        <span
          key={i}
          className="textsec text-transparent bg-clip-text bg-gradient-to-r from-[#FFF9CB] to-[#FFF9CB] text-[4rem] lg:text-[10rem] leading-none"
        >
          {word}
        </span>
      ))}
    </div>
  );
}
