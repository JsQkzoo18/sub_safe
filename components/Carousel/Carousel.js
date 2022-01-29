import React, { useEffect, useState } from "react";
import { forEach, size } from "lodash";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import { ImageWrapper } from "../Item/ImageWrapper/ImageWrapper";
import { motion } from "framer-motion";
import { BASE_PATH } from "../../utils/env";

const MotionBox = motion(Box);

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  draggable: true,
  lazyLoad: true,
};

export default function Carousel({ images = [] }) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState(null);

  return (
    <>
      {size(images) > 0 && (
        <MotionBox
          position={"relative"}
          overflow={"hidden"}
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ delay: 0.1 }}
        >
          <CSS />
          <LeftButton slider={slider} />
          <RightButton slider={slider} />

          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {images.map((url, index) => (
              <ImageWrapper key={index} url={url} />
            ))}
          </Slider>
        </MotionBox>
      )}
    </>
  );
}

function LeftButton({ slider }) {
  return (
    <IconButton
      aria-label="left-arrow"
      colorScheme="purple"
      borderRadius="full"
      position="absolute"
      left={{ base: "30%", md: "10px" }}
      top={{ base: "90%", md: "50%" }}
      transform={"translate(0%, -50%)"}
      zIndex={2}
      onClick={() => slider?.slickPrev()}
    >
      <MdKeyboardArrowLeft />
    </IconButton>
  );
}

function RightButton({ slider }) {
  return (
    <IconButton
      aria-label="right-arrow"
      colorScheme="purple"
      borderRadius="full"
      position="absolute"
      right={{ base: "30%", md: "10px" }}
      top={{ base: "90%", md: "50%" }}
      transform={"translate(0%, -50%)"}
      zIndex={2}
      onClick={() => slider?.slickNext()}
    >
      <MdKeyboardArrowRight />
    </IconButton>
  );
}

function CSS() {
  return (
    <>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
    </>
  );
}
