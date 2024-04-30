import { Link, NavLink } from "react-router-dom";
import defaultUserImage from "../../../public/default.png";
import { Tooltip } from "react-tooltip";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Hourglass } from "react-loader-spinner";

const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");

  useEffect(()=>{
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme', localTheme)
  },[theme])

  const handleToggle = e => {
    if (e.target.checked){
      setTheme("night");
    }
    else {
      setTheme("light");
    }
    console.log(theme);
  }

  const handleLogOut = () => {
    logOut().then().catch();
  };
  if (loading) {
    return (
      <div className=" flex justify-center items-center min-h-screen">
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#306cce", "#72a1ed"]}
        />
      </div>
    );
  }
  const navLinks = (
    <>
      <li className="font-bold text-white ">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-bold text-white ">
        <NavLink to="/allSpots">All Tourist Spot</NavLink>
      </li>
      <li className="font-bold text-white ">
        <NavLink to="/addSpots">Add Tourist Spot</NavLink>
      </li>
      <li className="font-bold text-white ">
        <NavLink to="/myList">My List</NavLink>
      </li>
      {!user && (
        <li className="font-bold text-white ">
          <NavLink to="/register">Register</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-black shadow-xl  sticky top-0 z-30">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost text-white  lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-black rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a
          href="/"
          className="btn btn-ghost text-lg md:text-xl lg:text-3xl font-extrabold text-white"
        >
          <img className=" hidden md:flex w-[50px]" src="/public/logo-rb.png" alt="" />
          Nomad Nest
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      {/* user profile */}
      <div className="navbar-end gap-3 mr-4">
        {user ? (
          <div className="dropdown dropdown-bottom dropdown-end relative flex gap-3">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar w-10"
            >
              <div
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user.displayName}
                data-tooltip-place="left"
                className="w-10 rounded-full bg-white"
              >
                <img
                  alt="Profile"
                  src={user.photoURL || defaultUserImage}
                />
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[2] p-2 shadow menu menu-sm dropdown-content bg-black text-white rounded-box w-60"
              >
                <li>
                  <a className="justify-between font-bold">
                    {user.displayName}
                  </a>
                </li>
                <li className=" font-medium" onClick={handleLogOut}>
                  <Link to="/login">Logout</Link>
                </li>
              </ul>
            </div>

            <div className="hidden md:flex">
              <Link
                to="/login"
                onClick={handleLogOut}
                className="lg:mr-4 btn text-white bg-black font-bold border-white"
              >
                Log Out
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <Link
              className="mr-2 btn bg-black text-white font-bold border-white"
              to="/login"
            >
              Login
            </Link>
          </div>
        )}
        {/* theme controller */}
      <label className="swap swap-rotate">
        {/* this hidden checkbox controls the state */}
        <input onChange={handleToggle} type="checkbox" className="theme-controller " value='night' />
        
        {/* moon icon */}
        <svg
          className="swap-on fill-current w-10 h-10 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
        </svg>
        {/* sun icon */}
        <svg
          className="swap-off fill-current w-10 h-10 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
        </svg>

        
      </label>
      </div>
      
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default Navbar;
