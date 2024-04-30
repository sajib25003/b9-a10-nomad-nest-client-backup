import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllSpotCard = ({ spot }) => {



    const {
        tourist_spot_name,
        photoURL,
        avgCost,
        seasonality,
        travelTime,
        visitorsNo,
        _id
      } = spot;

    

    return (
        <div className="flex flex-col gap-1 md:gap-4 border-2 p-4 rounded-lg bg-base-200 text-center">
        <img className=" h-[150px] md:h-[350px] lg:h-[300px] rounded-lg" src={photoURL} alt="" />
        <h3 className="flex-grow text-blue-600 font-bold text-lg lg:text-2xl my-2">
          {tourist_spot_name}
        </h3>
        <div className="flex flex-col justify-between gap-4">
          <p className="flex-grow font-semibold bg-green-50 p-2 rounded-lg text-blue-700">
            <span className=" font-medium text-black">Seasonality:</span>{" "}
            {seasonality}
          </p>
          <p className="flex-grow font-semibold bg-lime-50 p-2 rounded-lg text-blue-700">
            <span className=" font-medium text-black">Average Costs:</span> $ {avgCost}
          </p>
          <p className="flex-grow font-semibold bg-green-50 p-2 rounded-lg text-blue-700">
            <span className=" font-medium text-black">Travel Time:</span>{" "}
            {travelTime}
          </p>
          <p className="flex-grow font-semibold bg-lime-50 p-2 rounded-lg text-blue-700">
            <span className=" font-medium text-black">Total Visitors per Year:</span> {visitorsNo}
          </p>
        </div>
        <Link to={`/viewSpot/${_id}`} 
          className="btn mt-2 bg-black border-white text-white font-bold "
        >
          View Details
        </Link>
      </div>
  
    );
};

AllSpotCard.propTypes = {
    spot: PropTypes.object,
  };
  
export default AllSpotCard;