import React from "react";
import { NavLink } from "react-router-dom";


const Banner = () => {
  return (
    <>
    <section className="w-[90%] items-center  mx-auto ">
    <div className="bg-[#9538E2] min-h-[560px] rounded-2xl  my-4  ">
      <div className="pt-14 lg:min-h-[700px]">
        <div className="hero-content text-center pt-14 lg:pt-20">
          <div className="text-center"> 
            <h1 className="text-3xl  lg:text-6xl text-white font-bold ">Style Your Tech Right with<br className="hidden lg:flex" /> Accessories from Gadget Heaven</h1>
            <p className="py-6 text-white ">
            Upgrade your lifestyle with the latest gadgets and accessories. <br className="hidden lg:flex" />  From smart tech to sleek designs, we’ve got you covered!
            </p>
            <NavLink to='/dashboard'><button className="btn rounded-3xl font-bold text-xl text-[#9538E2] bg-white"><i className="fa-solid fa-shop"></i>Shop Now</button></NavLink>
          </div>
        </div>
      </div>
    </div>
    </section>



    </>

  );
};

export default Banner;

