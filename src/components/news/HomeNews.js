import React, { useState, useEffect } from 'react'
import { collection, onSnapshot, limit, orderBy, Timestamp } from "@firebase/firestore";
import { db } from '../../config/firebase'
import { Link } from 'react-router-dom';
import useDocumentTitle from '../../useDocumentTitle';

const HomeNews = () => {
    useDocumentTitle('News | Michael O. Wilson')


    const [isNews, setNews] = useState([]);
    useEffect(() => {
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
  return (
    <div>
        <h1>News</h1>
        {isNews.map(isNews => {
            return (
                <div key={isNews.id} className='news-container'>
                    <div className='news'>
                    <Link to={`/news/${isNews.id}`}>
                      <img src={isNews.image} alt={isNews.title} width={320} height={320} />
                    </Link>
                    <p>{isNews.date}</p>
                    <hr />
                    <Link to={`/news/${isNews.id}`}><h4>{isNews.title}</h4></Link>
                    <Link to={`/news/${isNews.id}`}><button>Read More</button></Link>
                    </div>
                </div>
            )
        })}
        <Link to='/news'><button>View all news article</button></Link>
    </div>
  )
}

export default HomeNews