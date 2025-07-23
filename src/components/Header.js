import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState("Login");
    console.log("Header rendered");
    return (
        <div className='header'>

            <div className='logo-container'>
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className='nav-item'>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <li><button className="login-logout-btn" onClick={() => { isLoggedIn == "Login" ? setIsLoggedIn("Logout") : setIsLoggedIn("Login") }}
                    >{isLoggedIn}</button></li>
                </ul>
            </div>
        </div>
    )
}
export default Header;