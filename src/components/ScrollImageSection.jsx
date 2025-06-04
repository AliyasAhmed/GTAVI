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
        end: "+=1200",
        pin: true,
        scrub: 2,
      }
    });

    tlIII.to('.scrollimg', {
      opacity: 0,
      scale: 1.1,
      ease: "none"
    }, 0);

    tlIII.to('.scrollimg1', {
      opacity: 1,
      scale: 1.1,
      ease: "none"
    }, 0);
    
    tlIII.to('.scrollimg2', {
      opacity: 1,
      scale: 1.1,
      ease: 'power3.out'
    }, 1);
  }, []);

  return (
    <div className="sec2 h-[120vh] relative overflow-hidden">
      <div className="imgcont absolute inset-0">
        <img className="scrollimg absolute inset-0 w-full h-full object-cover opacity-100" src="./Boobie_Ike_02.jpg" />
        <img className="scrollimg1 absolute inset-0 w-full h-full object-cover opacity-0" src="./Raul_Bautista_landscape.jpg" />
        <img className="scrollimg2 absolute inset-0 w-full h-full object-cover opacity-0" src="./DreQuan_Priest_03.jpg" />
      </div>
      <div className='w-full py-[20rem] px-10 bg-gradient-to-t from-[#14131C] to-transparent absolute bottom-0'></div>
    </div>
  );
}