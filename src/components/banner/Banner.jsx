import React, { useRef } from 'react'
import modelImg from '../../assets/model.webp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import { ChevronsDown } from 'lucide-react';


gsap.registerPlugin(ScrollTrigger);
const Banner = () => {

    let bannerModelBg = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const DownArrowRef = useRef(null);
    useGSAP(() => {
        gsap.fromTo(leftRef.current, {
            x: -150,
            opacity: 0.5,

            // repeat: -1
        }, {
            x: 1,
            opacity: 1,
            ease: 'power1.inOut'
        })
        gsap.fromTo(rightRef.current, {
            x: 150,
            opacity: 0.5,

            // repeat: -1
        }, {
            x: 1,
            opacity: 1,
            ease: 'power1.inOut'
        })
        gsap.to(bannerModelBg.current, {
            scale: 1.1,
            borderRadius: '10%',
            repeat: 2,
            duration: 3
        })
    }, [])


    return (
        <div className='h-5/6 pt-60 pb-24 px-10 lg:px-32'>
            <div className='flex justify-between lg:flex-row flex-col-reverse'>
                <div ref={leftRef} className="opacity-0 w-full lg:w-1/2 flex items-center flex-col px-0 lg:px-15 mt-52 lg:mt-5">
                    <p className='text-4xl text-center'>Hey I'm <span className='tracking-wider bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent'>Vikas Kumar</span></p>
                    <p className='text-lg tracking-wider my-3'>Fullstack Developer</p>
                    <p className='text-sm font-light text-neutral-400'>Expert in Building Robust Applications with Java, WSO2, React, and Angular</p>
                    <div className="button my-5">
                        <button className='my-5 px-10 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-orange-800 hover:border'>Explore my Projects</button>
                    </div>
                </div>
                <div ref={rightRef} className="w-full lg:w-1/2 h-9 lg:h-64 flex items-center justify-center relative" >
                    <div ref={bannerModelBg} className='clip-path-banner bg-gradient-to-t from-orange-500 to-red-800 absolute lg:w-96 lg:h-96 h-96 w-80 opacity-10'>
                    </div>
                    <img src={modelImg} className='z-10 lg:h-96 lg:w-96 h-96 w-96' />
                </div>
            </div>
            <div className="flex items-center justify-center w-full lg:mt-36 mt-10 text-orange-700 cursor-pointer animate-bounce">
                <ChevronsDown size={40} />
            </div>
        </div>
    )
}

export default Banner
