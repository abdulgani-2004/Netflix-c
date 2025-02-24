import "./navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link correctly

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => window.onscroll = null; // Clean up the scroll event listener
    };

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" 
                        alt="Logo" 
                    />
                    {/* Use Link to navigate to different routes */}
                    <span><Link to="/register">Register</Link></span>
                    <span><Link to="/login">Login</Link></span>
                    <span><Link to="/watch">Watch</Link></span>
                    <span><Link to="/home">Home</Link></span>
                </div>
                <div className="right">
                    <SearchIcon className="icon" />
                    <span>Kid</span>
                    <NotificationsIcon className="icon" />
                    <img 
                        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                        alt="Profile" 
                    />
                    <div className="profile">
                        <ArrowDropDownIcon className="icon" />
                        <div className="option">
                            <span>Setting</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
