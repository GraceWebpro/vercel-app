import React, { useState, useEffect } from 'react'
import { collection, onSnapshot, orderBy, Timestamp } from "@firebase/firestore";
import { db } from '../../config/firebase'
import './music.css'
import useDocumentTitle from '../../useDocumentTitle';


const Music = () => {
    useDocumentTitle('Music | Michael O. Wilson')


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
    <div>
        <h1>Music</h1>
        <div  className='row m-cont'>
        {isMusics.map(isMusic => {
            return (
                <div key={isMusic.id} className='col-xl-4 col-md-4 col-sm-6'>
                	
                    <div className="featured-item ">
                    <a href={isMusic.homepage}>
                        <img src={isMusic.image} alt={isMusic.title} width={320} height={320} />
                    </a>
                    <h4><a href={isMusic.homepage}>{isMusic.title}</a></h4>
                    <p>{isMusic.month}</p>
                    <a href={isMusic.homepage} className='btn btn-primary text-light v-btn'><i class="fa fa-share"></i></a>
                    </div>
                    
                </div>   
            )
        })}
        </div>
    </div>
  )
}

export default Music

