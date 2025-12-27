import { MainDataType, PriceType, SharingType } from '@fod/constants/types'
import React from 'react'
import { MdGroup } from "react-icons/md";
import { HiMiniUserGroup } from "react-icons/hi2";
import { GiLovers } from "react-icons/gi";
import { FaUser } from "react-icons/fa";

function PricingOptions({ data }: { data: MainDataType }) {

    const getUserIcon = (type: SharingType) => {
        switch (type) {
            case "quad":
                return <div className='flex'>
                    <MdGroup size={32} />
                    <MdGroup size={32} />
                </div>
            case "triple":
                return <HiMiniUserGroup size={32} />
            case "double":
                return <MdGroup size={32} />
            case "couple":
                return <GiLovers size={32} />
            default:
                return <FaUser size={32} />
        }
    }
    return (
        <div className='border rounded-xl p-4 '>
            <h2 className=" text-2xl font-semibold">Package Pricing Options</h2>
            <div className='flex mt-4 gap-4 flex-wrap'>
                {data.prices.map((item: PriceType, index: number) => (
                    <div key={index} className='p-4 border border-fodOrange/50 rounded-lg flex flex-col gap-2 bg-fodOrange/5 min-w-60 shadow w-full md:w-fit'>
                        <div className='flex gap-2 items-center'>
                            {getUserIcon(item.type)}
                            <p className='text-lg font-semibold'>{item.label}</p>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold text-fodOrange">&#8377; {item.price.toLocaleString()}/- </h3>
                            <p className="text-fodOrange/75">Per Night</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PricingOptions