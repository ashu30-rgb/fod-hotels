import { FaBus } from "react-icons/fa";
import React from 'react'
import { CircleParking, MapPin, SoapDispenserDroplet, Utensils, Wifi } from "lucide-react";
import { MainDataType } from "@fod/constants/types";
import Link from "next/link";

function PackageTitle({ data }: { data: MainDataType }) {
    return (
        <div className="flex flex-col lg:flex-row gap-8 p-4 border rounded-xl">
            <div className="flex flex-col gap-6 lg:border-r lg:pe-4 lg:w-2/3">
                <div className="flex flex-col md:flex-row gap-4 items-end mb-2">
                    <h1 className='text-5xl font-bold text-fodBlue title-underline-orange after:w-[20%] w-fit'>{data.name}</h1>
                    <div>
                        <span className='bg-fodOrange p-2 lg:px-4 rounded-full text-white  font-semibold w-max text-xs lg:text-sm'>
                            {data.location}
                        </span>
                    </div>
                </div>
                <p className="text-sm">{data.desc}</p>
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-medium">Hotel Facilities</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-semibold">
                        <div className='flex gap-4 text-lg items-center bg-fodOrange/5 p-4 rounded-lg min-w-44 shadow'>
                            <CircleParking className='text-fodOrange' size={25} />
                            <span>
                                Parking
                            </span>
                        </div>
                        <div className='flex gap-4 text-lg items-center bg-fodOrange/5 p-4 rounded-lg min-w-44 shadow'>
                            <Wifi className='text-fodOrange' size={25} />
                            <span>
                                Wi-Fi
                            </span>
                        </div>
                        <div className='flex gap-4 text-lg items-center bg-fodOrange/5 p-4 rounded-lg min-w-44 shadow'>
                            <Utensils className='text-fodOrange' size={25} />
                            <span>
                                Meals
                            </span>
                        </div>
                        <div className='flex gap-4 text-lg items-center bg-fodOrange/5 p-4 rounded-lg min-w-44 shadow'>
                            <SoapDispenserDroplet  className='text-fodOrange' size={25} />
                            <span>
                               Toiletries
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4 lg:w-1/3 border rounded-xl shadow-lg drop-shadow-lg h-fit flex flex-col gap-2">
                <p>Starting From</p>
                <h3 className="text-4xl font-bold text-fodOrange">&#8377; {data.prices[0].price.toLocaleString()}/- </h3>
                <p className="text-fodOrange">Per {data.prices[0].isHoneyMoon ? "Couple" : "Person"}</p>
                <div className="flex items-center gap-2">
                 <MapPin size={20} />
                <p>{data.location}</p>
                </div>
                <Link href={data.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-4">Book Now</Link>
            </div>
        </div>
    )
}

export default PackageTitle