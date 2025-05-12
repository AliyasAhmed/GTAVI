import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useState } from 'react';

export default function App() {
  let [showcontent, SetShowContent] = useState(false)
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
      scale: '1.1',
      rotate: 0,
      duration: 4,
      delay: '-.8',
      ease: "Expo.easeInOut"
    })
    gsap.to('.char', {
      scale: '0.5',
      x:'-50%',
      bottom:'-605',
      rotate: 0,
      duration: 4,
      delay: '-.4',
      ease: "Expo.easeInOut"
    })
    const main = document.querySelector('.main');
    main?.addEventListener('mousemove', (e) => {

      // const xMove = e.clientX / window.innerWidth // this value will be from 0 - 1
      const xMove = (e.clientX / window.innerWidth - .5) * 40; // this will have value of -20 to +20
      const yMove = (e.clientY / innerWidth - .5) * 40;

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

  }, [showcontent])
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
        <div className='main w-full'>
          <div className='relative landing w-full h-screen bg-black'>
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
                {['grand', 'theft', 'auto'].map((text, i) => (

                  <h1 className={`text-[8rem] leading-none ${i === 1 ? 'ml-10' : '-ml-20'}`} key={i}>{text}</h1>
                ))}
              </div>
              <img className='absolute char -bottom-[150%] left-1/2 -translate-x-1/2 scale-[1] rotate-[-20%]' src="./boy.png" alt="" />
            </div>
            <div className="btmbar text-white w-full py-15 px-10 bg-gradient-to-t from-black to-transparent absolute bottom-0">
              <div className='flex gap-4 items-center text-[1.5rem]'>
                <h3>Scroll Down</h3>
              </div>
              <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[7vh]' src="./ps5.png" alt="" />
            </div>
          </div>
          {/* second page section */}
          <div className="w-full bg-black h-screen flex items-center justify-center">
            <div className="cntnr flex items-center justify-center text-white w-full h-[20%]">
              <div className="leftimg relative w-1/2 h-[full]">
                <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.3]' src="./imag.png" alt="" />
              </div>
              <div className="rightimg">
                <h1 className='text-[5rem] leading-none mb-5'>For Pc Gamers</h1>
                <a target='_blank' href="https://www.youtube.com/watch?v=l60MnDJklnM"><button className='bg-yellow-300 text-2xl p-5 text-black rounded-xl hover:bg-yellow-400 transition delay-150 hover:cursor-pointer'>Download now</button></a>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}
