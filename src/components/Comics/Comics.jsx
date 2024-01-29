import React, { useContext } from 'react'
import Banner from '../Banner'
import ComicCard from './ComicCard'
import DataContext from '../../Context/DataContext'
import { Link } from 'react-router-dom'

function Comics() {
  const {comicsData}=useContext(DataContext)
  console.log(comicsData);
  return (
    <div className='comics'>
      <Banner/>
      <div className="comics-card-wrapper">
        {
          comicsData.map(item=><Link to={`/comics/${item.id}`}
          key={item.id}
          ><ComicCard key={item.id} {...item}/></Link>)
        }
      </div>

    </div>
  )
}

export default Comics