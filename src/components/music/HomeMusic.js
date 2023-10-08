import React, { useState, useEffect } from 'react'
import { collection, onSnapshot, limit, orderBy, query, Timestamp } from "@firebase/firestore";
import { db } from '../../config/firebase'
import { Link } from 'react-router-dom';
import './music.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; // Import the CSS for basic styling (optional)


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

const HomeMusic = () => {

    const [isMusics, setMusic] = useState([]);
    useEffect(() => {
        const collRef = collection(db, 'music')

        const q = query(collRef, limit(3))
/*
        const fetchNews = onSnapshot(q, snapshot => {
            setMusic(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    title: doc.data().title,
                    image: doc.data().images,
                    subTitle: doc.data().subTitle,
                    content: doc.data().content,
                    date: doc.data().date,
                   
                }
            }))
            fetchNews();
        })
*/
        const fetchUsers = onSnapshot(q, orderBy('createdAt', 'desc'), snapshot => {
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
                        <div className="figure">
                            <a href={isMusic.homepage}>
                                <img src={isMusic.image} className="card-img-top img-fit" alt={isMusic.title} width={320} height={320} />
                            </a>
                            <div class="p-transparent"></div>
                            <div className='bg-primary p-hover card-body'>
                                <h3><a href={isMusic.homepage} className='text-light'>{isMusic.title}</a></h3>
                                <p className='text-light'>{isMusic.month}</p>
                                <a href={isMusic.homepage} className='btn btn-light text-primary'><i class="fa fa-share"></i></a>
                            </div>
                        </div>
                    </div>   
                )
            })}
            </Carousel>

        </div>
        <center><Link to='/music'><button className='h-submit btn btn-primary view'>View More</button></Link></center>

      </div>
  )
}

export default HomeMusic