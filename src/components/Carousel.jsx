import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export function Carousel({ slides, project }) {
  return (
    <div className="carousel">

    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
       {project.iframe? <SwiperSlide><iframe className="swiper-iframe" id={`swiper-iframe-${project.id}`} scrolling="no" src={project.iframe}/></SwiperSlide>: null }

      {slides.map((slide, index) => {
        return (<>
            <SwiperSlide key={index}><img className="swiper-img" src={slide.src} alt={slide.description}></img></SwiperSlide>
            </>
        );
      })}


    </Swiper>

  </div>
  );
}