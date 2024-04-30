import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AllSpotCard from "../AllSpotCard/AllSpotCard";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";


const AllTouristSpot = () => {
    const touristsSpots = useLoaderData();
    const {avgCost} = touristsSpots;
    const cost = parseInt(avgCost);

    const [sort, setSort] = useState("ascending");

    const parseCost = (cost) => {
        if(cost === "Free" || cost === "free" || cost === "FREE"){
            return 0;
        }
        else {
            return parseFloat(cost.replace(/[^0-9.-]+/g, ""))
        }
    }

      const handleSortBy = () => {
        if(sort === "ascending" ){
            touristsSpots.sort(
                (a, b) => parseCost(a.avgCost) - parseCost(b.avgCost)
            )
            setSort("descending");
        }
        else {
            touristsSpots.sort(
                (a, b) => parseCost(b.avgCost) - parseCost(a.avgCost)
            )
            setSort("ascending");
        }
      };
    

    return (
        <div className="flex flex-col justify-center mx-10 lg:mx-24">
        <Helmet>
          <title>Nomad Nest | All Tourists Spots</title>
        </Helmet>
        <h2 className=" text-2xl md:text-3xl lg:text-5xl font-bold text-blue-700 text-center mt-3 lg:mt-10">
        <Typewriter
            words={["All Tourists Spots", "All Tourists Spots","All Tourists Spots","All Tourists Spots"]}
            loop={50}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
              {/* sort by button */}
      <div className="flex justify-center">
        <div className="dropdown ">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 mt-6 flex items-center gap-3 bg-black border-white text-white"
          >
            Sort By <FaAngleDown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={() => handleSortBy({cost})}>
              <a>Average Cost</a>
            </li>
          </ul>
        </div>
      </div>

        <div className="grid lg:grid-cols-2 mx-2 lg:mx-24 gap-8 my-3 lg:my-10">
          {touristsSpots.map((spot) => (
            <AllSpotCard key={spot._id} spot={spot}></AllSpotCard>
          ))}
        </div>
        
      </div>
      );
};

export default AllTouristSpot;