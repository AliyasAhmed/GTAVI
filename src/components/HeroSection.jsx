import React, { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Navbar from './Navbar';

export default function HeroSection() {
  const mainRef = useRef(null);
  
  // Calculate responsive values inside component
  const getResponsiveValues = () => {
    return {
      scaleValue: window.innerWidth < 768 ? 0.5 : 1.1,
      charValue: window.innerWidth < 760 ? -250 : -625,
      charScale: window.innerWidth < 760 ? 1 : 0.5
    };
  };

  useGSAP(() => {
    const { scaleValue, charValue, charScale } = getResponsiveValues();
    
    // Initial animations
    gsap.to('.sky', {
      scale: '1.2',
      rotate: 0,
      duration: 4,
      delay: '-.8',
      ease: "Expo.easeInOut"
    });
    
    gsap.to('.bg', {
      scale: '1.1',
      rotate: 0,
      duration: 4,
      delay: '-.8',
      ease: "Expo.easeInOut"
    });
    
    gsap.to('.text', {
      scale: scaleValue,
      rotate: 0,
      duration: 4,
      delay: '-.8',
      ease: "Expo.easeInOut"
    });
    
    gsap.to('.char', {
      scale: charScale,
      x: '-50%',
      bottom: charValue,
      rotate: 0,
      duration: 4,
      delay: '-.4',
      ease: "Expo.easeInOut"
    });
  }, []);

  // Mouse move animation
  useEffect(() => {
    const handleMouseMove = (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      const yMove = (e.clientY / window.innerWidth - 0.5) * 40;

      gsap.to('.imagesdiv .text', {
        x: `${xMove * 0.2}%`,
        y: `${yMove * 0.1}%`
      });
      
      gsap.to('.sky', {
        x: `${xMove * 0.2}%`,
        y: `${yMove * 0.2}%`
      });
      
      gsap.to('.bg', {
        x: `${xMove * 0.1}%`,
        y: `${yMove * 0.1}%`
      });
    };

    const mainElement = mainRef.current;
    if (mainElement) {
      mainElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (mainElement) {
        mainElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div className='main relative landing w-full h-screen bg-black' ref={mainRef}>
      <Navbar />

      <div className='relative imagesdiv w-full h-screen overflow-hidden'>
        <img 
          className='absolute sky top-0 left-0 w-full h-full object-cover scale-[1.8] rotate-[-25deg]' 
          src="./sky.png" 
          alt="Sky background" 
        />
        
        <img 
          className='absolute bg scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover' 
          src="./bg1.png" 
          alt="Background" 
        />
        
        <div className='text text-white absolute scale-[1.5] rotate-[-40%] top-40 left-1/2 -translate-x-1/2 flex flex-col gap-3'>
          {['grand', 'theft', 'auto VI'].map((text, i) => (
            <h1 
              className={`text-[8rem] leading-none ${i === 1 ? 'ml-10' : '-ml-20'}`} 
              key={i}
              style={{textShadow: '0px 0px 10px white'}}
            >
              {text}
            </h1>
          ))}
        </div>
        
        <img 
          className='absolute char -bottom-[150%] left-1/2 -translate-x-1/2 scale-[1] rotate-[-20%]' 
          src="./boy.png" 
          alt="Main character" 
        />
      </div>
      
      <div className="btmbar text-white w-full py-15 px-10 bg-gradient-to-t from-[#14131C] to-[transparent] absolute bottom-0">
        <div className='flex gap-4 items-center text-[0.8rem] lg:text-[1.5rem]'>
          <h3>Scroll Down</h3>
        </div>
        <img 
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[4vh] lg:h-[7vh]' 
          src="./ps5.png" 
          alt="PlayStation 5" 
        />
      </div>
    </div>
  );
}