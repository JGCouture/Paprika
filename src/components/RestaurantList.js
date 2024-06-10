import React from 'react';
import RestaurantItem from './RestaurantItem';

const RestaurantList = ({ restaurants }) => {

    return (

        <div className='container'>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {restaurants.map(restaurant => (
                    <RestaurantItem key={restaurant.id} restaurant={restaurant} />
                ))}
            </div>
        </div>
        
    );
};

export default RestaurantList;
