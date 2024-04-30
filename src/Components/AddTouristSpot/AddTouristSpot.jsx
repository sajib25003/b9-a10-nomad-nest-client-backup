import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Typewriter } from "react-simple-typewriter";

const AddTouristSpot = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  // const {name, email} = user;
  //  console.log(user);
  const countries = [
    "Bangladesh",
    "Thailand",
    "Indonesia",
    "Malaysia",
    "Vietnam",
    "Cambodia",
  ];

  // hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // hook form

  const onSubmit = (data) => {
    const {
      tourist_spot_name,
      photoURL,
      country,
      name,
      email,
      location,
      description,
      avgCost,
      seasonality,
      travelTime,
      visitorsNo,
    } = data;
    const newSpot = {
      tourist_spot_name,
      photoURL,
      country,
      name,
      email,
      location,
      description,
      avgCost,
      seasonality,
      travelTime,
      visitorsNo
    };

    console.log(newSpot);

    fetch("https://nomad-nest-server.vercel.app/spots", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "New Tourist Spot Added Successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });

    updateUserProfile(name, email)
      .then((previousUser) => {
        // window.location.reload();
        setTimeout(() => (window.location.reload()), 1000);
        return { ...previousUser, displayName: name, email: email };
      })
      .catch((error) => console.error(error));
    console.log(name, email);
  };

  if (!user) {
    return;
  }

  return (
    <div className="">
      <Helmet>
        <title>Nomad Nest | Add Spots</title>
      </Helmet>
      <div className=" bg-base-200">
        <div className="hero-content mx-auto flex-col space-y-2">
          <h1 className=" text-2xl md:text-3xl lg:text-5xl font-bold text-blue-700 text-center my-2 md:my-6 lg:my-10">
        {/* Style will be inherited from the parent element */}
        <Typewriter
          words={["Add Tourist Spots Here", "Add Tourist Spots Here"]}
          loop={1000}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
          <div className="card shrink-0 w-5/6 lg:w-3/5 shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              {/* Tourist Spot Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Tourist Spot Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Tourist Spot Name"
                  className="input input-bordered w-full"
                  {...register("tourist_spot_name", { required: true })}
                />
                {errors.tourist_spot_name && (
                  <span className=" text-red-300 mt-1">
                    This field is required
                  </span>
                )}
              </div>
              {/* photo URL */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                  {...register("photoURL")}
                />
                {errors.photoURL && (
                  <span className=" text-red-300 mt-1">
                    This field is required
                  </span>
                )}
              </div>
              {/* country & location */}
              <div className="flex flex-col md:flex-row gap-2 md:gap-6">
                <div className="form-control flex-grow">
                  <label className="label">
                    <span className="label-text">Select Country</span>
                  </label>
                  <select
                    className="input input-bordered w-full"
                    {...register("country", { required: true })}
                  >
                    {countries.map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>

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
                    placeholder="Location"
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
                  placeholder="Description"
                  className="input input-bordered w-full"
                  {...register("description", { required: true })}
                  cols="80"
                  rows="10"
                ></textarea>

                {errors.description && (
                  <span className=" text-red-300 mt-1">
                    This field is required
                  </span>
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
                    placeholder="Average Cost (in USD)"
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
                    placeholder="Seasonality (Summer/Winter/Fall etc.)"
                    className="input input-bordered w-full "
                    {...register("seasonality")}
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
                    placeholder="Travel Time (in days)"
                    className="input input-bordered w-full "
                    {...register("travelTime", { required: true })}
                  />
                  {errors.travelTime && (
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
                    placeholder="Visitors Per Year (over/approx. 1 million)"
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

              {/* email and name */}
              <div className="flex flex-col md:flex-row gap-2 md:gap-6">
                <div className="form-control flex-grow">
                  <input
                    type="hidden"
                    defaultValue={user.displayName}
                    {...register("name")}
                  />
                  <label className="label">
                    <span className="label-text">User Name</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={user ? user.displayName : ""}
                    className="input input-bordered w-full "
                    {...register("name", { required: true })}
                    disabled={true}
                  />
                  {errors.name && (
                  <span className=" text-red-300 mt-1">
                    This field is required
                  </span>
                )}
                </div>
                <div className="form-control flex-grow">
                  <input
                    type="hidden"
                    defaultValue={user.email}
                    {...register("email")}
                  />
                  <label className="label">
                    <span className="label-text">E-mail</span>
                  </label>
                  <input
                    type="email"
                    defaultValue={user.email}
                    className="input input-bordered w-full "
                    {...register("email", { required: true })}
                    disabled={true}
                  />
                  {errors.email && (
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
                value="Add Tourists Spot"
              />
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddTouristSpot;
