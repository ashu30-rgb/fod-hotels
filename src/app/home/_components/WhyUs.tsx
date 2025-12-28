import StatsCount from '@fod/app/_components/StatsCount';
import Image from 'next/image';
import React from 'react';
import STATS1 from "@fod/assets/icons/stats1.png"
import STATS2 from "@fod/assets/icons/stats2.png"
import STATS3 from "@fod/assets/icons/stats3.png"
import STATS4 from "@fod/assets/icons/stats4.png"

function WhyUs() {
    return (
        <div className='pt-16 '>
            <div className='max-w-7xl mx-auto mb-12 p-4'>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold text-fodBlue title-underline-orange'>Why Choose Us</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 text-fodBlue'>
                    <div className='flex flex-col items-center justify-center gap-2 p-4 py-10 hover:bg-fodOrange/10 border-2 border-transparent hover:border-fodOrange/60 rounded-xl cursor-pointer transition-all duration-500 '>
                        <Image src={STATS1.src} alt='hotel icon' width={90} height={91} />
                        <h3 className='text-xl font-bold'>Comfort First</h3>
                        <p className='text-center text-xs'>Every guest has different needs. We focus on comfort, cleanliness, and layout to create stays that feel welcoming and practical.</p>
                    </div>

                    <div className='flex flex-col items-center justify-center gap-2 p-4 py-10 hover:bg-fodOrange/10 border-2 border-transparent hover:border-fodOrange/60 rounded-xl cursor-pointer transition-all duration-500 '>
                        <Image src={STATS2.src} alt='hotel icon' width={90} height={91} />
                        <h3 className='text-xl font-bold'>Easy Stays</h3>
                        <p className='text-center text-xs'>Smooth check-ins, comfortable rooms, and essential amenities — everything designed for a relaxed and hassle-free stay.</p>
                    </div>

                    <div className='flex flex-col items-center justify-center gap-2 p-4 py-10 hover:bg-fodOrange/10 border-2 border-transparent hover:border-fodOrange/60 rounded-xl cursor-pointer transition-all duration-500 '>
                        <Image src={STATS3.src} alt='hotel icon' width={90} height={91} />
                        <h3 className='text-xl font-bold'>Trusted Service</h3>
                        <p className='text-center text-xs'>Clear pricing, honest communication, and dependable hospitality you can rely on throughout your stay.</p>
                    </div>

                    <div className='flex flex-col items-center justify-center gap-2 p-4 py-10 hover:bg-fodOrange/10 border-2 border-transparent hover:border-fodOrange/60 rounded-xl cursor-pointer transition-all duration-500 '>
                        <Image src={STATS4.src} alt='hotel icon' width={90} height={91} />
                        <h3 className='text-xl font-bold'>Guest Support</h3>
                        <p className='text-center text-xs'>Our team is always available to assist with requests and ensure your stay remains smooth and comfortable.</p>
                    </div>
                </div>


            </div>
            <div className='bg-fodOrange/10 p-10'>
                <StatsCount />
            </div>
        </div>
    )
}

export default WhyUs