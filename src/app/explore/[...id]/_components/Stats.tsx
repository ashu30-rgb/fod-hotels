import Image from 'next/image'
import React from 'react'
import heart from "@fod/assets/images/heart.png"
import love from "@fod/assets/images/love.png"
import star from "@fod/assets/images/star.png"
import support from "@fod/assets/images/support.png"

function Stats() {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-20 '>
            <div className='flex flex-col gap-1'>
                <Image src={love} alt='Hear Image' />
                <h3 className='font-semibold text-lg mt-4'>5 Thousands +</h3>
                <p>Happy guests from all over India.</p>
            </div>
            <div className='flex flex-col gap-1'>
                <Image src={star} alt='Hear Image' />
                <h3 className='font-semibold text-lg mt-4'>4.6 / 5.0</h3>
                <p>Cumulative ratings of our hospitality across platforms.</p>
            </div>
            <div className='flex flex-col gap-1'>
                <Image src={heart} alt='Hear Image' />
                <h3 className='font-semibold text-lg mt-4'>Curated with love</h3>
                <p>Thoughtfully curated stays with seamless planning.</p>
            </div>
            <div className='flex flex-col gap-1'>
                <Image src={support} alt='Hear Image' />
                <h3 className='font-semibold text-lg mt-4'>24*7 Support</h3>
                <p>We&apos;re always here to assist before, during, and after your stay.</p>
            </div>
        </div>
    )
}

export default Stats