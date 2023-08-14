import { Icon } from "@iconify/react";
import arrowLeftFill from "@iconify/icons-mingcute/arrow-left-fill";
import arrowRightFill from "@iconify/icons-mingcute/arrow-right-fill";
import {
  useEffect,
  useState,
} from "react";

export const Carousel = ({
  slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [current, setCurrent] =
    useState(0);
  const prev = () => {
    setCurrent((current) =>
      current === 0
        ? slides.length - 1
        : current - 1
    );
  };
  const next = () => {
    setCurrent((current) =>
      current === slides.length - 1
        ? 0
        : current + 1
    );
  };
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(
      next,
      autoSlideInterval
    );
    return () =>
      clearInterval(slideInterval);
  }, []);
  return (
    <section className='inline-block '>
      <div className='overflow-hidden relative h-[220px] rounded-lg'>
        <div
          className='flex transition-transform ease-out duration-500'
          style={{
            transform: `translateX(-${
              current * 100
            }%)`,
          }}
        >
          {slides.map(
            (slide, index) => {
              return (
                <img
                  src={slide}
                  key={index}
                  style={{
                    backgroundSize:
                      "cover",
                    backgroundRepeat:
                      "no-repeat",
                    width: "100%",
                    height: "100%",
                  }}
                  className='rounded-lg'
                ></img>
              );
            }
          )}
        </div>
        <div className='absolute inset-0 flex items-center p-4 justify-between'>
          <button
            onClick={prev}
            className='rounded-full hover:bg-white shadow-lg bg-color1 p-1 text-gray-600'
          >
            <Icon
              icon={arrowLeftFill}
              className='hover:text-color1 text-color3'
              width={25}
            />
          </button>
          <button
            onClick={next}
            className='rounded-full hover:bg-white shadow-lg bg-color1 p-1 text-gray-600'
          >
            <Icon
              icon={arrowRightFill}
              width={25}
              className='hover:text-color1 text-color3'
            />
          </button>
        </div>
        <div className='absolute bottom-4 right-0 left-0'>
          <div className='flex items-center justify-center gap-2'>
            {slides.map((_, index) => (
              <div
                key={index}
                className={`transition-all w-2 h-2 bg-white rounded-full ${
                  current === index
                    ? "p-2"
                    : "bg-opacity-50"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
