import React, { useState, useEffect } from 'react'
import { collection, onSnapshot } from "@firebase/firestore";
import { db } from '../../config/firebase'
import useDocumentTitle from '../../useDocumentTitle';

const NewsDetail = () => {
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

        })
        fetchNews()
    },[])
  return (
    <div>
        {isNews.map(isNews => {
            return (
                <div key={isNews.id} className='music-container'>
                    <img src={isNews.image} alt={isNews.title} width={320} height={320} />
                    <h3>{isNews.title}</h3>
                    <h5>{isNews.subTitle}</h5>
                    <p>{isNews.content}</p>
                </div>
            )
        })}
    </div>
  )
}

export default NewsDetail