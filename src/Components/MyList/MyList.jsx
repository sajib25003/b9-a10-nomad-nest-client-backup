import { Typewriter } from "react-simple-typewriter";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyList = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [spots, setSpots] = useState([]);
  console.log(spots);

  useEffect(() => {
    fetch(`https://nomad-nest-server.vercel.app/myList/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setSpots(data);
      });
  }, [user]);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://nomad-nest-server.vercel.app/spots/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Successfully deleted!",
                icon: "success",
              });
              const remaining = spots.filter(sp => sp._id !== _id);
              setSpots(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="text-center mx-10 lg:mx-24 mb-8">
      <h1 className=" text-2xl md:text-3xl lg:text-5xl font-bold text-blue-700 text-center my-10">
        <Typewriter
          words={["My List", "My List", "My List", "My List"]}
          loop={1000}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-center">
            <tr>
              <th></th>
              <th className=" text-left">Spot Name</th>
              <th>Country</th>
              <th>Average Cost</th>
              <th>Travel Time</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-center">
            {spots.map((spot, idx) => (
              <tr key={spot._id}>
                <th>{idx+1}</th>
                <td className=" text-left">{spot.tourist_spot_name}</td>
                <td>{spot.country}</td>
                <td>$ {spot.avgCost}</td>
                <td>{spot.travelTime} days</td>
                <td><Link to={`/updateSpot/${spot._id}`} className="btn bg-lime-700 text-white">Update</Link></td>
                <td><Link onClick={()=>handleDelete(spot._id)} className="btn bg-red-500 w-full text-white">X</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;
