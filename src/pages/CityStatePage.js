import React from 'react';
import { useParams } from 'react-router-dom';
import { restaurants } from '../data/restaurants';
import RestaurantList from '../components/RestaurantList';
import SEO from '../seo/SEO';

const CityStatePage = () => {

    const { city, state } = useParams();
    
    //  pull data from the database based on selected city and state
    const filteredRestaurants = restaurants.filter(
        restaurant => restaurant.city.toLowerCase() === city.split('-').join(" ").toLowerCase() && restaurant.state.toLowerCase() === state.toLowerCase()

    );

    return (
        <div className='my-5'>
            
            <SEO title={`${city}, ${state} Restaurants`} description={`Find the best restaurants in ${city}, ${state} catering to dietary preferences.`} />
            
            <h1 className='h3 mb-3 fw-normal text-center'>Restaurants in&nbsp; 
            {city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}, 
            {state.toUpperCase()}</h1>

            <RestaurantList restaurants={filteredRestaurants} />
        </div>
    );
};

export default CityStatePage;
