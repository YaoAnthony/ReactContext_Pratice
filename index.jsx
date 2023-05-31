import { useState, useContext } from 'react';
import { getImageUrl,places } from './Utils';

import css from "./style.module.scss"
import { SizeControl } from './Context';

const Image = ({place}) =>{
    const isLarge = useContext(SizeControl);
    const size = isLarge ? 150 : 100;
    return (
        <img
        src={getImageUrl(place)}
        alt={place.name}
        width={size}
        height={size}
        />
    );
}

const ImageList = () =>{
    const listItems = places.map(place =>
        <li key={place.id}>
            <Image place={place}/>
        </li>
    );
    return <ul>{listItems}</ul>;
}

export default function ReactRebuild() {
    const [ isLarge, setIsLarge ] = useState(false)
    
    return(

        <SizeControl.Provider value = {isLarge} >
            <div className={css.card}>
                <label>
                    <input type="checkbox" checked={isLarge} onChange={() => {setIsLarge(!isLarge)}}/>
                    Use large images
                </label>
                <hr />
                <ImageList />
            </div>
        </SizeControl.Provider>
    )
}





/*
//Old version
export default function ReactRebuild() {
const [isLarge, setIsLarge] = useState(false);
const imageSize = isLarge ? 150 : 100;
return (
    <div className={css.card}>
        <label>
            <input
            type="checkbox"
            checked={isLarge}
            onChange={e => {
                setIsLarge(e.target.checked);
            }}
            />
            Use large images
        </label>
        <hr />
        <List imageSize={imageSize} />
    </div>
)
}

function List({ imageSize }) {
const listItems = places.map(place =>
    <li key={place.id}>
    <Place
        place={place}
        imageSize={imageSize}
    />
    </li>
);
return <ul>{listItems}</ul>;
}

function Place({ place, imageSize }) {
return (
    <>
    <PlaceImage
        place={place}
        imageSize={imageSize}
    />
    <p>
        <b>{place.name}</b>
        {': ' + place.description}
    </p>
    </>
);
}

function PlaceImage({ place, imageSize }) {
return (
    <img
    src={getImageUrl(place)}
    alt={place.name}
    width={imageSize}
    height={imageSize}
    />
);
}


*/