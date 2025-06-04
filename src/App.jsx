import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LoadingScreen from './components/LoadingScreen';
import HeroSection from './components/HeroSection';
import TextAnimation from './components/TextAnimation';
import ScrollImageSection from './components/ScrollImageSection';
import SVGMaskSection from './components/SVGMaskSection';
import Lenis from 'lenis'



gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function App() {


  const lenis = new Lenis();

  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  const [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to('.vi-mask-group', {
      rotate: 15,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
      duration: 2
    })
      .to('.vi-mask-group', {
        scale: 10,
        duration: 2,
        delay: -1.8,
        ease: "Expo.easeInOut",
        transformOrigin: "50% 50%",
        opacity: 0,
        onUpdate: function () {
          if (this.progress() >= .9) {
            setShowContent(true);
            this.kill();
          }
        }
      });
  }, []);

  return (
    <>
      {!showContent && <LoadingScreen />}

      {showContent && (
        <div className='all w-full'>
          <HeroSection />
          <TextAnimation />
          <ScrollImageSection />

          <div className="contsec3 relative bg-[#14131C]">
            <SVGMaskSection
              id="sec3"
              maskId="viMask"
              text="GTA"
              fontSize="700%"
              imageUrl="/Jason_and_Lucia_02_With_Logos_landscape.jpg"
              scaleTarget={90}
              sectionClass="sec3"
            />
          </div>

          <div className="relative bg-[#14131C]">
            <SVGMaskSection
              id="sec4"
              maskId="viMask1"
              text="VI"
              fontSize="250"
              imageUrl="/DreQuan_Priest_landscape.jpg"
              scaleTarget={26}
              sectionClass="sec4"
            />
          </div>
        </div>
      )}
    </>
  );
}