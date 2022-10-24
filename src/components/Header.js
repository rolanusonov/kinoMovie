import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Link to="/popular">Popular</Link>
            <Link to="/nowplaying">Now Playing</Link>
        </div>
    );
};

export default Header;