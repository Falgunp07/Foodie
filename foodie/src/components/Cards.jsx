import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { FaHeart } from 'react-icons/fa';


const Cards = ({ item }) => {
    const [isHeartFillted, setIsHeartFillted] = useState(false);

    const handleHeartClick = () => {
        setIsHeartFillted(!isHeartFillted);
    };
    return (

        <div to={`/menu/${item._id}`} className="card w-70 bg-base-100 shadow-xl relative">
            <div className={`rating gap-1  p-4 heartStar  ${isHeartFillted ? "text-rose-500" : "text-white"}`}
                onClick={handleHeartClick}>
                <FaHeart className='card w-96 bg-base-100 shadow-xl' />
            </div>
            <Link to={`/menu/${item._id}`}>
                <figure>
                    <img src={item.image} alt="shoes" className='hover:scale-105 transition all duration-200 md:h-72' />
                </figure>
            </Link>
            <div className="card-body">
                <Link to={`/menu/${item._id}`}>{""} <h2 className="card-title">{item.name}</h2></Link>
                <p>Description of the item</p>
                <div className="card-actions justify-between items-center mt-2">
                    <h5 className='font-semibold'><span className='text-sm text-red'>₹{item.price}</span></h5>
                    <button className="btn  text-white   bg-gradient-to-r from-[#29c0ac] from-0% to-[#5F80FC] to-100%">Buy Now</button>
                </div>
            </div>
        </div>

    );
};

export default Cards
