import { MainDataType } from '@fod/constants/types'
import { CircleParking, MapPin, SoapDispenserDroplet, Utensils, Wifi } from "lucide-react";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TripCard = ({ data }: { data: MainDataType }) => {
    return (
        <div className="bg-white w-[360px] md:w-96 rounded-3xl font-source-sans border-2 border-fodOrange/50">
            <div className="relative">
                <Image
                    className="rounded-3xl h-72 object-cover "
                    src={data.images[0] || ""}
                    alt={data.name + " image"}
                    width={384}
                    height={283}
                />
                <div className="bg-fodOrange/90 p-1.5 px-12 inline-block absolute right-0 bottom-0 rounded-br-3xl rounded-tl-3xl font-semibold text-base text-white">
                    &#8377; {data.prices[0].price.toLocaleString()}/-
                </div>
            </div>
            <div className="p-6">
                <div className="flex flex-col gap-1 h-full">
                    <span className="text-sm text-[#808080]">
                        {data.location}
                    </span>

                    <Link href={`/explore/${data?.id}`} className="font-semibold text-2xl text-wrap hover:text-fodOrange hover:underline mb-2">
                        {data.name}
                    </Link>


                    <div className="mb-4 text-sm">
                        {data.headline}
                    </div>

                    <div className='flex gap-2 justify-between items-center mb-6'>
                        <div className='p-2 rounded bg-fodOrange/5'>
                            <CircleParking className='text-fodOrange' size={32} />
                        </div>
                        <div className='p-2 bg-fodOrange/5 rounded'>
                            <Wifi className='text-fodOrange' size={32} />
                        </div>
                        <div className='p-2 bg-fodOrange/5 rounded'>
                            <Utensils className='text-fodOrange' size={32} />
                        </div>
                        <div className='p-2 bg-fodOrange/5 rounded'>
                            <SoapDispenserDroplet className='text-fodOrange' size={32} />
                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-300 border-dashed pt-6 text-center flex gap-2">
                    <Link className='w-1/2' href={`/explore/${data?.id}`}>
                        <button className="card-button w-full !bg-transparent border border-fodOrange !text-fodOrange">
                            View
                        </button>
                    </Link>
                    <Link href={data.bookingUrl} target='_blank' className='card-button whitespace-nowrap w-1/2'>
                        Book Now
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default TripCard