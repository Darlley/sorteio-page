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

import styles from '../styles/Slider.module.scss'

// install Swiper modules
SwiperCore.use([Pagination, Navigation])

export default function Slider() {
  return (
    <div className={styles.slider}>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide className={styles.slideCard}>
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
    </div>
  )
}
