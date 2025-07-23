
import RestaurantCard from './RestaurantCard';
import restList from '../utils/mockData';
import { useEffect, useState } from 'react';

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(restList);
    // const express = require('express');
    // const fetch = require('node-fetch');
    // const app = express();
    // const PORT = 5000;


    // useEffect(() => {
    //     fetchRestaurants();
    // }, []);

    // const fetchRestaurants = async () => {
    //     app.get('/api/restaurants', async (req, res) => {
    //         try {
    //             const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.52110&lng=73.85020&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    //             const data = await response.json();
    //             res.json(data);
    //         } catch (error) {
    //             res.status(500).json({ error: 'Failed to fetch data' });
    //         }
    //     });

    //     app.listen(PORT, () => {
    //         console.log(`Server running on http://localhost:${1234}`);
    //     });
    // }


    return (
        <div className='body'>
            <div className='search-container'>
                <h4>Search</h4>
            </div>
            <div className='filter'>
                <button className='filter-btn' onClick={() => {
                    const filteredList = listOfRestaurants.filter((restaurants) => {
                        return restaurants?.info?.avgRating > 4.0;
                    })
                    setListOfRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className='res-container'>
                {restList.map((restaurants) => {
                    return <RestaurantCard key={restaurants?.info?.id} restData={restaurants} />
                })}
            </div>

        </div>
    )
}
export default Body;