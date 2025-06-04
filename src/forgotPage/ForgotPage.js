import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import logoPindad from "../asset/LogoPindad.png";
import alatPindad from "../asset/AlatPindad.png";

function ForgotPage() {
  const navigate = useNavigate();
  const [isMounted, setIsMounted] = useState(false);

  const carouselSetting = {
    speed: 600,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
  };

  function handleSubmit(event) {
    // event.preventDefault();

    const form = event.target;
    const userName = form.elements.username.value;
    const password = form.elements.password.value;

    console.log("user name", userName);
    console.log("password", password);
  }

  function handleLogin() {
    navigate("/");
  }

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="w-full h-screen bg-gray-200">
      <div className="flex flex-row-reverse justify-center items-center h-screen ">
        {/* Card Login */}
        <div
          className={`relative flex flex-col shadow-xl bg-white w-96 h-[400px] items-center p-10 z-10 -ml-10 -mt-5 transition-all duration-[1s,10s] ease-in ${
            isMounted
              ? "opacity-100 -translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          {" "}
          <h3 className="font-bold text-2xl text-gray-700">
            Employee Self Service
          </h3>
          <p className="pt-10 pb-4 text-sm font-semibold">Forgot Password</p>
          {/* Login Form */}
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-4 relative">
              <input
                type="text"
                name="username"
                placeholder="Enter username"
                className="w-full pl-12 pr-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              />
              <div className="absolute left-3 top-3 text-gray-500 text-2xl">
                <FontAwesomeIcon icon={faUser} />
              </div>
            </div>

            <div className="mb-6 relative">
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                className="w-full pl-12 pr-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              />
              <div className="absolute left-3 top-3 text-gray-500 text-2xl">
                <FontAwesomeIcon icon={faKey} />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#d4af37] text-white py-2 rounded-md hover:bg-[#C3A01B] transition duration-200"
            >
              Reset Password
            </button>
          </form>
          <div
            className="absolute bottom-4 text-sm cursor-pointer"
            onClick={handleLogin}
          >
            <p className="text-blue-500 font-semibold">Sign In!</p>
          </div>
        </div>

        {/* Card Carousel*/}
        <div
          className={`shadow-xl bg-[#000080] w-[500px] h-[500px] items-center p-10 rounded-lg justify-center transition-all duration-[1s,10s] ease-in ${
            isMounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <Slider {...carouselSetting}>
            <div className="bg-gray-200 ">
              <img
                src={logoPindad}
                alt="Logo Pindad Persero"
                className="w-full h-[400px] object-contain "
              />
            </div>
            <div className="bg-gray-200 ">
              <img
                src={alatPindad}
                alt="Vechile Pindad"
                className="w-full h-[400px] object-contain"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default ForgotPage;
