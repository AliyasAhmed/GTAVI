import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollImageSection() {
  useGSAP(() => {
    const tlIII = gsap.timeline({
      scrollTrigger: {
        trigger: '.sec2',
        start: 'top top',
        end: "+=3000",
        pin: true,
        scrub: true,
      }
    });

    tlIII.to('.scrollimg', {
      opacity: 0,
      scale: 1.1,
      ease: "none"
    }, 0.25);

    
    tlIII.to('.scrollimg1', {
      opacity: 1,
      scale: 1.1,
      ease: "none"
    }, 0.25);

    tlIII.to('.scrollimg1', {
      opacity: 0,
      ease: "none"
    }, 0.95);

    
    tlIII.to('.scrollimg2', {
      opacity: 1,
      scale: 1.1,
      ease: 'none'
    }, 1);

  }, []);

  return (
    <div className="sec2 h-screen relative overflow-hidden bg-[#14131C] flex justify-center items-center">
      <div className="imgcont absolute inset-0 h-[120vh] flex justify-center items-center" style={{ clipPath: "polygon(0 5%, 100% 0, 100% 100%, 0 96%)" }}
      >
        <img className="scrollimg absolute inset-0 w-full h-full object-cover object-center opacity-100" src="./Boobie_Ike_02.jpg" />
        <img className="scrollimg1 absolute inset-0 w-full h-full object-cover object-center opacity-0" src="./Raul_Bautista_landscape.jpg" />
        <img className="scrollimg2 absolute inset-0 w-full h-full object-cover object-center opacity-0" src="./DreQuan_Priest_03.jpg" />
      </div>
      <div className='w-full py-[20rem] px-10 bg-gradient-to-t from-[#14131C] to-transparent absolute bottom-0'></div>
    </div>
  );
}