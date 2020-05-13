import React from "react";
import "./style.css";

class Header extends React.Component {
    render() {
        return(
            <header>
                <div className="welcome-block">Welcome to GitCat</div>
                <div className="info-block">Statistic</div>
            </header>
        );
    }
}

export default Header;
