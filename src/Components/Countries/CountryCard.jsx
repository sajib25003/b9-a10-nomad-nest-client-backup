import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CountryCard = ({country}) => {
    return (
        <div className=" hover:scale-110 flex flex-col gap-4 border-2 p-4 rounded-lg bg-base-200 text-center">
          <Link to={`/country/${country._id}`}>
          <img className=" mx-auto h-[150px] rounded-lg" src={country.photoURL} alt="" />
        <h3 className=" text-blue-600 font-bold text-lg lg:text-3xl my-2">
          {country.country}
        </h3>
        <p className=" text-justify text-base text-gray-500 font-semibold">
          <span className=" font-medium text-blue-500">Description: </span>{" "}
          {country.description}
        </p>

          </Link>
        </div>
    );
};


CountryCard.propTypes = {
    country: PropTypes.object,
  };

export default CountryCard;