"use client"
import aboutimg1 from "@/app/images/aboutimg1.jpg"
import aboutimg2 from "@/app/images/aboutimg2.jpg"
import aboutimg3 from "@/app/images/aboutimg3.jpg"
import aboutimg4 from "@/app/images/aboutimg4.jpg"
import aboutimg5 from "@/app/images/aboutimg5.jpg"
import aboutimg6 from "@/app/images/aboutimg6.jpg"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const img = [
  {
    id: 1, 
    imageUrl: aboutimg1,
  },
  {
    id: 2,
    imageUrl: aboutimg2,
  },
  {
    id: 3,
    imageUrl: aboutimg3,
  },
  {
    id: 4, 
    imageUrl: aboutimg4,
  },
  {
    id: 5,
    imageUrl: aboutimg5,
  },
  {
    id: 6,
    imageUrl: aboutimg6,
  },
]

export default function Blog() {
  return (
    <div className="px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Find Your Destination
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-300">
          Most Popular Places Are Waiting For You
        </p>
      </div>
      <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
       
          {img.map((i) => (
            <SwiperSlide key={i.id} className="flex flex-col items-start justify-between">   
              <div className="relative w-full">
                <Image
                   src={i.imageUrl}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper> 
    </div>
  )
}
