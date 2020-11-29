import React from 'react';
import {Outlet} from 'react-router-dom';

export default function Shop({shoes}) {

    return (
        <div className="row d-flex justify-content-center p-2">
            <Outlet/>
        </div>
    )
}
