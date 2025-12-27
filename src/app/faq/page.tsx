import React from 'react'
import ContactUs from '../_components/ContactUs'
import FaqAccordion from './_components/FaqAccordion'
import { FAQ_DATA } from '@fod/constants/data'

function page() {
    return (
        <>
            <div id="about" className="relative head-top min-h-[60vh] bg-black text-white flex justify-center items-center">
                <div className="top-overlay absolute top-0 left-0 h-full w-full"></div>
                <div className='relative max-w-6xl mx-auto'>
                    <div className='text-3xl md:text-[5rem] xl:text-[5rem] font-semibold blend mb-6 xl:mb-12 text-center '>Frequently <span className='text-fodOrange'>Asked</span> Questions</div>

                    <div className='md:flex justify-end'>
                        <div className='text-lg md:text-xl lg:text-2xl font-semibold text-center'>Your stay questions, answered! From booking details to room amenities — here&apos;s everything you need to know before your next stay with us.</div>
                    </div>
                </div>
            </div>
            <section className='p-4 py-16'>
                <div className="w-full max-w-7xl mx-auto">
                    <div className='w-full text-center space-y-4 mb-4'>
                        <h2 className="text-3xl font-bold text-fodBlue title-underline-orange after:bg-whited">General Questions</h2>
                        <p>A quick guide to help you understand how our stays work, what&apos;s included, and how we make your hotel experience seamless.</p>
                    </div>
                    <FaqAccordion data={FAQ_DATA.generalQuestions} />
                </div>
            </section>
            <section className='p-4'>
                <div className="w-full max-w-7xl mx-auto">
                    <div className='w-full text-center space-y-4 mb-4'>
                        <h2 className="text-3xl font-bold text-fodBlue title-underline-orange after:bg-whited">Frequently Asked Travel Questions</h2>
                        <p>Got stay-related questions? Here are some of the most common queries from our satisfied guests.</p>
                    </div>
                    <FaqAccordion data={FAQ_DATA.frequentlyAskedQuestions} />
                </div>
            </section>

            <ContactUs />
        </>
    )
}

export default page