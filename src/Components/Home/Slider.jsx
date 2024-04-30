// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../index.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Typewriter } from "react-simple-typewriter";

const Slider = () => {
  return (
    <Swiper
      pagination={{
        type: "progressbar",
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper shadow-xl"
    >
      <SwiperSlide>
        <img
          className=" brightness-75 h-full lg:max-h-[600px] relative "
          src="/sundarbans.jpg"
          alt=""
        />
        <div className="flex flex-col items-start left-[20%] lg:left-[10%]  absolute top-[30%] md:top-[50%] lg:top-[60%] gap-2  md:gap-6 text-white">
          <h3 className="  font-bold text-lg md:text-2xl lg:text-3xl">
            <Typewriter
              words={["Explore the Nature", "Explore the Nature"]}
              loop={50}
              cursor
              cursorStyle="..."
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h3>
          <p className=" font-medium text-sm md:text-base lg:text-lg w-2/3 text-left">
            Allow us to guide you through the innovative stress free approach in
            finding your peace.
          </p>
          <div className="gap-3 hidden md:flex">
            <button className="btn bg-black border-white text-white font-bold">
              Get Started Now
            </button>
            <button className="btn bg-blue-900 border-white  font-bold text-white">
              Learn More
            </button>
          </div>
        </div>
      </SwiperSlide>
      {/* slide-2 */}
      <SwiperSlide>
        <img
          className=" brightness-75 h-full lg:max-h-[600px] relative "
          src="/hoiAnAncient.jpg"
          alt=""
        />
        <div className="flex flex-col items-start left-[20%] lg:left-[10%]  absolute top-[30%] md:top-[50%] lg:top-[60%] gap-2  md:gap-6 text-white">
          <h3 className=" text-white font-bold text-lg md:text-2xl lg:text-3xl">
            <Typewriter
              words={["Explore the Nature", "Explore the Nature"]}
              loop={50}
              cursor
              cursorStyle="..."
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h3>
          <p className=" text-white font-medium text-sm md:text-base lg:text-lg w-2/3 text-left">
            Allow us to guide you through the innovative stress free approach in
            finding your peace.
          </p>
          <div className="gap-3 hidden md:flex">
            <button className="btn bg-black border-white text-white font-bold">
              Get Started Now
            </button>
            <button className="btn bg-blue-900 border-white  font-bold text-white">
              Learn More
            </button>
          </div>
        </div>
      </SwiperSlide>

      {/* slide-3 */}
      <SwiperSlide>
        <img
          className=" brightness-75 h-full lg:max-h-[600px] relative brightness-60 "
          src="/komodo.jpg"
          alt=""
        />
        <div className="flex flex-col items-start left-[20%] lg:left-[10%]  absolute top-[30%] md:top-[50%] lg:top-[60%] gap-2  md:gap-6 text-white">
          <h3 className=" font-bold text-lg md:text-2xl lg:text-3xl">
            <Typewriter
              words={["Explore the Nature", "Explore the Nature"]}
              loop={50}
              cursor
              cursorStyle="..."
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h3>
          <p className="  font-medium text-sm md:text-base lg:text-lg w-2/3 text-left">
            Allow us to guide you through the innovative stress free approach in
            finding your peace.
          </p>
          <div className="gap-3 hidden md:flex">
            <button className="btn bg-black border-white text-white font-bold">
              Get Started Now
            </button>
            <button className="btn bg-blue-900 border-white  font-bold text-white">
              Learn More
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
