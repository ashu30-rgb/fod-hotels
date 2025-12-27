"use client"
import React, { useEffect } from 'react'
import aos from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { Check } from 'lucide-react';
import StatsCount from '../_components/StatsCount';
import ContactUs from '../_components/ContactUs';


function AboutPage() {
    useEffect(() => {
        aos.init({ once: true })
    }, [])
    return (
        <>
            <div id="about" className="relative head-top min-h-screen bg-black text-white flex justify-center items-center">
                <div className="top-overlay absolute top-0 left-0 h-full w-full"></div>
                <div data-aos="fade-right" className='relative max-w-6xl mx-auto'>
                    <div className='text-3xl md:text-[4rem] xl:text-[7rem] font-semibold blend mb-6 xl:mb-12 text-center '>About <span className='text-fodOrange'>FOD</span> Hotels</div>
                    <div className='md:flex justify-end'>
                        <div className='text-xl lg:text-3xl text-center italic'>Welcome to FOD Hotels, where comfort meets convenience, and every stay feels effortless. A trusted hospitality experience.</div>
                    </div>
                </div>
            </div>
            <section className='flex  flex-col gap-8 md:gap-0 relative p-10 md:pb-44'>
                <div className='rx-logo-bg'></div>
                <div className='w-full flex flex-col items-start  relative  max-w-6xl mx-auto'>
                    <div data-aos="fade-up" className='uppercase text-sm md:text-md tracking-wider mb-4 text-fodOrange'>Company overview</div>
                    <div data-aos="fade-up" className='text-3xl md:text-4xl tracking-wide md:w-2/4 font-semibold md:leading-normal'>FOD Hotels is your reliable stay partner, offering comfortable accommodations with thoughtful service and trusted hospitality.</div>
                </div>
                <div className='w-full flex md:justify-end  relative max-w-6xl mx-auto'>
                    <div className='md:w-2/4'>
                        <div data-aos="fade-up" className='text-3xl font-bold text-fodBlue title-underline-orange mb-6'>Why FOD Hotels?</div>
                        <div data-aos="fade-up" className='text-sm mb-4 md:mb-6 tracking-wider md:tracking-widest md:leading-relaxed'>With a focus on comfort and reliability, we&apos;re redefining the way people experience stays. Our mission is simple: to deliver welcoming spaces filled with ease, care, and lasting comfort.
                            <ul className='text-sm uppercase tracking-wide mt-5'>
                                <li data-aos="fade-left" className='flex gap-2 items-center mb-3'>
                                    <Check className='text-fodOrange' />
                                    Thoughtfully Designed Stays
                                </li>
                                <li data-aos="fade-right" className='flex gap-2 items-center mb-3'>
                                    <Check className='text-fodOrange' />
                                    Reliable Hospitality and Support
                                </li>
                                <li data-aos="fade-left" className='flex gap-2 items-center mb-3'>
                                    <Check className='text-fodOrange' />
                                    Commitment to Guest Satisfaction
                                </li>
                                <li data-aos="fade-right" className='flex gap-2 items-center mb-3'>
                                    <Check className='text-fodOrange' />
                                    Comfortable and Flexible Stay Options
                                </li>
                                <li data-aos="fade-left" className='flex gap-2 items-center'>
                                    <Check className='text-fodOrange' />
                                    A Trusted Stay Experience
                                </li>

                            </ul></div>
                    </div>
                </div>
                <div className='md:-mt-56 md:-mb-56 lg:-mb-96 z-10 relative w-full hidden md:block'>
                    <Image className='rounded-lg border-4 border-white' src={"https://res.cloudinary.com/dgghqzaxo/image/upload/v1761246540/FOD%20Holidays/WhatsApp_Image_2025-10-21_at_00.53.00_vwsoe3.jpg"} height={500} width={600} alt="team" />
                </div>
            </section>
            <section className='relative head-top about-middle-bg md:pt-32 lg:pt-64'>
                <div className="top-overlay absolute top-0 left-0 h-full w-full"></div>
                <div className='mx-auto max-w-5xl p-7 flex items-center relative'>
                    <div className='text-white lg:mr-40'>
                        <div className='uppercase text-sm md:text-md tracking-widest mb-6 opacity-85'>STAY EXPERIENCES</div>
                        <div className='text-2xl md:text-4xl tracking-wide font-semibold mb-6'>Step into a world of comfort and ease with FOD Hotels — creating relaxing stays across thoughtfully chosen destinations!</div>
                    </div>
                </div>        </section>
            <section className="bg-fodOrange/10 p-10">
                <StatsCount />
            </section>
            <ContactUs />
        </>
    )
}

export default AboutPage