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
                    <h1>{isNews.title}</h1>
                    <p>{isNews.content}</p>
                </div>
            )
        })}
    </div>
  )
}

export default NewsDetail