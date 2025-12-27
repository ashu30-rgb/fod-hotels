"use client"
import React from 'react'
import CountUp from 'react-countup'

function StatsCount() {
    return (
        <div className='max-w-7xl mx-auto w-full grid grid-cols-2 lg:grid-cols-4 gap-10'>
            <div className='flex flex-col items-center justify-center'>
                <h3 className='text-4xl font-bold text-fodBlue'><CountUp end={5000} enableScrollSpy />+</h3>
                <p className='text-xl font-semibold text-fodOrange text-center'>Happy Guests</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3 className='text-4xl font-bold text-fodBlue'><CountUp end={100} enableScrollSpy />+</h3>
                <p className='text-xl font-semibold text-fodOrange text-center'>Comfortable Stays</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3 className='text-4xl font-bold text-fodBlue'><CountUp end={3} enableScrollSpy />+</h3>
                <p className='text-xl font-semibold text-fodOrange text-center'>Hotel Locations</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h3 className='text-4xl font-bold text-fodBlue'><CountUp end={10} enableScrollSpy />+</h3>
                <p className='text-xl font-semibold text-fodOrange text-center'>Years of Hospitality</p>
            </div>
        </div>
    )
}

export default StatsCount