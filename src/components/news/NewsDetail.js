import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, Timestamp } from "@firebase/firestore";
import { db } from '../../config/firebase'
import { Link } from 'react-router-dom'
import useDocumentTitle from '../../useDocumentTitle';

const NewsDetail = () => {
    useDocumentTitle('News | Michael O. Wilson')
    const { id } = useParams();


    const [isNews, setNews] = useState({});
    useEffect(() => {
        async function fetchNews(id) {
            const newsRef = doc(db, 'news', {id});
            const docSnap = await getDoc(newsRef);
            const data = docSnap.exists() ? docSnap.data() : null

            if (data) {
                setNews({
                    id: doc.id,
                    title: doc.data().title,
                    image: doc.data().images,
                    subTitle: doc.data().subTitle,
                    content: doc.data().content,
                    createdAt: Timestamp.fromDate(new Date())
                })
            } else {
                setNews({});
            }
        }
    },[id])

    console.log('isNews', isNews)
  return (
    <div>
        <div key={isNews.id}>
            <img src={isNews.image} alt={isNews.title} />
            <p>{isNews.date}</p>
            <h3>{isNews.title}</h3>
            <h5>{isNews.subTitle}</h5>
            <p>{isNews.content}</p>
        </div>
    </div>
  )
}

export default NewsDetail