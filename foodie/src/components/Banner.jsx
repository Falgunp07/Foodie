import React from 'react'

const Banner = () => {
  return (
    <div className='section-container'>
      {/* <div className='section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'> */}
      <div className='py-24 flex flex-col md:flex-row justify-between items-center gap-8'>
        {/* text */}
        <div className='md:w-1/2 space-y-7 px-4'>
          <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug bg-gradient-to-r bg-clip-text text-transparent from-[#FE00DE] to-[#F7FE00]'>Dive into Delights of Delectables  Food</h2>
          {/* <p className='text-xl text-[#4A4A4A]'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p> */}


          <p className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#43a8d7]  to-[#eb1c98] ">
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
          </p>



          <button className='btn bg-green px-8 font-semibold text-white rounded-full'>Order Now</button>

        </div>
        {/* image */}

        {/* <img src="public\images\logo\pexels-roman-odintsov-4871117.jpg" alt="" /> */}

        <div className="md:w-1/2 flex justify-end ">
          <img src="/images/logo/pexels-roman-odintsov-4871117.jpg" alt="" className="w-80 h-80 rounded-full object-cover" />
{/* <img src="public\images\logo\WIN_20240603_14_04_08_Pro.jpg" alt="" /> */}


        </div>
      </div>
    </div>

  );
};

export default Banner
