import React, { useState } from "react";
import Footer from "../Components/Footer/Footer";
import ChatBot from "../Components/ChatBot/ChatBot";
import "./NewsUpdate.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import gamotVideo from "../assets/gamot.mp4";
import img1 from "../assets/YAKAP.png";
import img2 from "../assets/CONTRACT.png";
import img3 from "../assets/TeamBuilding2.jpg";
import img4 from "../assets/TeamBuilding.jpg";
import img5 from "../assets/Group.jpg";
import img6 from "../assets/Zumba.jpg";
import img7 from "../assets/TeamBuilding3.jpg";
import img8 from "../assets/Outreach.jpg";
import img9 from "../assets/X-mas.jpg";


const NewsUpdate = () => {
  const carouselImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="newsupdate-page">
        <div className="newsupdate-banner"></div>
        <div className="newsupdate-content">
          <h1>News and Updates</h1>
          <p>Stay informed with our latest announcements and highlights.</p>
          <div style={{ marginTop: "40px" }}>
            <div className="video-container">
              <video
                src={gamotVideo}
                controls
                className="news-video"
              />
            </div>
          </div>
          <div style={{ marginTop: "60px" }}>
            <h2 style={{ marginBottom: "20px" }}>Photo Highlights</h2>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000 }}
              loop
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {carouselImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="carousel-image-wrapper"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image}
                      alt={`Highlight ${index + 1}`}
                      className="carousel-image"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {selectedImage && (
          <div
            className="image-modal"
            onClick={() => setSelectedImage(null)}
          >
            <img src={selectedImage} alt="Full View" />
          </div>
        )}

        <ChatBot />
        <Footer />
      </div>
    </>
  );
};

export default NewsUpdate;
