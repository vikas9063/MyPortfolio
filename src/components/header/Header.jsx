import React, { useRef, useState } from 'react'
import { Menu, MoveRight, X } from "lucide-react";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Header = () => {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    const mobileMenuRef = useRef(null);
    useGSAP(() => {
        if (mobileDrawerOpen) {
            gsap.from('.mobile-menu', {
                y: -10,
                opacity: 0.5,
                duration: 1,
                stagger: {
                    amount: 0.2,
                    ease: 'circ.inOut'
                }
            })
        }
    }, [mobileDrawerOpen])

    return (
        <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg '>
            <div className="container mx-auto relative px-10 md:px-24">
                <div className="flex justify-between items-center">
                    <div className='logo'>
                        <p className='text-3xl uppercase bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text cursor-pointer'>Vikky Portfolio</p>
                    </div>
                    <div className='menus hidden lg:flex'>
                        <ul className='flex justify-between items-center gap-5 font-light text-base/loose'>
                            {['Home', 'Services', 'Feature', 'Aboutus', 'Contact us'].map(service => (
                                <li key={service} className='cursor-pointer hover:text-orange-500 hover:ease-in duration-200 tracking-wide'>{service}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='buttons'>
                        <button className='hidden lg:flex px-8 py-2 border border-orange-600 rounded-xl hover:bg-orange-600 hover:ease-in duration-200'>Login</button>
                        <div className="lg:hidden md:flex flex-col justify-end">
                            <button
                                onClick={toggleNavbar}
                            >
                                {mobileDrawerOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>

                        </div>
                    </div>


                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 top-20 z-20 bg-black w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {['Home', 'Services', 'Feature', 'Aboutus', 'Contact us'].map(service => (
                                <li ref={mobileMenuRef} key={service} className='mobile-menu cursor-pointer font-light text-xl tracking-wider my-3'>{service}</li>
                            ))}
                        </ul>
                        <div className="button">
                            <button className='mobile-menu mt-5 flex justify-around w-36 px-8 py-2 border border-orange-600 rounded-md hover:bg-orange-600 hover:ease-in duration-200'>Login <span className='ml-2'><MoveRight /></span></button>
                        </div>
                    </div>
                )}

            </div>
        </nav>
    )
}

export default Header
