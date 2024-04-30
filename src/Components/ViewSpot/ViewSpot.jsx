import { useLoaderData } from "react-router-dom";

const ViewSpot = () => {
  const spots = useLoaderData();
  console.log(spots);
  const {
    tourist_spot_name,
    photoURL,
    country,
    location,
    description,
    avgCost,
    seasonality,
    travelTime,
    visitorsNo,
  } = spots;

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 p-6  gap-10 mx-3 md:mx-10 lg:mx-36">
     
      <div className=" flex justify-center items-center">
        <img
          className="h-[300px] md:h-[400px] w-full  rounded-3xl"
          src={photoURL}
          alt=""
        />
      </div>

      <div className=" flex flex-col justify-center gap-4">
        <h3 className="  text-blue-700 font-bold text-2xl md:text-3xl lg:text-4xl">
          {tourist_spot_name}
        </h3>
        <p className=" text-justify text-base md:text-lg lg:text-xl text-gray-500 font-semibold">
          <span className=" font-medium text-blue-500">Description: </span>{" "}
          {description}
        </p>
        <p className=" text-justify text-base md:text-lg lg:text-xl text-gray-500 font-semibold">
          <span className=" font-medium text-blue-500">Location: </span>{" "}
          {location}
        </p>
        <p className=" text-justify text-base md:text-lg lg:text-xl text-gray-500 font-semibold">
          <span className=" font-medium text-blue-500">Country: </span>{" "}
          {country}
        </p>
        <p className=" text-justify text-base md:text-lg lg:text-xl text-gray-500 font-semibold">
          <span className=" font-medium text-blue-500">Average Cost: </span>{" "}
          $ {avgCost}
        </p>
        <p className=" text-justify text-base md:text-lg lg:text-xl text-gray-500 font-semibold">
          <span className=" font-medium text-blue-500">Seasonality: </span>{" "}
          {seasonality}
        </p>
        <p className=" text-justify text-base md:text-lg lg:text-xl text-gray-500 font-semibold">
          <span className=" font-medium text-blue-500">Travel Time: </span>{" "}
          {travelTime}
        </p>
        <p className=" text-justify text-base md:text-lg lg:text-xl text-gray-500 font-semibold">
          <span className=" font-medium text-blue-500">
            Total Visitors per Year:{" "}
          </span>{" "}
          {visitorsNo}
        </p>
      </div>
    </div>
  );
};

export default ViewSpot;
