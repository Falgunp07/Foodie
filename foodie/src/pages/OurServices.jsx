import React from 'react'
const serviceLists = [
    {id:1,title:"CATERING",desc:"Delight your guests with our flavours and presentation",image:"/images/receipe/l1.jpg"},
    {id:2,title:"FAST DELIVERY",desc:"We deliver your order promptly to your door",image:"/images/receipe/l2.png"},
    {id:3,title:"ONLINE ORDERING",desc:"Explore menu & order with ease using our Online Ordering",image:"/images/receipe/l3.png"},
    {id:4,title:"GIFT CARDS ",desc:"Give the gift of exceptional dining with Foodie Gift Cards",image:"/images/receipe/l4.png"}
]

const OurServices = () => {
  return (
    <div className='section-container my-16'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
        {/* text  */}
            <div className='md:w-1/2'>
                    <div className='text-left md:w-4/5'>
                        <p className='text-teal-400 text-2xl font-semibold text-md'> OUR STORY & SERVICES</p>
                        <h2 className='text-indigo-400 4xl md:text-5xl font-bold my-2 md:leading-snug'>Our Culinary Journey And Services</h2>
                    <p className='my-5'>Rooted in passion, we curate unforgettable dining experiences and offer exceptional services,blending culinary artistry with warn hospitality.</p>
                   <button className='btn bg-green text-white px-8 py-3 rounded-full'> Explore</button>
                   
                   
                   
                    </div>
                </div>
              {/* images */}
                <div className='md:w-1/2'>
                    <div className='grid sm:grid-cols-2 grid-cols-1 gap-8 items-center'>
                        {
                            serviceLists.map((service) => (
                                <div key={service.id} className='shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-green cursor-pointer hover:border-cyan-600 transition-all duration-200 hover:border'>
                                   <img src={service.image} alt="" className='mx-auto' />
                                   <h5 className='pt-3 font-semibold'>{service.title}</h5>
                                   <p className='text-green'>{service.desc}</p>
                                </div>
                            ))
                        }
                    </div>
                  
                </div>
            </div>
        </div> 
  )
}

export default OurServices
