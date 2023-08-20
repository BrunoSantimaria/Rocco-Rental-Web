import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BalancinImg } from "../img/BalancinImagenes/BalancinImagenes";

export const CarouselReact = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {BalancinImg.map((img, index) => (
        <div
          key={index}
          className='w-full h-[320px]'
        >
          <img
            src={img.img}
            alt={`Image ${index}`}
          />
        </div>
      ))}
    </Slider>
  );
};
