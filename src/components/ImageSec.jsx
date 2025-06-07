import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ImageSec({ images, sectionClass, id }) {
  const imgRef = useRef(null);

  useGSAP(() => {
    gsap.to(imgRef.current, {
      y: "-15%",
      ease: "none",
      scrollTrigger: {
        trigger: `.${sectionClass}`,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div
      className={`parallax-section ${sectionClass} w-full h-screen overflow-hidden relative`}
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 91%)" }}
    >
      <img
        ref={imgRef}
        src={images}
        alt=""
        className="absolute top-0 left-0 w-full h-[120%] object-cover"
      />
    </div>
  );
}
