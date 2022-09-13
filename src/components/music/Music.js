import React, { useState, useEffect } from 'react'
import { collection, onSnapshot, orderBy, Timestamp } from "@firebase/firestore";
import { db } from '../../config/firebase'
import './music.css'
import useDocumentTitle from '../../useDocumentTitle';
import { Link } from 'react-router-dom';
const Music = () => {
    useDocumentTitle('Music | Michael O. Wilson')


    const [isMusics, setMusic] = useState([]);
    useEffect(() => {
        const collRef = collection(db, 'music')
        const createdAt = Timestamp.now();

        const fetchUsers = onSnapshot(collRef, orderBy('createdAt'), snapshot => {
            setMusic(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    title: doc.data().title,
                    image: doc.data().images,
                    homepage: doc.data().homepage,
                    month: doc.data().month,
                    createdAt
                }
            }))
            fetchUsers();
        })
    },[])
  return (
    <div>
        <h1>Music</h1>
        {isMusics.map(isMusic => {
            return (
                <div key={isMusic.id} className='music-container'>
                    <div className='music'>
                        <img src={isMusic.image} alt={isMusic.title} width={320} height={320} />
                        <h4><Link href={isMusic.homepage}>{isMusic.title}</Link></h4>
                        <p>{isMusic.month}</p>
                    </div>
                </div>
            )
        })}
        
    </div>
  )
}

export default Music