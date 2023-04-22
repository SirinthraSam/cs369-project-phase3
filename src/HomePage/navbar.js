import React, { useState } from "react";
// import { Link } from 'react-router-dom';

import "./navbar.css";

function Navbar() {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
        } else setActive("nav__menu");

        // Icon Toggler
        if (icon === "nav__toggler") {
            setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");
    };
    // const [click, setClick] = useState(false);
    // const handleClick = () => setClick(!click);
    // const closeMobieMenu = () => setClick(false);
    return (
        <nav className="nav">
            <a href="#" className="nav__brand">
                TU  Dome
            </a>
            <div className={active}>
                <ul >
                    <li className="nav__link">
                        <a href="#">ประวัติส่วนตัว</a>
                    </li>
                </ul>
                <ul className="nav__item">
                    <li className="nav__link">
                    <a href="#">แจ้งซ่อม</a> 
                    </li>
                </ul>
                <ul className="nav__item">
                    <li className="nav__link">
                        <a href="#">แจ้งปัญหา</a>
                    </li>
                </ul>
                <ul className="nav__item">
                    <li className="nav__link">
                        <a href="#">เบอร์ติดต่อฉุกเฉิน</a>
                    </li>
                </ul>

            </div>
            <div onClick={navToggle} className={icon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default Navbar;