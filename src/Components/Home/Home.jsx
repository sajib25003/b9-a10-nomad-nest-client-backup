import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import SpotCard from "../SpotCard/SpotCard";
import { Typewriter } from "react-simple-typewriter";
import Slider from "./Slider";
import Countries from "../Countries/Countries";
import Faqs from "../Faqs/Faqs";
import Offers from "./Offers";

const Home = () => {
  const touristsSpots = useLoaderData();
  let displaySpots = touristsSpots;
  if (touristsSpots.length > 6) {
    displaySpots = touristsSpots.slice(0, 6);
  }

  return (
    <div className="flex flex-col justify-center ">
      <Helmet>
        <title>Nomad Nest | Home</title>
      </Helmet>
        <Slider></Slider>
      {/* tourists spots section */}
      <h2 className=" text-2xl md:text-3xl lg:text-5xl font-bold text-blue-700 text-center mt-10">
        <Typewriter
          words={["Tourists Spots", "Tourists Spots"]}
          loop={50}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-10 lg:mx-24 gap-8 my-10">
        {displaySpots.map((spot) => (
          <SpotCard key={spot._id} spot={spot}></SpotCard>
        ))}
      </div>
      <Link
        to="/allSpots"
        className="btn bg-black border-white text-white font-bold  w-4/5 mx-auto mb-10"
      >
        View All Tourists Spots
      </Link>

      {/* country section */}
      <div className="text-center mx-10 lg:mx-24 mb-8 flex-col space-y-2">
        <h1 className=" text-2xl md:text-3xl lg:text-5xl font-bold text-blue-700 text-center ">
        {/* Style will be inherited from the parent element */}
        <Typewriter
          words={["Countries", "Countries"]}
          loop={1000}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      </div>
      <Countries></Countries>

      {/* extra section-1: Offers */}
      <div className="text-center px-10 lg:px-24 mb-8 flex-col space-y-2">
        <h1 className=" text-2xl md:text-3xl lg:text-5xl font-bold text-blue-700 text-center mb-10  mx-10 lg:mx-24">
        <Typewriter
          words={["Special Offer", "Special Offer"]}
          loop={1000}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      </div>
<Offers></Offers>


      {/* extra section-2: FAQs */}
      <div className="text-center mx-10 lg:mx-24 mb-8 flex-col space-y-2">
        <h1 className=" text-2xl md:text-3xl lg:text-5xl font-bold text-blue-700 text-center ">
        <Typewriter
          words={["FAQs", "FAQs"]}
          loop={1000}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      </div>
      <Faqs></Faqs>


    </div>
  );
};

export default Home;
