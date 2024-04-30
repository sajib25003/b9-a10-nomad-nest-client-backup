import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SpotCard = ({ spot }) => {
  const {
    tourist_spot_name,
    photoURL,
    country,
    avgCost,
    _id
  } = spot;
  return (
    <div className=" hover:scale-110 flex flex-col gap-4 border-2 p-4 rounded-lg bg-base-200 text-center">
      <img className="h-[300px] rounded-lg" src={photoURL} alt="" />
      <h3 className="flex-grow text-blue-600 font-bold text-lg lg:text-2xl my-2">
        {tourist_spot_name}
      </h3>
      <div className="flex justify-between gap-4">
        <p className="flex-grow font-semibold bg-green-50 p-2 rounded-lg text-blue-700">
          <span className=" font-medium text-black">Country:</span>{" "} <br />
          {country}
        </p>
        <p className="flex-grow font-semibold bg-lime-50 p-2 rounded-lg text-blue-700">
          <span className=" font-medium text-black">Average Costs:</span><br /> ${avgCost}
        </p>
      </div>
      
      <Link to={`/viewSpot/${_id}`} 
        className="btn bg-black border-white text-white font-bold "
      >
        View Details
      </Link>
    </div>
  );
};

SpotCard.propTypes = {
  spot: PropTypes.object,
};

export default SpotCard;
