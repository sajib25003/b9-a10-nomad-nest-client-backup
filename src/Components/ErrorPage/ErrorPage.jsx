import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=" flex flex-col items-center py-28 bg-emerald-50 text-black">
      <div className=" w-[450px]">
        <img src='/public/Scarecrow.png' alt="404-Scarecrow" />
      </div>
      <div className=" flex flex-col items-center gap-4">
        <h2 className=" text-2xl font-bold">I have bad news for you</h2>
        <p className="text-lg font-bold">
          The page you are looking for might be removed or is temporarily
          unavailable
        </p>
        <NavLink to="/"><button className="btn bg-black border-white text-white font-bold ">Go to Home</button></NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
