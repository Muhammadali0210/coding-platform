"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectFade } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

const LoginSlider = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const testimonial = [
    {
      img: "/Login-card1.jpeg",
      quote:
        "We’ve been using Untitled to kickstart every new project and can’t imagine working without it. It’s incredible.",
      author: "Fleur Cook",
      role: "Founder, Catalog",
      company: "Web Design Agency",
      rating: 5,
    },
    {
      img: "/Login-card2.jpeg",
      quote:
        "We’ve been using Untitled to kickstart every new project and can’t imagine working without it. It’s incredible.",
      author: "Fleur Cook",
      role: "Founder, Catalog",
      company: "Web Design Agency",
      rating: 3,
    },
    {
      img: "/Login-card3.jpeg",
      quote:
        "We’ve been using Untitled to kickstart every new project and can’t imagine working without it. It’s incredible.",
      author: "Fleur Cook",
      role: "Founder, Catalog",
      company: "Web Design Agency",
      rating: 5,
    },
  ];

  return (
    <Swiper
      
      // // centeredSlides={true}
      // effect={'fade'}
      // // fadeEffect={{ crossFade: true }}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, EffectFade]}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      {testimonial.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-[95vh]">
            <Image
              src={item.img}
              alt="Auth-banner"
              fill
              className="object-cover rounded-[20px]"
            />

            {/* Overlay */}
            <div className="absolute rounded-[20px] bottom-[32px] h-[294px] inset-x-[32px] border border-[#fff] p-[24px] bg-white/30 text-white">
              <h2 className="text-[30px] leading-[38px] font-bold text-white">
                &ldquo;{item.quote}&rdquo;
              </h2>

              <div className="flex justify-between mt-[32px]">
                <h1 className="font-bold text-[24px] leading-[32px]">
                  {item.author}
                </h1>

                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, idx) => (
                    <FaStar key={idx} size={20} className="text-white" />
                  ))}
                </div>
              </div>

              <div className="flex justify-between mt-[12px]">
                <div>
                  <p className="text-[16px] font-bold">{item.role}</p>
                  <p className="text-[14px]">{item.company}</p>
                </div>

                {/* Prev / Next */}
                <div className="flex gap-6 mt-2">
                  <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="border h-[56px] w-[56px] rounded-full relative hover:bg-white/30"
                  >
                    <ArrowLeft className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </button>
                  <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="border h-[56px] w-[56px] rounded-full relative hover:bg-white/30"
                  >
                    <ArrowRight className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default LoginSlider;
