import React from 'react'
import vikas from './../images/vikas.jpeg';
import shreyash from './../images/shreyash.jpeg';
import amey from './../images/amey.jpeg';
import nirmal from './../images/nirmal.jpeg';
import aditya from './../images/aditya.jpeg';
import insta from './../images/instagram.png';
import linkedln from './../images/linkedin.png';
import bgimage from './../images/contact_bg.jpg';
import Navbar from './Navbar';
import Footer from './../footer';


function Contact() {
    return (
        <>
        <Navbar/>
            <div className="heading">CONTACT US</div>
            <div className="items-container"

             style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5), #151515),url(${bgimage})`}}>

                <div className=" item">
                    <img src={vikas} alt="" className="profile-pic" />
                        <h4 className="item-name">Vikas Raut</h4>
                    <div className="item-info">
                        <a href="https://instagram.com/vikas_raut_77?igshid=ZDdkNTZiNTM=" target="_blank"><img className='insta-img' src={insta} alt="insta" width="100px" height="40px"></img></a><br></br>
                        <a href="#" target="_blank"><img className='linkedin-img' src={linkedln} alt="linkedin" width="100px" height="40px"></img></a><br></br>
                    </div>

                </div>
                <div className=" item">
                    <img src={shreyash} alt="" className="profile-pic" />
                        <h4 className="item-name">Shreyash Uke</h4>
                    <div className="item-info">
                        <a href="https://www.instagram.com/s_h_r_e_y_02/?next=%2F" target="_blank"><img className='insta-img' src={insta} alt="insta" width="100px" height="40px"></img></a><br></br>
                        <a href="https://in.linkedin.com/in/shreyash-uke-18950322a" target="_blank"><img className='linkedin-img'  src={linkedln} alt="linkedin" width="100px" height="40px"></img></a><br></br>
                    </div>

                </div>
                <div className=" item">
                    <img src={amey} alt="" className="profile-pic" />
                        <h4 className="item-name">Amey Ahire</h4>
                    <div className="item-info">
                        <a href="https://www.instagram.com/amey_ahire/?next=%2F" target="_blank"><img className='insta-img' src={insta} alt="insta" width="100px" height="40px"></img></a><br></br>
                        <a href="https://www.linkedin.com/in/amey-ahire-96b55325b" target="_blank"><img className='linkedin-img'  src={linkedln} alt="linkedin" width="100px" height="40px"></img></a><br></br>
                    </div>

                </div>
                <div className=" item">
                    <img src={nirmal} alt="" className="profile-pic" />
                        <h4 className="item-name">Nirmalkumar Nikam</h4>
                    <div className="item-info">
                        <a href="https://instagram.com/mr_anonymous.nn?igshid=NmQ2ZmYxZjA=" target="_blank"><img className='insta-img' src={insta} alt="insta" width="100px" height="40px"></img></a><br></br>
                        <a href="https://www.linkedin.com/in/nirmalkumar-nikam-259ab0215" target="_blank"><img className='linkedin-img' src={linkedln} alt="linkedin" width="100px" height="40px"></img></a><br></br>
                    </div>

                </div>
                <div className=" item">
                    <img src={aditya} alt="" className="profile-pic" />
                        <h4 className="item-name">Aditya Dudhmal</h4>
                    <div className="item-info">
                        <a href="https://instagram.com/aditya_dudhmal?igshid=NmQ2ZmYxZjA=" target="_blank"><img className='insta-img' src={insta} alt="insta" width="100px" height="40px"></img></a><br></br>
                        <a href="https://www.linkedin.com/in/aditya-dudhmal-967369262" target="_blank"><img className='linkedin-img' src={linkedln} alt="linkedin" width="100px" height="40px"></img></a><br></br>
                    </div>

                </div>
                
            </div>
            <Footer/>
        </>

    )
}

export default Contact