import { useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const UpdateSpot = () => {
  const spots = useLoaderData();
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
    _id
  } = spots;

  // hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
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
    } = data;
    const updatedSpot = {
      tourist_spot_name,
      photoURL,
      country,
      location,
      description,
      avgCost,
      seasonality,
      travelTime,
      visitorsNo,
    };

    console.log(updatedSpot);

    fetch(`https://nomad-nest-server.vercel.app/spots/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Tourist Spot Updated Successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="text-center mx-10 lg:mx-24 mb-8 hero-content flex-col space-y-2">
      <Helmet>
        <title>Nomad Nest | Update Spots</title>
      </Helmet>

      <h1 className=" text-2xl md:text-3xl lg:text-5xl font-bold text-blue-700 text-center my-3 lg:my-10">
        {/* Style will be inherited from the parent element */}
        <Typewriter
          words={["Update a Tourists Spot", "Update a Tourists Spot"]}
          loop={1000}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>

      {/* update here */}
      <div className="card shrink-0 w-5/6 lg:w-3/5 shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          {/* Tourist Spot Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Tourist Spot Name</span>
            </label>
            <input
              type="text"
              defaultValue={tourist_spot_name}
              className="input input-bordered w-full"
              {...register("tourist_spot_name", { required: true })}
            />
            {errors.tourist_spot_name && (
              <span className=" text-red-300 mt-1">This field is required</span>
            )}
          </div>
          {/* photo URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              defaultValue={photoURL}
              className="input input-bordered w-full"
              {...register("photoURL")}
            />
            {errors.photoURL && (
              <span className=" text-red-300 mt-1">This field is required</span>
            )}
          </div>
          {/* country & location */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-6">
            <div className="form-control flex-grow">
              <label className="label">
                <span className="label-text">Country</span>
              </label>
              <input
                type="text"
                defaultValue={country}
                className="input input-bordered w-full"
                {...register("country")}
              />

              {errors.country && (
                <span className=" text-red-300 mt-1">
                  This field is required
                </span>
              )}
            </div>
            <div className="form-control flex-grow">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                defaultValue={location}
                className="input input-bordered w-full"
                {...register("location", { required: true })}
              />
              {errors.location && (
                <span className=" text-red-300 mt-1">
                  This field is required
                </span>
              )}
            </div>
          </div>

          {/* Short Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              defaultValue={description}
              className="input input-bordered w-full"
              {...register("description", { required: true })}
              cols="80"
              rows="10"
            ></textarea>

            {errors.description && (
              <span className=" text-red-300 mt-1">This field is required</span>
            )}
          </div>

          {/* average cost and seasonality */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-6">
            <div className="form-control flex-grow">
              <label className="label">
                <span className="label-text">Average Cost (in USD)</span>
              </label>
              <input
                type="text"
                defaultValue={avgCost}
                className="input input-bordered w-full "
                {...register("avgCost", { required: true })}
              />
              {errors.avgCost && (
                <span className=" text-red-300 mt-1">
                  This field is required
                </span>
              )}
            </div>
            <div className="form-control flex-grow">
              <label className="label">
                <span className="label-text">Seasonality</span>
              </label>
              <input
                type="text"
                defaultValue={seasonality}
                className="input input-bordered w-full "
                {...register("seasonality", { required: true })}
              />
              {errors.seasonality && (
                <span className=" text-red-300 mt-1">
                  This field is required
                </span>
              )}
            </div>
          </div>

          {/* Travel Time and Total visitors */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-6">
            <div className="form-control flex-grow">
              <label className="label">
                <span className="label-text">Travel Time (in days)</span>
              </label>
              <input
                type="text"
                defaultValue={travelTime}
                className="input input-bordered w-full "
                {...register("travelTime", { required: true })}
              />
              {errors.seasonality && (
                <span className=" text-red-300 mt-1">
                  This field is required
                </span>
              )}
            </div>
            <div className="form-control flex-grow">
              <label className="label">
                <span className="label-text">Total Visitors Per Year</span>
              </label>
              <input
                type="text"
                defaultValue={visitorsNo}
                className="input input-bordered w-full "
                {...register("visitorsNo", { required: true })}
              />
              {errors.visitorsNo && (
                <span className=" text-red-300 mt-1">
                  This field is required
                </span>
              )}
            </div>
          </div>

          {/* submit button */}
          <input
            className="btn bg-black border-white my-6 text-white font-bold w-full"
            type="submit"
            value="Update Tourists Spot"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateSpot;
