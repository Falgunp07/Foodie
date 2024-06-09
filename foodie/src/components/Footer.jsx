import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="footer xl:px-24 py-10 px-4 text-base-content">
  <aside>
    <img src="/logo.jpg" alt="" style= {{ width: '180px', height: '90px'}} />
    <p className='my-5 md:w-40'>Savor the artistry where every dish is a culinary masterpiece</p>
  </aside> 
  <nav>
    <h6 className="footer-title">USEFUL LINKS</h6> 
    <a className="link link-hover">About Us</a>
    <a className="link link-hover">Events</a>
    <a className="link link-hover">Blogs</a>
    <a className="link link-hover">FAQ</a>
  </nav> 
  <nav>
    <h6 className="footer-title">MAIN MENU</h6> 
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Offers</a>
    <a className="link link-hover">Menus</a>
    <a className="link link-hover">Reservation</a>
  </nav> 
  <nav>
    <h6 className="footer-title">CONTACT US</h6> 
    <a className="link link-hover">falgunpatel071@gmail.com  </a>
    <a className="link link-hover">+91 1234567890 </a>
    <a className="link link-hover"> Social Media</a>
  </nav>
</footer>


<hr />
<footer className="footer footer-center  text-base-content">
  <aside>
    <p>Copyright © 2024 - All right reserved by Falgun Industries Ltd</p>
  </aside>
</footer>
    </div>
  )
}

export default Footer