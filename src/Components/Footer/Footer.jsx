import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className=" p-4 lg:p-10 bg-black text-white grid grid-cols-1 md:grid-cols-2 gap-4 text-center lg:text-left lg:grid-cols-4">
        <aside className=" space-y-3">
          <h3 className="text-3xl font-bold text-lime-300">Nomad Nest</h3>
          <p>Reliable Tourism Management since 2002</p>
          <p>Copyright © 2024 - All right reserved</p>
        </aside>
        <nav className=" space-y-3">
          <h6 className="font-bold text-emerald-200 uppercase">Contact Us</h6>
          <a href="/map" className="link link-hover flex justify-center lg:justify-start items-center gap-2">
            <FaMapMarkerAlt /> 192, Mohakhali DOHS, Dhaka
          </a>
          
          <a className="link link-hover flex justify-center lg:justify-start items-center gap-2">
            <FaEnvelope /> nomad.nest@gmail.com
          </a>
          <a className="link link-hover flex items-center justify-center lg:justify-start gap-2">
            <FaPhoneAlt /> +880-1234-567-890
          </a>
        </nav>
        <nav className="hidden lg:flex flex-col gap-3">
          <h6 className="font-bold text-emerald-200 uppercase">Links</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Career</a>
        </nav>
        <nav className="flex lg:hidden flex-col gap-3">
          <h6 className="font-bold text-emerald-200 uppercase">Links</h6>
          <div className="flex gap-3 justify-center">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Career</a>
          </div>
          
        </nav>
        <form className="">
          <h6 className="font-bold text-emerald-200 uppercase">Newsletter</h6>
          <fieldset className="form-control w-full lg:w-[80%]">
            
            <div className="join justify-center items-center my-4">
              <input
                type="text"
                placeholder="username@site.com"
                className="input text-black  join-item bg-lime-50"
              />
              <button className="btn bg-blue-900 text-white font-bold join-item ">Subscribe</button>
            </div>
            <div className="flex gap-4">
                <Link className=" hover:scale-150"><FaFacebook></FaFacebook></Link>
                <Link className=" hover:scale-150"><FaTwitter></FaTwitter></Link>
                <Link className=" hover:scale-150"><FaInstagram></FaInstagram></Link>
            </div>
          </fieldset>
        </form>
      </footer>  
    );
};

export default Footer;