import React from 'react';
import bg from '../../assets/banner.jpg'
const BannerImg = () => {
    return (
        <div className='lg:border p-15 md:p-24   lg:p-6 rounded-lg md:mb-14 '>
           <img className=' lg:w-[850px] lg:h-[400px]  rounded-xl ' src={bg} alt="" />
        </div>
    );
};

export default BannerImg;