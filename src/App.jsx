import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react';


gsap.registerPlugin(ScrollTrigger);

export default function App() {
  let [showcontent, SetShowContent] = useState(false)
  const sec3 = useRef()
  const sec4 = useRef()
  // loading animation
  useGSAP(() => {
    const tl = gsap.timeline()
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
            document.querySelector('.svg').remove();
            SetShowContent(true)
            this.kill()
          }
        }

      })
  })
  // Mouse trigger animation
  const scaleValue = window.innerWidth < 768 ? 0.5 : 1.1;
  const charValue = window.innerWidth < 760 ? -250 : -625;
  const charScale = window.innerWidth < 760 ? 1 : 0.5;
  useGSAP(() => {
    if (!showcontent) return;
    gsap.to('.sky', {
      scale: '1.2',
      rotate: 0,
      duration: 4,
      delay: '-.8',
      ease: "Expo.easeInOut"
    })
    gsap.to('.bg', {
      scale: '1.1',
      rotate: 0,
      duration: 4,
      delay: '-.8',
      ease: "Expo.easeInOut"
    })
    gsap.to('.text', {
      scale: scaleValue,
      rotate: 0,
      duration: 4,
      delay: '-.8',
      ease: "Expo.easeInOut"
    })
    gsap.to('.char', {
      scale: charScale,
      x: '-50%',
      bottom: charValue,
      rotate: 0,
      duration: 4,
      delay: '-.4',
      ease: "Expo.easeInOut"
    })
    const main = document.querySelector('.main');
    main?.addEventListener('mousemove', (e) => {

      // const xMove = e.clientX / window.innerWidth // this value will be from 0 - 1
      const xMove = (e.clientX / window.innerWidth - .5) * 40; // this will have value of -20 to +20
      const yMove = (e.clientY / window.innerWidth - .5) * 40;

      gsap.to('.imagesdiv .text', {
        x: `${xMove * 0.2}%`,
        y: `${yMove * 0.1}%`
      });
      gsap.to('.sky ', {
        x: `${xMove * 0.3}%`,
        y: `${yMove * 0.3}%`
      });
      gsap.to('.bg ', {
        x: `${xMove * 0.1}%`,
        y: `${yMove * 0.1}%`
      });
    })
    if (window.innerWidth < 768) {
      window.addEventListener('deviceorientation', (e) => {
        const xMove = (e.gamma / 45) * 20; // gamma = left/right tilt (-90 to 90)
        const yMove = (e.beta / 90) * 20;  // beta = front/back tilt (-180 to 180)

        gsap.to('.imagesdiv .text', {
          x: `${xMove * 0.2}%`,
          y: `${yMove * 0.1}%`
        });
        gsap.to('.sky', {
          x: `${xMove * 0.3}%`,
          y: `${yMove * 0.3}%`
        });
        gsap.to('.bg', {
          x: `${xMove * 0.1}%`,
          y: `${yMove * 0.1}%`
        });
      });
    }

  }, [showcontent])


  useGSAP(() => {
    if (!showcontent) return;

    gsap.to(sec3.current, {
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      scale: 30,
      // opacity: 0,
      scrollTrigger: {
        trigger: ".sec3",
        start: "top 20%",
        end: "bottom 100%",
        scrub: 8.1,
        onLeave: () => {
          const img = document.querySelector('.sec3 image');
          if (img) img.setAttribute('mask', 'none');
        },
        onEnterBack: () => {
          const img = document.querySelector('.sec3 image');
          if (img) img.setAttribute('mask', 'url(#viMask)')

        }
      }
    });
    gsap.to(sec4.current, {
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      scale: 30,
      // opacity: 0,
      scrollTrigger: {
        trigger: ".sec4",
        start: "top 20%",
        end: "bottom 100%",
        scrub: 8.1,
        onLeave: () => {
          const img = document.querySelector('.sec4 image');
          if (img) img.setAttribute("mask", "none")
        },
        onEnterBack: () => {
          const img = document.querySelector('.sec4 image');
          if (img) img.setAttribute('mask', 'url(#viMask1)')
        }
      }
    });
  }, [showcontent]);

  return (
    <>
      {/* svg section */}
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg1.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showcontent &&
        <div className=' w-full'>
          <div className=' main relative landing w-full h-screen bg-black'>
            {/* Navbar */}
            <div className="absolute top-0 left-0 z-[10] navbar w-full py-10 px-10">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[.3rem]">
                  <div className="line w-10 h-1 bg-white"></div>
                  <div className="line w-8 h-1 bg-white"></div>
                  <div className="line w-5 h-1 bg-white"></div>
                </div>
                <h3 className='text-[1.5rem] -mt-[.5rem] leading-none text-white'>Rockstar</h3>
              </div>
            </div>

            {/* Image Div Container */}
            <div className='relative imagesdiv w-full h-screen overflow-hidden'>
              <img className='absolute sky top-0 left-0 w-full h-full object-cover scale-[1.8] rotate-[-25deg]' src="./sky.png" alt="" />

              <img className='absolute bg scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover' src="./bg1.png" alt="" />
              {/* Rockstar text */}
              <div className='text text-white absolute scale-[1.5] rotate-[-40%] top-40 left-1/2 -translate-x-1/2 flex flex-col gap-3'>
                {['grand', 'theft', 'auto VI'].map((text, i) => (

                  <h1 className={`text-[8rem] leading-none ${i === 1 ? 'ml-10' : '-ml-20'}`} key={i}>{text}</h1>
                ))}
              </div>
              {/* Main Character */}
              <img className='absolute char -bottom-[150%] left-1/2 -translate-x-1/2 scale-[1] rotate-[-20%]' src="./boy.png" alt="" />
            </div>
            {/* Bottom navbar */}
            <div className="btmbar text-white w-full py-15 px-10 bg-gradient-to-t from-black to-transparent absolute bottom-0">
              <div className='flex gap-4 items-center text-[0.8rem] lg:text-[1.5rem]'>
                <h3>Scroll Down</h3>
              </div>
              <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[4vh] lg:h-[7vh]' src="./ps5.png" alt="" />
            </div>
          </div>
          {/* second page section */}
          <div className="w-full bg-black min-h-screen flex items-center justify-center p-4">
            <div className="cntnr grid grid-cols-1 lg:grid-cols-2 gap-10 items-center text-white w-full max-w-6xl">

              {/* Left Image */}
              <div className="leftimg relative w-full h-64 md:h-96">
                <img
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.5] md:scale-[1] lg:scale-[2] max-w-full max-h-full"
                  src="./imag.png"
                  alt=""
                />
              </div>

              {/* Right Text */}
              <div className="rightimg text-center lg:text-left">
                <h1 className="text-3xl md:text-5xl lg:text-[5rem] leading-tight mb-5">For PC Gamers</h1>
                <a
                  target="_blank"
                  href="https://www.youtube.com/watch?v=l60MnDJklnM"
                >
                  <button className="bg-yellow-300 text-lg md:text-2xl px-6 py-3 md:p-5 text-black rounded-xl hover:bg-yellow-400 transition delay-150 hover:cursor-pointer">
                    Download now
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* sec 3 */}
          <div className="cont relative">
            <div className="sec3 h-[400vh] flex justify-center ">
              <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" className="sticky top-0 h-screen w-full">
                <defs>
                  <mask id="viMask">
                    <rect width="100%" height="100%" fill="black" />
                    <g ref={sec3} className="vi-mask-group">
                      <text
                        x="50%"
                        y="50%"
                        fontSize="250"
                        textAnchor="middle"
                        fill="white"
                        dominantBaseline="middle"
                        fontFamily="Arial Black"
                      >
                        GTA
                      </text>
                    </g>
                  </mask>
                </defs>
                <image
                  href="/Jason_and_Lucia_02_With_Logos_landscape.jpg"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMidYMid slice"
                  mask="url(#viMask)"
                  className='object-cover'
                />
              </svg>
              <div className='w-full py-15 px-10 bg-gradient-to-t from-black to-transparent absolute bottom-0'></div>
            </div>
          </div>
          <div className="sec4 h-[400vh] flex justify-center">
            <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" className="sticky top-0 h-screen w-screen">
              <defs>
                <mask id="viMask1">
                  <rect width="100%" height="100%" fill="black" />
                  <g ref={sec4} className="vi-mask-group">
                    <text
                      x="50%"
                      y="50%"
                      fontSize="250"
                      textAnchor="middle"
                      fill="white"
                      dominantBaseline="middle"
                      fontFamily="Arial Black"
                    >
                      VI
                    </text>
                  </g>
                </mask>
              </defs>
              <image
                href="/DreQuan_Priest_landscape.jpg"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid slice"
                mask="url(#viMask1)"
              />
            </svg>
          </div>
        </div>
      }
    </>
  )
}
