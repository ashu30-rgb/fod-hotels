import React from 'react'
import TripCard from '../_components/TripCard';
import { MAIN_DATA } from "@fod/constants/data"
import { MainDataType } from '@fod/constants/types';
import SearchBar from '../_components/SearchBar';

const Explore = () => {
  return (
    <div className='min-h-screen p-4 md:p-8 pt-20 max-w-7xl w-full mx-auto'>
      <div className='bg-fodOrange/10 p-4 md:p-8 rounded-xl space-y-6 mb-8'>
        <div className='flex flex-col gap-4 items-center'>
          <h2 className='text-3xl font-bold text-fodBlue title-underline-orange w-fit text-center'>Explore India&apos;s Most Comfortable Hotel Stays</h2>
          <p className='text-md lg:w-3/4 text-center'>From peaceful mountain retreats to well-connected city locations — discover relaxing stays, convenient stopovers, and welcoming spaces designed for every kind of traveler.</p>
        </div>
        <SearchBar />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center'>
        {MAIN_DATA.map((data: MainDataType) => (
          <TripCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  )
}

export default Explore;