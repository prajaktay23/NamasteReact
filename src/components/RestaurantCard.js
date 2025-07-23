import { CDN_RES_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { restData } = props;

    const { name, cuisines, areaName, cloudinaryImageId, avgRating } = restData?.info;
    return (
        <div className='res-card'>
            <h3>{name}</h3>
            <img alt='Restaurant Logo' className='res-logo' src={CDN_RES_URL + cloudinaryImageId} />
            <h5>{areaName}</h5>
            <h5>{cuisines.join(', ')}</h5>
            <h5>{avgRating} star</h5>
            {/* <h5>38 mins</h5> */}
        </div>
    )
}
export default RestaurantCard;