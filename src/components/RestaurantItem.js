import React from 'react';
import { FaRegHeart } from "react-icons/fa";

// list of restaurants
const RestaurantItem = ({ restaurant }) => {

    return (
     
        <div className="col">

            <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">image</text></svg>
                <div className="card-body">
                    
                    <div className='card-text'>
                        <p className='fw-bold'>{restaurant.name}</p>
                        <p className="">{restaurant.cuisine}</p>
                    </div>
                
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>

                    <small className="text-body-secondary"><FaRegHeart /></small>
                    </div>
                </div>
            </div>
        </div>
       
    );
};

export default RestaurantItem;
