import React, { useState, useEffect } from 'react'
import { collection, onSnapshot } from "@firebase/firestore";
import { db } from '../../config/firebase'
import { Link } from 'react-router-dom';
import useDocumentTitle from '../../useDocumentTitle';

const News = () => {
    useDocumentTitle('News | Michael O. Wilson')


    const [isNews, setNews] = useState([]);
    useEffect(() => {
        const collRef = collection(db, 'news')

        const fetchNews = onSnapshot(collRef, snapshot => {
            setNews(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    title: doc.data().title,
                    image: doc.data().images,
                    subTitle: doc.data().subTitle,
                    content: doc.data().content
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
                    <img src={isNews.image} alt={isNews.title} width={320} height={320} />
                      <Link to={`/news/${isNews.id}`}><h3>{isNews.title}</h3></Link>
                    </div>
                </div>
            )
        })}
        
    </div>
  )
}

export default News