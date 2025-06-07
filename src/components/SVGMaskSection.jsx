import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SVGMaskSection({
  id,
  maskId,
  text,
  fontSize,
  imageUrl,
  scaleTarget,
  sectionClass,
  transformOrigin,
}) {
  const maskRef = useRef(null);

  useGSAP(() => {
    const tI = gsap.timeline({
      scrollTrigger: {
        trigger: `.${sectionClass}`,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onLeave: () => {
          const img = document.querySelector(`.${sectionClass} image`);
          if (img) img.setAttribute('mask', 'none');
        },
        onEnterBack: () => {
          const img = document.querySelector(`.${sectionClass} image`);
          if (img) img.setAttribute('mask', `url(#${maskId})`);
        }
      }
    });

    tI.to(maskRef.current, {
      ease: "Expo.easeInOut",
      transformOrigin: `${transformOrigin}`,
      scale: scaleTarget,
    }, 0);

    tI.to(`.${sectionClass} image`, {
      scale: 0.9,
      transformBox: "fill-box",
      transformOrigin: "50% 50%",
      ease: "Expo.easeInOut",
    }, 0);
  }, []);

  return (
    <div className={`${sectionClass} flex ${sectionClass === 'sec4' ? "h-[300vh]" : "h-[250vh]"} justify-center`}>
      <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" className="sticky top-0 h-screen w-full">
        <defs>
          <mask id={maskId}>
            <rect width="100%" height="100%" fill="black" />
            <g ref={maskRef} className="vi-mask-group">
              <text
                x="50%"
                y="50%"
                fontSize={fontSize}
                textAnchor="middle"
                fill="white"
                dominantBaseline="middle"
                fontFamily="Arial Black, Arial, sans-serif"
              >
                {text}
              </text>
            </g>
          </mask>
        </defs>
        <image
          href={imageUrl}
          width="100%"
          height={sectionClass === 'sec4' ? "160%" : "100%"}
          preserveAspectRatio="xMidYMid slice"
          mask={`url(#${maskId})`}
          className='object-cover'
          x="0"
          y="0"
        />
      </svg>
      <div className='w-full py-[15rem] px-10 bg-gradient-to-t from-[#14131C] to-transparent absolute bottom-0'></div>
    </div>
  );
}