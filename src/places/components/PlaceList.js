import React from 'react'
import './PlaceList.css'
import Card from '../../shared/components/UIElements/Card'
import PlaceItem from './PlaceItem'
import Button from '../../shared/components/FormElements/Button'
function PlaceList(props) {

    if (props.items.length === 0)
        return <div className='.place-list center'>
            <Card className="place-list">
                No Places Found
                <Button >Shared Places</Button>
            </Card>
        </div>

    return <ul className='place-list'>
        {props.items.map(place => (
            <PlaceItem
            key={place.id}
                id={place.id}
                title={place.title}
                image={place.imageUrl}
                description={place.description}
                address={place.address}
                creatorId={place.creator}
                coordinates={place.location}
            />
            
        ))}
    </ul>
}

export default PlaceList