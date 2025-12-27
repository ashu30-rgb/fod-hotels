import React from 'react'
import customerSupport from "@fod/assets/icons/customer-support.svg";
import Image from 'next/image';
import ContactUs from '../_components/ContactUs';


function page() {
    return (
        <div className=" w-full h-full">
            <div id="contact" className="relative head-top  bg-black text-white flex justify-center items-center !bg-bottom">
                <div className="top-overlay absolute top-0 left-0 h-full w-full"></div>
                <div data-aos="fade-right" className='relative max-w-6xl mx-auto py-24 lg:py-36'>
                    <div className='text-3xl md:text-[4rem] xl:text-[6rem] font-semibold blend mb-6 xl:mb-12 text-center '>Contact <span className='text-fodOrange'>FOD</span> Hotels</div>
                    <div className='md:flex justify-end'>
                        <div className='text-xl lg:text-3xl text-center italic'>Get in touch with FOD Hotels — your next comfortable stay starts with a conversation.</div>
                    </div>
                </div>
            </div>
            <div className=" w-full py-8 p-4">
                <div className='p-8 max-w-7xl mx-auto border shadow-xl rounded-lg drop-shadow-xl'>
                    <div className='w-full text-center'>
                        <h1 className='text-xl md:text-[32px] font-bold text-center text-fodBlue title-underline-orange'>Any Questions No Worries?</h1>
                    </div>
                    <div className=" w-full flex flex-col gap-y-4">
                        <div className="w-full flex justify-center items-center">
                            <Image src={customerSupport} alt="Support" className=" w-64 " />
                        </div>
                        <div className="w-full px-8">
                            <h4 className=" text-xl  md:text-[32px] text-center w-full text-black font-normal">
                                We&apos;re Here To Help
                            </h4>
                            <h3 className=" text-lg  md:text-[28px] text-center w-full text-black font-medium">
                                FOD Hotel&apos;s 5-star Customer Service
                            </h3>
                        </div>
                    </div>
                    <div className=" w-full mt-8">
                        <p className=" px-8 w-11/12 md:w-1/2 text-center text-sm m-auto ">
                            Whether it&apos;s your first stay or you&apos;re seeking expert guidance, our hospitality team is here to assist. With years of experience ensuring comfortable and seamless stays, you can rely on us every step of the way.                        </p>
                        <ul className="px-8 w-11/12 md:w-1/2 text-center m-auto  text-sm mt-8 text-fodOrange">
                            <li className='mb-2'>CONTACT: +91 97794 64405</li>
                        </ul>
                    </div>
                </div>

            </div>

            <ContactUs />
        </div>
    )
}

export default page