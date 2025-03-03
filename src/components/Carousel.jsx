import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Carousel.css"; // Estilos del carrusel

const Carousel = () => {
  return (
    <div className="carousel-wrapper">
      {/* Fondos animados */}
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>

      {/* Swiper Carousel */}
      <div className="carousel-container">
        <Swiper
          modules={[Pagination]}
          slidesPerView={2}
          spaceBetween={30}
          pagination={{ clickable: true }}
          loop={true}
        >
          <SwiperSlide>
            <div className="item">
              <img src="/img/carrusel1.jpg" alt="Circuitos y Programación" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item">
              <img src="/img/carrusel2.jpg" alt="Diseño 3D" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item">
              <img src="/img/carrusel3.jpg" alt="Diseño 3D" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
