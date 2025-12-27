import { MAIN_DATA } from '@fod/constants/data'
import { MainDataType } from '@fod/constants/types';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

function TopDestinations() {
    const randomSix = MAIN_DATA.slice(0, 6);
    return (
        <div className='bg-fodOrange/10 pt-16 pb-2 p-4'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold text-fodBlue title-underline-orange'>Top Destinations</h2>
                </div>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 text-white'>
                    {randomSix.map((item: MainDataType, index: number) => (
                        <Link href={`/explore/${item?.id}`} key={item.id} className={`relative flex items-center justify-center rounded overflow-hidden w-full h-full cursor-pointer hover:scale-105 transition-transform duration-500 ${(index + 1) % 3 === 0 && "col-span-2 max-h-[300px] overflow-hidden"}`}>
                            <Image
                                src={item.images[0]}
                                alt={item.name+"image"}
                                className='w-full rounded h-full object-cover bg-center'
                                height={400}
                                width={400}
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 25vw"
                            />
                            <div className='absolute top-0 w-full h-1/3 bg-gradient-to-b from-black/40 to-transparent' />
                            <div className='absolute top-4 left-4'>
                                <p className='title-underline md:text-xl font-semibold'>{item.name}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <p className='hidden lg:block lg:text-[200px] font-extrabold text-fodBlue/10 -mb-20'>Hotel Stays</p>
        </div>
    )
}

export default TopDestinations