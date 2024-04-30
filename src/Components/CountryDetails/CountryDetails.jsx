import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import CountrySpotCard from "../CountrySpotCard/CountrySpotCard";

const CountryDetails = () => {
  const country = useLoaderData();
  console.log(country);
  const [spots, setSpots] = useState([]);
  console.log(spots);
  useEffect(() => {
    fetch(`https://nomad-nest-server.vercel.app/countries/${country.country}`)
      .then((res) => res.json())
      .then((data) => {
        setSpots(data);
      });
  }, [country.country]);
  return (
    <div className="text-center mx-1 lg:mx-24 mb-8">
      <h1 className=" text-2xl md:text-3xl lg:text-5xl font-bold text-blue-700 text-center my-10">
        <Typewriter
          words={[`Tourists Spots of ${country.country}`, `Tourists Spots of ${country.country}`]}
          loop={1000}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <div className="grid lg:grid-cols-2 mx-10 lg:mx-24 gap-8 my-10">
          {spots.map((spot) => (
            <CountrySpotCard key={spot._id} spot={spot}></CountrySpotCard>
          ))}
        </div>
    </div>
  );
};

export default CountryDetails;
