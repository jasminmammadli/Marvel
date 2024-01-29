import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Detail() {
    const [comicData,setComicData]=useState([])
    const {id}=useParams()
    useEffect(()=>{
        axios.get(`https://gateway.marvel.com/v1/public/comics/${id}?ts=1&apikey=23f73c6784f2f80d3b29cab33fd30ff7&hash=721beb32bc3e66c06a76db97ae763b92`)
        .then(res=>{setComicData(res.data.data.results[0]), console.log(res.data.data.results[0])})
    },[])
  return (
    <div className='detail-section'>
        <div className="detail-img">
            <img src={`${comicData.thumbnail?.path}.${comicData.thumbnail?.extension}`} alt="" />
        </div>
        <div className="detail-content">
            <div className="detail-title">
                <p>{comicData.title}</p>
                <Link to={'/comics'}>Back to all</Link>
            </div>
            <div className='detail-info'>
                <p>{comicData.textObjects ? comicData.textObjects[0]?.text : ''}</p>
                <p>{comicData.pageCount} pages</p>
                <p>Language: {comicData.textObjects ? comicData.textObjects[0]?.language : 'Not Available'}</p>
                <p className='detail-card-price'>{comicData.prices?.[0].price==0 ? 'Not Available' : comicData.prices?.[0].price}</p>
            </div>
        </div>
    </div>
  )
}

export default Detail