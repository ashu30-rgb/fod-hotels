"use client"
import { MAIN_DATA } from '@fod/constants/data'
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'


function Trending() {

    const [randomFive, setRandomFive] = useState<typeof MAIN_DATA>([]);
    const [selectedTrip, setSelectedTrip] = useState(randomFive[0] || MAIN_DATA[0]);

    useEffect(() => {
        const mountainMirage = MAIN_DATA.find(item => item.id === 1);
        const others = MAIN_DATA.filter(item => item.id !== 1);
        const shuffledOthers = others
            .slice()
            .sort(() => Math.random() - 0.5)
            .slice(0, 4);

        const finalSelection = mountainMirage ? [mountainMirage, ...shuffledOthers] : shuffledOthers.slice(0, 5);

        setRandomFive(finalSelection);
        setSelectedTrip(finalSelection[0])
    }, []);
    return (
        <div className='bg-fodOrange py-16 p-4'>
            <div className='max-w-7xl mx-auto mb-16'>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold text-fodBlue title-underline-orange after:bg-white'>Trending</h2>
                    <p className='text-2xl mt-4 font-light text-fodBlue/60'>Here&apos;s What We Are Offering</p>
                </div>

                <div className='flex gap-4 items-start justify-between overflow-auto mt-8'>
                    {randomFive.map((trip, index) => (
                        <button key={index} className={`text-lg font-semibold p-2 px-4 rounded-xl whitespace-nowrap transition-all duration-500 ${trip.id === selectedTrip.id ? "bg-white text-fodOrange cursor-default" : "text-white/70 cursor-pointer"}`} onClick={() => setSelectedTrip(trip)}>{trip.name}</button>
                    ))}
                </div>

                <div className='gap-8 grid md:grid-cols-2 lg:grid-cols-4 mt-10 justify-between'>
                    {selectedTrip.images.slice(0, 4).map((item) => (
                        <div key={item} className='relative w-full h-72 rounded-xl group'>
                            <Image src={item} alt='Trending destinations image' className='w-full h-full rounded-xl object-cover' height={400} width={400} />
                            <div className='absolute flex items-center justify-center h-full w-full top-0 left-0 bg-fodBlue/40 rounded-xl transition-opacity duration-500 opacity-0 group-hover:opacity-100'>
                                <Link href={`/explore/${selectedTrip?.id}`} className='btn-primary !bg-white !text-fodOrange font-semibold !normal-case'>View Detail</Link>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Trending