import React, { useState, useEffect } from 'react'
import { collection, onSnapshot, limit, query, orderBy, Timestamp } from "@firebase/firestore";
import { db } from '../../config/firebase'
import { Link } from 'react-router-dom';
import useDocumentTitle from '../../useDocumentTitle';

const HomeNews = () => {
    useDocumentTitle('News | Michael O. Wilson')


    const [isNews, setNews] = useState([]);
/*    useEffect(() => {
        const collRef = collection(db, 'news')
        const createdAt = Timestamp.now()

        const fetchNews = onSnapshot(collRef, orderBy('createdAt'), limit(3), snapshot => {
            setNews(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    title: doc.data().title,
                    image: doc.data().images,
                    subTitle: doc.data().subTitle,
                    content: doc.data().content,
                    date: doc.data().date,
                    createdAt
                }
            }))
            fetchNews();
        })
    },[])
*/
    useEffect(() => {
        const collRef = collection(db, 'news')
        const createdAt = Timestamp.now()

        const q = query(collRef, limit(3))

        const fetchUsers = onSnapshot(q, orderBy('createdAt', 'desc'), snapshot => {
            setNews(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    title: doc.data().title,
                    image: doc.data().images,
                    subTitle: doc.data().subTitle,
                    content: doc.data().content,
                    date: doc.data().date,
                    createdAt
                }
            }))
            fetchUsers();
        })
    },[])
  return (
    <div>
        <div className="featured pad" id="featuredalbum">
			<div className="container-fluid">
				<div className="default-heading">
					<h2>News</h2>
				</div>

                <div className="featured-element">
					<div className="row">
                        {isNews.map(isNews => {
                            return (
                                <div key={isNews.id} className='news-container col-md-4 col-sm-6'>
                                    <div className="featured-item ">
                                        <div className="figure">
                                            <Link to={`/news/${isNews.id}`}>
                                                <img src={isNews.image} className="img-responsive box" alt={isNews.title} width={320} height={320} />
                                            </Link>
                                        </div>
                                        <div className="featured-item-info">
                                            <p>{isNews.date}</p>
                                            <hr />
                                            <Link to={`/news/${isNews.id}`}><h4 className='text-light'>{isNews.title}</h4></Link>
                                            <Link to={`/news/${isNews.id}`}><button className='btn btn-primary'>Read More</button></Link>
                                        </div>
                                        

                                    </div>
                                </div>
                            )
                        })}
                        <Link to='/news'><button className='btn btn-primary btn-lg'>View More</button></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeNews

