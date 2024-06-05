import React from 'react'
const categoryItems = [
    { id: 1, title: "Dessert", des: "(14 Desserts)", image: "/images/categories/pexels-jeshoots-3631.jpg" },
    { id: 2, title: "Breakfast", des: "(12 dishes)", image: "/images/categories/pexels-paggiarofrancesco-1117862.jpg" },
    { id: 3, title: "Beverages", des: "(16 drinks)", image: "/images/categories/pexels-sadman-1564534.jpg" },
    { id: 4, title: "Lunch", des: "(11 dishes)", image: "/images/categories/pexels-sarthak-2782336-4331491.jpg" },
]

const Categories = () => {
    return (
        <div className='section-container py-13'>
            <div className='text-center'>
                <p className='text-red text-2xl font-semibold text-md'> CUSTOMER FAVOURITE</p>
                <h2 className='text-green 4xl md:text-5xl font-bold my-2 md:leading-snug'>Popular Categories</h2>
            </div>
            {/* categories */}
            <div className='flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12'>
                {
                    categoryItems.map((item, i) => (
                        <div key={i} className='shadow-lg rounded-md bg-white py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all'>
                               <div className='flex w-full mx-auto items-center justify-center'>
                                
                                <img src={item.image} alt="" className='bg-[#ca99e9] p-5 rounded-full w-28 h-28' />
                            </div>
                            <div className='mt-5 space-y-1'>
                                <h5>{item.title}</h5>
                                <p>{item.des}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Categories