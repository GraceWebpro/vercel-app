import React from 'react'
import useDocumentTitle from '../../useDocumentTitle'
import HomeNews from '../news/HomeNews'
import HomeMusic from '../music/HomeMusic'
//import Contact from '../contact/contact'
import ContactForm from '../contact/contactForm'
import Player from './latestAlbum/player'
import './home.css'
import Banner1 from '../../assets/cover-img.jpg'
//import image1 from '../../assets/img2.jpg'
//import Banner3 from '../../assets/bg1.jpeg'
import 'animate.css';
import Promo from './promo/promo'
import Promo2 from './promo2/promo2'
//import Portfolio from '../portfolio/portfolio'
import emailjs from '@emailjs/browser';

import FeaturedAlbum from './featuredAlbum/featuredAlbum'




const Home = () => {
  useDocumentTitle('Home | Michael O. Wilson')

  return (
    <div>
      <section>
				{/* banner area */}
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Banner1} className="d-block w-100" alt='cover' width='100%' height='50%' />
            </div>
            <div className="carousel-item">
              <img src={Banner1} className="d-block w-100" alt='cover' width='100%' height='50%' />
            </div>
            <div className="carousel-item">
              <img src={Banner1} className="d-block w-100" alt='cover' width='100%' height='50%' />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden"></span>
          </button>
        </div>
			{/* banner end */}
      </section>

      {/* latest album starts here */}
      <Player />
      {/* latest album ends here */}

      <Promo />
  		<FeaturedAlbum />		
            <Promo2 />
            <HomeMusic />
        <HomeNews />
        <ContactForm />



    </div>
  )
}

export default Home