import Image from 'next/image';
import { Spacer } from '@heroui/spacer';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import './swiperNaviStyle.css';

type SwipeNavigationProps = {
  items: {
    title: string;
    contents: string[];
    icons?: Record<string, string>;
  }[];
};

export const SwipeNavigation = (items: SwipeNavigationProps) => {
  return (
    <Swiper
    modules={[Navigation]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    >
    {items.items.map((item, index) => {
        return (
          <SwiperSlide className="flex flex-col items-center justify-center" key={index}>
            <h1>{item.title}</h1>
            <Spacer y={3} />
            <div className="flex gap-10">
              {item.contents.map((content, index) => (
                <div className="flex gap-2" key={index}>
                  {item.icons && item.icons[content] && (
                    <Image src={item.icons[content]} alt="icon" width="20" height="20" className="!h-5"/>
                  )}
                  <p>{content}</p>
                </div>
              ))}
            </div>
          </SwiperSlide>
        )
      })
    }
  </Swiper>
  )
};