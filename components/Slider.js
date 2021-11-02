import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper'

import Image from 'next/image'
import elipseCard from '../public/elipse_card.png'

// install Swiper modules
SwiperCore.use([Pagination, Navigation])

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        slidesPerGroup={5}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={elipseCard} width={130} height={130} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={elipseCard} width={130} height={130} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={elipseCard} width={130} height={130} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={elipseCard} width={130} height={130} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={elipseCard} width={130} height={130} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={elipseCard} width={130} height={130} />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
