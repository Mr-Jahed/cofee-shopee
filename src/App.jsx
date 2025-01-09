import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Navbar/Home";
import Services from "./components/Navbar/Services";
import Banner from "./components/Navbar/Banner";
import Appstore from "./components/Appstore";
import  Testonomial from "./components/Navbar/Testonomial";
import Footer from "./components/Navbar/footer";
// import LoginSignup from "./components/Navbar/LoginSignup";


const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      <div className="overflow-x-hidden">
        <Navbar />
        <Home/>
        <Services/>
        <Banner/>
        <Appstore/>
        <Testonomial/>
        <Footer/>
        {/* <LoginSignup/> */}
         
      

      </div>
    </div>
  );
};

export default App;
