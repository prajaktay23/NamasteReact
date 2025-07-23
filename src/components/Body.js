
import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [seartchText, setSearchText] = useState('');
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    console.log(seartchText);

    console.log("Body rendered");
    useEffect(() => {
        fetchRestaurants();
    }, []);

    const fetchRestaurants = async () => {
        const response = await fetch(
            'https://swiggy-api-4c740.web.app/swiggy-api.json');
        const data = await response.json();
        console.log("dataaa", data);
        setListOfRestaurants(data?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(data?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className='body'>
            <div className='search-container'>
                <input type='text' className='search-input' value={seartchText}
                    onChange={(e) => { setSearchText(e.target.value) }}
                    placeholder='Search for restaurants...' />
                <button className='search-btn' onClick={() => {
                    const filteredList = listOfRestaurants.filter((restaurants) => {
                        return restaurants?.info?.name.toLowerCase().includes(seartchText.toLowerCase());
                    });
                    setFilteredRestaurants(filteredList);
                }}>Search me</button>
            </div>
            <div className='filter'>
                <button className='filter-btn' onClick={() => {
                    const filteredList = listOfRestaurants.filter((restaurants) => {
                        return restaurants?.info?.avgRating >= 4.3;
                    })
                    setFilteredRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className='res-container'>
                {filteredRestaurants?.map((restaurants) => {
                    return <RestaurantCard key={restaurants?.info?.id} restData={restaurants} />
                })}
            </div>

        </div>
    )
}
export default Body;