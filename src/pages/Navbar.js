import React from "react";
import { Link } from 'react-router-dom'
import mainlogo from './../images/MainLogo.png';
import profilePic from './../images/profile-pic.jpg';
// import {useRef} from 'react';

const Navbar = () => {

    // For scrolling down a page ==>>
    // const ref = useRef(null);
    // const handleClick = () => {
    //     ref.current?.scrollIntoView({behavior: 'smooth'});
    //   };

    return (<div className="navbar">
        <div className="navbar-container">
            <div className="logo-container">
                <img src={mainlogo} alt="" className="logo" />
                {/* <h1 class="logo">MovieCat</h1> */}
            </div>
            <div className="menu-container">
                <ul className="menulist">
                    <li className="menulist-item active"><Link className="link-item" to={"/"} >Home</Link></li>
                    <li className="menulist-item"><Link className="link-item" to={"/about"}>About</Link></li>
                    {/* <li className="menulist-item active">Home</li>
                <li className="menulist-item">About</li> */}
                   <Link to={"/"} className="link-item" onClick={()=>
                    window.scrollTo({top:2100,left:0,behavior:"smooth"})
                }><li className="menulist-item">Series</li> </Link>

                   <Link to={"/"} className="link-item" onClick={()=> 
                   window.scrollTo({top:1050,left:0,behavior:"smooth"})
                   }> <li className="menulist-item">Popular</li></Link>
                   
                   <Link to={"/"} className="link-item" onClick={()=> 
                   window.scrollTo({top:700,left:0,behavior:"smooth"})
                   }> <li className="menulist-item">New Release</li></Link>
                </ul>
            </div>
            <div className="profile-container">
                <div className="profile-text-container">
                    <Link className="link-item" to={"/login"}><span className="profile-text">LOGIN</span></Link>
                    {/* <div className="dropdown_arrow"><i className="fa fa-caret-down" aria-hidden="true" /></div> */}

                </div>
                <img
                    src={profilePic}
                    alt=""
                    className="profile-picture"
                />

                {/* <div className="toggle">
                <i className="fas fa-moon toggle-icon" />
                <i className="fas fa-sun toggle-icon" />
                <div className="toggle-ball" />
            </div> */}
            </div>
        </div>
        <div className="sidebar">
            <a href="/searchbar"><i className="left-menu-icon fas fa-search" /></a>
            <a href="/"><i className="left-menu-icon fas fa-home" /></a>
            <a href="/contact"><i className="left-menu-icon fas fa-users" /></a>
           <a href="https://in.bookmyshow.com/" target={"blank"}> <i className="fa-solid fa-ticket"/></a>
            {/* <i className="left-menu-icon fas fa-tv" /> */}


        </div>
    </div>


    );
}

export default Navbar;