import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner1 from "../../../public/banner0.jpg";
import banner2 from "../../../public/banner01.jpg";
import banner3 from "../../../public/banner3.png";

const Banner = () => {
  const bannerData = [
    {
      image: banner1,
    },
    {
      image: banner2,
    },
    {
      image: banner3,
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="relative overflow-hidden">
      <Slider {...settings}>
        {bannerData.map((banner, index) => (
          <div key={index} className="relative">
            <img
              src={banner.image}
              alt={`Banner ${index + 1}`}
              className="w-full h-[200px] object-cover md:h-[650px] sm:h-[400px]"/>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
              <h2 className="text-xl font-bold mb-4 sm:text-3xl">{banner.title}</h2>
              <p className="text-xl sm:text-xl">{banner.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
