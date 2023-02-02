import React from "react";
import backgroundimg from './../images/Feature5.png';
// import featuretitle from './../images/featuretitle.png';
import blackadam from './../images/black_adam.jpg';
import blackadambg from './../images/black_adam_bg.jpg';
import trailer from "./../images/batrailer.jpg";
import Navbar from "./Navbar";
import Footer from './../footer';


function Feature() {
    return (
    <div>
        <Navbar/>
         <div
            className="featured-movie-content"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), #151515), url(${blackadambg}) `
                
            }}
            >
            <img className="featured-movie-poster" src={blackadam} alt="" />


                <div className="movie-title"><h1>BLACK ADAM</h1></div>
            <div className="featured-movie-desc">
                <h3>Action/Adventure-2h 4min</h3>
                <p>
                    Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods--and imprisoned just as quickly--Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world. <br />
                Release Date- October 21,2022
                </p>
            </div>

            <div className="cast-container">
                <ul><div className="cast-title"><a>Top Cast</a></div>
                    <li>Dwayne Johnson - Black Adam</li>
                    <li>Aldis Hodge - Hawkman</li>
                    <li>Pierce Brosnan - Dr.Fate</li>
                    <li>Noah Centineo - Atom Smasher</li>
                    <li>Sarah Shahi - Adrianna Tomaz</li>
                    </ul>
                </div>
            
                <div className="trailer-title"><a>Watch-trailer</a></div>
            <div className="trailer">
            <a href="https://youtu.be/mkomfZHG5q4" target="_blank"><img src={trailer} alt="watch trailer" /></a>
            </div>
            
            <div className="imdb">
            <a href="https://www.imdb.com/title/tt6443346/" target="_blank"><button className="featured-movie-button">IMDB </button></a>
            <a href="/" ><button className="featured-movie-button">Back to Home</button></a>
            </div>
            
            </div>
            <Footer/>
    </div>

    )
}
export default Feature