import React from 'react';
import {useParams} from 'react-router-dom';

export default function Shoe({shoes}) {

    const { slug } = useParams();

    const shoe = shoes[slug];
    if (!shoe) {
        return <div className="text-danger text-center display-4">
            Shoe Not Found!
        </div>
    }

    const { name, img } = shoe;

    return (
        <div className="mx-2">
            <h3>{name}</h3>
            <img src={img} alt="no img" className="card-img-top"/>
        </div>
    )
}
