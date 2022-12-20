import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../Card/Card';
import styles from './Slider.module.scss';

import "swiper/css";
import "swiper/css/navigation";
import NewItemCard from '../NewItemCard/NewItemCard';

interface CardsSliderProps<SlideType> {
   itemsPerView?: number;
   breakpoints?: string;
   items: SlideType[];
   onCreate?: () => void;
   slide?: (item: SlideType) => React.ReactNode;
   card?: (item: SlideType) => React.ReactNode;
}

const CardsSlider = <SlideType,>(props: CardsSliderProps<SlideType>) => {
   const itemsPerView = props.itemsPerView ?? 4;
   const breakpoint = props.breakpoints;
   return (
      <div className={`${styles.CardsSliderContainer} cards-slider-container`}>
         {breakpoint == "yes" ? (
               <Swiper
               className="slider"
               modules={[Navigation]}
               slidesPerView={itemsPerView}
               navigation
               breakpoints={{
                  1575: {
                     slidesPerView: 5,
                  },
                  1290: {
                     slidesPerView: 4,
                  },
                  992: {
                     slidesPerView: 3,
                  },
                  768: {
                     slidesPerView: 2,
                  },
                  690: {
                     slidesPerView: 2,
                  },
                  0: {
                     slidesPerView: 1,
                  },
               }}
            >
               {props.onCreate &&
                  <SwiperSlide>
                     <NewItemCard onClick={props.onCreate} />
                  </SwiperSlide>
               }
               {props.items.map((item, index) =>
                  <SwiperSlide key={index}>
                     {props.slide ?
                        <Card>
                           {props.slide(item)}
                        </Card>
                        :
                        props.card ? props.card(item) : null
                     }

                  </SwiperSlide>
               )}
            </Swiper>
            ) :
            (
            <Swiper
               className="slider"
               modules={[Navigation]}
               slidesPerView={itemsPerView}
               navigation
            >
               {props.onCreate &&
                  <SwiperSlide>
                     <NewItemCard onClick={props.onCreate} />
                  </SwiperSlide>
               }
               {props.items.map((item, index) =>
                  <SwiperSlide key={index}>
                     {props.slide ?
                        <Card>
                           {props.slide(item)}
                        </Card>
                        :
                        props.card ? props.card(item) : null
                     }
   
                  </SwiperSlide>
               )}
            </Swiper>
            )
         }
      </div>
   );
};

export default CardsSlider;