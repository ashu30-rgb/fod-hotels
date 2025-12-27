import TripCard from '@fod/app/_components/TripCard'
import { MAIN_DATA } from '@fod/constants/data'
import { MainDataType } from '@fod/constants/types'
import React from 'react'

function RelatedTrips({ id }: { id: number }) {
    const filteredData = MAIN_DATA.filter(item => item.id !== id)
    const randomSix = filteredData
        .slice()
        .sort(() => Math.random() - 0.5)
        .slice(0, 6);
    return (
        <div className='space-y-8'>
            <div className='text-center'>
                <h2 className='text-3xl font-bold text-fodBlue title-underline-orange'>Other Hotels</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center'>
                {randomSix.map((data: MainDataType) => (
                    <TripCard key={data.id} data={data} />
                ))}
            </div>
        </div>
    )
}

export default RelatedTrips