import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
const Github = () => {
    const {username} = useParams()
    const [img , setImg] = useState('')

    const userData = async()=>{
        const data = await axios.get(`https://api.github.com/users/${username}`) 
      console.log(data.data.avatar_url)
      setImg(data.data.avatar_url)

    }
    useEffect(() => {
      userData()
        
       
    }, []);
  return (
    <>
        <div className='flex justify-center'>
            <img src={img} alt="" srcSet="" />
        </div>
    </>
  )
}

export default Github