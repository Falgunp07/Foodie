import React, { useEffect, useState, useRef } from 'react'
import Cards from '../../components/Cards';
import { FaFilter } from "react-icons/fa"




const Menu = () => {
    const [menu, setMenu] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortOption, setSortOption] = useState("default");
    const [currentpage, setcurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);

    // loading data
    useEffect(() => {
        // fetch data  from  the backend 
        const fetchData = async () => {
            try {
                const response = await fetch("/menu.json");
                const data = await response.json();
                // console.log(data)
                setMenu(data);
                setFilteredItems(data);
            } catch (error) {
                console.log("Error fetching data", error)
            }
        };
        // call the function 
        fetchData();
    }, [])

    // filtering data based on category 
    const filterItems = (category) => {
        const filtered = category === "all" ? menu : menu.filter((item) => item.category === category);

        setFilteredItems(filtered);
        setSelectedCategory(category);
        setcurrentPage(1);
    };

    // show all data function

    const showAll = () => {
        setFilteredItems(menu);
        setSelectedCategory("all");
        setcurrentPage(1);
    }

    // sorting 

    const handleSortChange = (option) => {
        setSortOption(option);

        let sortedItems = [...filteredItems];

        // logic 
        switch (option) {
            case "A-Z":
                sortedItems.sort((a, b) => a.name.localeCompare(b.name))
                break;
            case "Z-A":
                sortedItems.sort((a, b) => b.name.localeCompare(a.name))
                break;
            case "low-to-high":
                sortedItems.sort((a, b) => a.price - b.price)
                break;
            case "high-to-low":
                sortedItems.sort((a, b) => b.price - a.price)
                break;
            default:
                // code block 
                break;
        }

        setFilteredItems(sortedItems);
        setcurrentPage(1);

    }


    // pagination logic
    const indexOfLastItem = currentpage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem,indexOfLastItem);
    const paginate = (pageNumber) => setcurrentPage(pageNumber);








    return (
        <div className='color-changing-background' >
            {/* Menu banner  */}
            <div className='section-container'>
                <div className='py-48 flex flex-col md:flex-row justify-center items-center gap-8'>
                    {/* text */}

                    <div className='text-center space-y-7 px-4'>
                        <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug bg-gradient-to-r bg-clip-text text-transparent from-[#b600fe] to-[#fe9d00]'>For The Love Of Delicious Food</h2>

                        <p className="text-xl  bg-clip-text text-transparent bg-gradient-to-r from-[#d3c721]  to-[#1ceb7d] md:w-4/5 mx-auto ">
                            Come with family & feel the joy of mouth watering food such as Paneer Sabzi,Noodles,Sandwich and Our Special Thali at moderate cost.
                        </p>



                        <button className='btn bg-green px-8 font-semibold text-white rounded-full'>Order Now</button>

                    </div>
                    {/* image */}

                </div>
            </div>



            {/* menu shop */}
            <div className='section-container'>
                {/* filtering and sorting */}
                <div className='flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3  mb-4'>
                    <div className=' text-black font-semibold flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap'>
                        <button onClick={showAll} className={selectedCategory === "all" ? "active" : ""}>All</button>
                        <button onClick={() => filterItems("Pizza")} className={selectedCategory === "Pizza" ? "active" : ""}>Pizza</button>
                        <button onClick={() => filterItems("popular")} className={selectedCategory === "popular" ? "active" : ""}>Thali</button>
                        <button onClick={() => filterItems("Dessert")} className={selectedCategory === "Dessert" ? "active" : ""}>Desserts</button>
                    </div>

                    {/* sorting base filtering  */}
                    <div className='flex justify-end mb-4 rounded-sm'>
                        <div className='bg-black p-2'>
                            <FaFilter className='h-4 w-4 text-black' />
                        </div>
                        {/* sorting options  */}
                        <select name="sort" id="sort" onChange={(e) => handleSortChange(e.target.value)} value={sortOption} className='bg-black text-white px-2 py-1 rounded-sm'>
                            <option value="default">Default</option>
                            <option value="A-Z">A-Z</option>
                            <option value="Z-A">Z-A</option>
                            <option value="low-to-high">Low-To-High</option>
                            <option value="high-to-low">High-To-Low</option>
                        </select>
                    </div>
                </div>


                {/* products card  */}
                <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4'>
                    {
                        currentItems.map((item) => (
                            <Cards key={item._id} item={item} />
                        ))
                    }
                </div>
            </div>


{/* pagination section  */}

<div className='flex justify-center my-8'>
    {
        Array.from({length: Math.ceil(filteredItems.length / itemsPerPage)}).map((_, index) => (
            <button key={index + 1} onClick={() => paginate(index + 1)} className={`mx-1 px-3 py-1 rounded-full ${currentpage === index + 1 ? "bg-violet-500 text-white" : "bg-gray-200"}`}>
                {index + 1}
            </button>
        ))
    }
</div>


        </div>
    );
};

export default Menu






