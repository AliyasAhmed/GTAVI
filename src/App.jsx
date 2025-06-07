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
import ImageSec from './components/ImageSec';



gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function App() {


  const lenis = new Lenis({
    duration: 2
  });

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
          <TextAnimation
            text={['"If', 'anything', 'happens', "I'm", 'right', 'behind', 'you"']}
            sectionClass={'textsec2'}
          />
          <ScrollImageSection />

          <div className="contsec3 relative bg-[#14131C]">
            <SVGMaskSection
              id="sec3"
              maskId="viMask"
              text="GTA"
              fontSize="700%"
              imageUrl="/Jason_and_Lucia_02_With_Logos_landscape.jpg"
              scaleTarget={105}
              sectionClass="sec3"
              transformOrigin={'50% 50%'}
              height={'70vh'}
            />
          </div>

          <TextAnimation
            text={"The only thing that matters is who you know and what you got".split(" ")}

            sectionClass={'textsec3'}
          />
          
          <div className='bg-[#14131C] relative'>

            <ImageSec
              images={'./Jason_and_Lucia_Motel_landscape.jpg'}
              sectionClass={'sec5'}
            />
            <div className='w-full py-[10rem] px-10 bg-gradient-to-t from-[#14131C] to-transparent absolute bottom-0'></div>
          </div>
          <div className="relative bg-[#14131C]">
            <SVGMaskSection
              id="sec4"
              maskId="viMask1"
              text="VI"
              fontSize="250"
              imageUrl="/DreQuan_Priest_03.jpg"
              scaleTarget={20}
              sectionClass="sec4"
              transformOrigin={'80% 50%'}
              height={'85vh'}
            />
          </div>
        </div>
      )}
    </>
  );
}