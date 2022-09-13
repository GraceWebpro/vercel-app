import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDocs } from "@firebase/firestore";
import { db } from '../../config/firebase'
import useDocumentTitle from '../../useDocumentTitle';

const NewsDetail = () => {
    useDocumentTitle('News | Michael O. Wilson')
    const { newsId } = useParams()

    const [blog, setBlog] = useState(null);
    useEffect(() => {
        const getBlog = async () => {
            const newsRef = doc(db, 'news', newsId)
            const data = await getDocs(newsRef);
            if (data.exists()) {
                setBlog(data.data())
            }
        }
        getBlog()
    },[])
  return (
    <div>
        {blog.map(blog => {
            return (
                <div key={blog.id} className='music-container'>
                    <img src={blog.image} alt={blog.title} width={320} height={320} />
                    <h3>{blog.title}</h3>
                    <h5>{blog.subTitle}</h5>
                    <p>{blog.content}</p>
                </div>
            )
        })}
    </div>
  )
}

export default NewsDetail