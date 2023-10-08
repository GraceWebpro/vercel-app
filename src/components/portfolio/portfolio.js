import './portfolio.css'
import image1 from './img2.jpg'
import image2 from './img3.JPG'
import React, { useState, useEffect } from 'react'
import { collection, onSnapshot, orderBy, Timestamp } from "@firebase/firestore";
import { db } from '../../config/firebase'
import { Link } from 'react-router-dom';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; // Import the CSS for basic styling (optional)
import Card from './Card'; // Import your Card component

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const cardData = [
  { id: 1, imageSrc: "./img2.jpg", title: "Card 1", description: "Description for Card 1" },
  { id: 2, imageSrc: {image2}, title: "Card 2", description: "Description for Card 2" },
  { id: 3, imageSrc: {image1}, title: "Card 3", description: "Description for Card 3" },
  // Add more card data as needed
];


const Portfolio = () => {

  const [isMusics, setMusic] = useState([]);
    useEffect(() => {
        const collRef = collection(db, 'music')

        const fetchUsers = onSnapshot(collRef, orderBy('createdAt'), snapshot => {
            setMusic(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    title: doc.data().title,
                    image: doc.data().images,
                    homepage: doc.data().homepage,
                    month: doc.data().month,
                    createdAt: Timestamp.fromDate(new Date())
                }
            }))
            fetchUsers();
        })
    },[])
  
  return (
      <div class="portfolio pad" id="portfolio">
				<div>
					<div class="default-heading">
						<h2>Music</h2>
					</div>
				</div>
        <div class="portfolio-content" id="portfolioOwl">

        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          itemClass="music"
          autoPlaySpeed={3000}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
        {isMusics.map(isMusic => {
            return (
              <div key={isMusic.id} className='home-card'>
                <a href={isMusic.homepage}>
                  <img src={isMusic.image} className="card-img-top img-fit" alt={isMusic.title} width={320} height={320} />
                </a>
                <div className='p-hover card-body'>
                  <h3 className='text-light'><a href={isMusic.homepage}>{isMusic.title}</a></h3>
                  <p className='text-light'>{isMusic.month}</p>
                  <a href={isMusic.homepage} className='btn btn-primary text-light'><i class="fa fa-share"></i></a>
                </div>
              </div>   
            )
        })}
        </Carousel>
        </div>
        <center><Link to='/music'><button className='h-submit btn btn-primary'>View More</button></Link></center>

      </div>
  );

}

export default Portfolio

// eslint-disable-next-line no-lone-blocks
{/* 

<div class="portfolio-content" id="portfolioOwl">
        <div className="card ">
            <img class="img-responsive" src={image} alt="product image" width='200' height='400' />
            <div class="p-transparent"></div>
            <div class="">
                <h3>{title}</h3><hr />
                <p>{description}</p>
                <a href="#"><i class="fa fa-share"></i></a>
            </div>
        </div>
    </div>
 <div className="row mx-auto my-auto">
        <div id="recipeCarousel" className="carousel slide w-100" data-ride="carousel">
            <div className="carousel-inner w-100" role="listbox">
                <div className="carousel-item active">
                    <div className="col-md-4">
                        <div className="card card-body">
                            <img className="img-fluid" src="http://placehold.it/380?text=1" />
                        </div>
                    </div>
                </div>
                 </div>
                    </div>
                </div>

*/}