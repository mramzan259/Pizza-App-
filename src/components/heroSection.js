"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import dynamic from "next/dynamic";
// import Image from "next/image";

// const Carousel = dynamic(
//   () => import("react-responsive-carousel").then((mod) => mod.Carousel),
//   {
//     ssr: false,
//   }
// );

const imageProp = [
  "https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*",
  "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/09/beef-burger.jpg?im=AspectCrop=(16,9);Resize,width=570;",
  "https://www.allrecipes.com/thmb/uzxCGTc-5WCUZnZ7BUcYcmWKxjo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-48974-vanilla-milkshake-hero-4x3-c815295c714f41f6b17b104e7403a53b.jpg",
];

function CarouselComponent() {
  return (
    <Carousel
      autoPlay
      navButtonsAlwaysVisible
      infiniteLoop
      showStatus={false}
      emulateTouch
      showThumbs={false}
      className="max-h-[460px]"
    >
      {imageProp.map((image, index) => {
        return (
          <div key={index} className=" brightness-50 ">
            <img src={`${image}`} alt={"pizza"} className="w-full h-[450px]" />
            {/* <Image src={`${image}`} width="100%" height="100%" /> */}
          </div>
        );
      })}
    </Carousel>
  );
}

export default CarouselComponent;
