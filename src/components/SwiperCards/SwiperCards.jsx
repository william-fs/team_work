// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import "./index.scss";

// import required modules
import { EffectCoverflow, Autoplay } from 'swiper/modules';

import cardPerson01 from "../../assets/images/cardPerson01.png";
import cardPerson02 from "../../assets/images/cardPerson02.png";
import cardPerson03 from "../../assets/images/cardPerson03.png";

export function SwiperCards() {

    return (
        <div id='professionals' className='areaSwiper'>
            <div className="titleSwiper">
                <h2>Professionals</h2>
            </div>
            <Swiper
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                <div className="cardPerson">
                    <img src={cardPerson01} />
                </div>
                <h4>Experience</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quod nemo vel.</p>
                </SwiperSlide>
                <SwiperSlide>
                <div className="cardPerson">
                    <img src={cardPerson02} />
                </div>
                <h4>Motivation</h4>
                <p>Ipsam, enim. Rem itaque dolorum incidunt ipsa, enim veritatis atque voluptatibus tempora eius.</p>
                </SwiperSlide>
                <SwiperSlide>
                <div className="cardPerson">
                    <img src={cardPerson03} />
                </div>
                <h4>Dedication</h4>
                <p>Facere consequuntur modi quod numquam laboriosam architecto.</p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}