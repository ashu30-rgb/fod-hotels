"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import Image from 'next/image';
import { MainDataType } from '@fod/constants/types';

function PackageHero({data}:{data:MainDataType}) {
  return (
        <div className="relative">
      <div className={`max-h-screen`}>
        <div className="w-full h-[calc(100vh-80px)] max-h-[350px] md:max-h-[550px] object-cover bg-center rounded-b-lg">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            loop={true}
            modules={[Autoplay, Navigation]}
          >
            { data.images?.map((image, index) => {
              return (
                <SwiperSlide key={index}>
                  <Image
                    className="w-full h-[calc(100vh-80px)] max-h-[350px] md:max-h-[550px] object-cover bg-center rounded-b-lg"
                    src={image}
                    loading='lazy'
                    alt={data.name+"image"}
                    width={2920}
                    height={2080}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default PackageHero