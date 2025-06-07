import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

export default function ImageSec({ images, sectionClass, id }) {
    const imgRef = useRef(null)

    useGSAP(() => {
        gsap.to(imgRef.current, {
            yPercent: -15,
            ease: 'none',
            scrollTrigger: {
                trigger: `.${sectionClass}`,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        })
    }, [])

    return (
        <>
            <div
                className={`parallax-section ${sectionClass} w-full h-[120vh] pt-10 overflow-hidden`}
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 91%)' }}
            >

                <img ref={imgRef} src={images} alt="" className="w-full h-full object-cover scale-[1.2]" />
            </div>
        </>

    )
}
