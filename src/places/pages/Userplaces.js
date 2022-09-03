import React from 'react'
import PlaceList from '../components/PlaceList'
import { useParams } from 'react-router-dom'

const DUMMY_PLACES =[
    {
    id: 'p1',
    title: 'EMPIRE STATE BUILDING',
    description: 'one of the most famous place',
    imageUrl:'/static/media/newyork.575cc2bf2c812ecca0c1.jpg',
    address:'20 W 34th St, New York, NY 10001',
    location:{
        lat: 40.7484405,
        lng: -73.9878584
    },
    creator: 'u1'
},
{
    id: 'p2',
    title: 'EMPIRE STATE BUILDING',
    description: 'one of the most famous place',
    imageUrl:'/static/media/newyork.575cc2bf2c812ecca0c1.jpg',
    address:'20 W 34th St, New York, NY 10001',
    location:{
        lat: 40.7484405,
        lng: -73.9878584
    },
    creator: 'u2'
}
]
function Userplaces() {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId) 
  return (
    <div>
<PlaceList items={loadedPlaces} />
    </div>
  )
}

export default Userplaces