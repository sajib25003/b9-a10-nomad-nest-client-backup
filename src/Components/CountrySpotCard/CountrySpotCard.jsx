import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CountrySpotCard = ({ spot }) => {
  const {
    tourist_spot_name,
    country,
    location,
    description,
    avgCost,
    seasonality,
    _id,
  } = spot;
  return (
    <div className=" hover:scale-110 flex flex-col gap-4 border-2 p-3 lg:p-8 rounded-lg bg-base-200 text-center">
      <h3 className=" text-blue-600 font-bold text-xl lg:text-2xl ">
        {tourist_spot_name}
      </h3>
      <div className="text-left flex-grow">
      <p className="flex-grow text-base md:text-lg lg:text-xl font-semibold text-blue-700">
          Country: <span className=" text-gray-500">{country}</span>
        </p>
        <p className="flex-grow text-base md:text-lg lg:text-xl font-semibold text-blue-700">
          Location: <span className=" text-gray-500">{location}</span>
        </p>
      <p className="flex-grow text-base md:text-lg lg:text-xl    font-semibold text-blue-700">
          Description: <span className=" text-gray-500">{description}</span>
        </p>
        <p className="flex-grow text-base md:text-lg lg:text-xl md:text-lg lg:text-xl font-semibold text-blue-700">
          Average Cost: <span className=" text-gray-500">$ {avgCost}</span>
        </p>
        <p className="flex-grow text-base md:text-lg lg:text-xl font-semibold text-blue-700">
          Seasonality: <span className=" text-gray-500">{seasonality}</span>
        </p>

      </div>
      <Link
        to={`/viewSpot/${_id}`}
        className="btn bg-black border-white text-white font-bold "
      >
        View Details
      </Link>
    </div>
  );
};

CountrySpotCard.propTypes = {
  spot: PropTypes.object,
};
export default CountrySpotCard;
