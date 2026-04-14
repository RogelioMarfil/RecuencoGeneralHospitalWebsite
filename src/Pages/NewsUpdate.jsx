import React, { useState, useRef } from "react";
import Footer from "../Components/Footer/Footer";
import "./NewsUpdate.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import gamotVideo from "../assets/PhilHealth_Video/gamot.mp4";
import img0 from "../assets/Highlights/Doctor0.jpg";
import img1 from "../assets/Highlights/Doctors1.jpg";
import img2 from "../assets/Highlights/Doctors2.jpg";
import img3 from "../assets/Highlights/TeamBuilding2.jpg";
import img4 from "../assets/Highlights/TeamBuilding.jpg";
import img5 from "../assets/Highlights/Group.jpg";
import img6 from "../assets/Highlights/Zumba.jpg";
import img7 from "../assets/Highlights/TeamBuilding3.jpg";
import img8 from "../assets/Highlights/Outreach.jpg";
import img9 from "../assets/Highlights/X-mas.jpg";
import img10 from "../assets/Highlights/Orientation.jpg";
import img11 from "../assets/Highlights/Firedrill1.jpg";
import img12 from "../assets/Highlights/Firedrill2.jpg";
import img13 from "../assets/Highlights/Firedrill3.jpg";
import img14 from "../assets/Highlights/Firedrill4.jpg";

const NewsUpdate = () => {
  const carouselImages = [
  { image: img0, description: "RGH Doctors Meeting" },
  { image: img1, description: "RGH Doctors group photo" },
  { image: img2, description: "Doctors collaborating and exchanging ideas during a doctors' meeting" },
  { image: img3, description: "Team-building activity with hospital staff" },
  { image: img4, description: "Seminar team building and bonding event" },
  { image: img5, description: "Anniversary group photo of hospital staff and doctors" },
  { image: img6, description: "Zumba wellness activity for employees." },
  { image: img7, description: "Team building Group Photo" },
  { image: img8, description: "Community outreach program" },
  { image: img9, description: "Christmas celebration of hospital employees and doctors" },
  { image: img10, description: "Breast feeding orientation program." },
  { image: img11, description: "Fire drill safety training session." },
  { image: img12, description: "Emergency preparedness drill activity." },
  { image: img13, description: "Hospital fire drill continuation." },
  { image: img14, description: "Safety response training with staff." }
];
  const [selectedImage, setSelectedImage] = useState(null);
  const swiperRef = useRef(null);

  return (
    <div className="newsupdate-page">
      <div className="newsupdate-banner"></div>

      <div className="newsupdate-content">
        <h1>PhilHealth Video Presentation</h1>
        <div style={{ marginTop: "40px" }}>
          <div className="video-container">
            <video src={gamotVideo} controls className="news-video" />
          </div>
        </div>

        <div style={{ marginTop: "60px" }}>
          <h2 style={{ marginBottom: "20px" }}>Hospital's Events and Activities Highlights Photos</h2>

        <div className="swiper-outer-wrapper">
            <div className="swiper-wrapper-extended">
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                loop
                grabCursor={true}
                touchStartPreventDefault={false}
                breakpoints={{
                  480: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
              >
                {carouselImages.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="carousel-clickable"
                      onClick={() => setSelectedImage(item.image)}
                    >
                      <img
                        src={item.image}
                        alt={`Highlight ${index + 1}`}
                        className="carousel-image"
                      />

                      <div className="image-overlay">
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

           <button
                type="button"
                className="custom-slider-button prev"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <span className="arrow-icon">❮</span>
              </button>

              <button
                type="button"
                className="custom-slider-button next"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <span className="arrow-icon">❯</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Full View" />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default NewsUpdate;