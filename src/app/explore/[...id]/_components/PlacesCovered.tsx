"use client"
import { MainDataType } from '@fod/constants/types';
import Stepper from '@keyvaluesystems/react-stepper'
import { Images } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const styles = {
    LineSeparator: () => ({
        backgroundColor: "#fc5b0b",
    }),
    CompletedNode: () => ({
        backgroundColor: "#fc5b0b",
        height: 30,
        width: 30,
        fontSize: 50
    }),
    LabelTitle: () => ({
        fontSize: 20,
        fontWeight: 400,
        marginLeft: 8,
        textAlign:"left"
    }),

};

function PlacesCovered({ data }: { data: MainDataType }) {

    const STEP_ARRAY = data.places_covered.map((item) => {
        return {
            stepLabel: item,
            stepDescription: "",
            completed: true,
        }
    })
    return (
        <div className='border rounded-xl p-4 '>
            <div className='flex flex-col lg:flex-row lg:gap-10 justify-between'>
                <div>
                    <h2 className='text-2xl font-bold text-fodBlue title-underline-orange mb-2'>Hotel Highlights</h2>
                    <Stepper
                        steps={STEP_ARRAY}
                        currentStepIndex={5}
                        styles={styles}
                    />
                </div>
                <div className='lg:w-3/4 flex gap-1 rounded-xl'>
                    <div className='w-1/2 hidden md:block'>
                        <Image src={data.images[0]} alt={data.name+"image"} className='w-full h-full rounded-l-xl object-cover' height={600} width={600}  />
                    </div>
                    <div className='grid grid-cols-2 gap-1 md:w-1/2'>
                        <Image src={data.images[1]} alt={data.name+"image"} className='w-full h-full object-cover rounded-tl-xl md:rounded-none' height={400} width={400} />
                        <Image src={data.images[2]} alt={data.name+"image"} className='w-full h-full rounded-tr-xl object-cover' height={400} width={400} />
                        <Image src={data.images[3]} alt={data.name+"image"} className='w-full h-full object-cover rounded-bl-xl md:rounded-none' height={400} width={400} />
                        <div className='relative'>
                            <Image src={data.images[4]} alt={data.name+"image"} className='w-full h-full rounded-br-xl brightness-75 object-cover' height={400} width={400} />
                            <div className='absolute bottom-4 right-4'>
                                <button className='bg-white p-1 px-2 rounded font-medium flex gap-2 text-xs md:text-sm items-center'><Images size={18} />All Images</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlacesCovered