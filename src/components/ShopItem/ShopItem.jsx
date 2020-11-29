import React from 'react';
import {Link,useParams} from 'react-router-dom';

export default function ShopItem({ shoes }) {
    console.log(shoes);
    return (
        <div className="row justify-content-center px-2 my-2 mx-2">
            {Object.entries(shoes).map(([slug, { name, img }]) => (
            <Link to={`/Shop/${slug}`} key={slug} className="card col-sm-3 mx-1 p-0 text-center">
                <img src={img} alt="no img" className="card-img-top" /> 
                <div className="card-title">{name}</div>
            </Link>
            ))}
        </div>
    )
}
