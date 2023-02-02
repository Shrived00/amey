import React from "react";
import { useRef } from 'react';
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './../footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import mainlogo from './../images/MainLogo.png';
import profilePic from './../images/profile-pic.jpg';
import backgroundimg from './../images/Feature4.png';
import backgroundimg1 from './../images/Feature5.png';
import featuretitle from './../images/featuretitle.png';
import blackadam from './../images/black_adam.jpg';
import cuttputli from './../images/cuttputli.jfif';
import moonfall from './../images/moonfall.jpg';
import topgun from './../images/Top_gun_maverick.jpg';
import mili from './../images/Mili.jpg';
import paleblueeyes from './../images/The_Pale_Blue_Eyes.jpg';
import prey from './../images/prey.jpg';
import avatar from './../images/avatar.jpg';
import batman from './../images/batman.jpg';
import aot from './../images/aot.jpg';
import rrr from './../images/rrr.jpg';
import kantara from './../images/kantara.jpg';
import spiderman from './../images/spiderman.jpg';
import loki from './../images/loki.jpg';
//Series
import familyman from './../images/familyman.jpg';
import hotd from './../images/hotd.jpg';
import lastofus from './../images/lastofus.jpg';
import moonnight from './../images/moonknight.jpg';
import peacemaker from './../images/peacemaker.jpg';
import peaky from './../images/peaky.jpg';
import strangerthings from './../images/strangerthings.jpg';
import theboys from './../images/theboys.jpg';
//Anime
import demonslayer from './../images/DemonSlayer.jpg';
import mha from './../images/mha.jpg';
import chainsawman from './../images/chainsawman.jpg';
import er from './../images/er.jpg';
import red from './../images/red.jpg';
import tr from './../images/tr.jpg';
// function App() {
//     const ref = useRef(null);
//     const handleClick = () => {
//       ref.current?.scrollIntoView({behavior: 'smooth'});
//     };

class Home extends React.Component {

  render() {

    // let box = document.querySelector('.movie-list-container')
    // const btnpressprev = () => {
    //     let width = box.clientWidth;
    //     box.scrollLeft = box.scrollLeft - width;
    //     console.log(width)
    // }
    // const btnpressnext = () => {
    //     let width = box.clientWidth;
    //     box.scrollLeft = box.scrollLeft + width;
    //     console.log(width)
    // }

    return (
      <div>
        <Navbar />
        <>
          {/* <div className="navbar">
                        <div className="navbar-container">
                            <div className="logo-container">
                                <img src={mainlogo} alt="" className="logo" /> */}


          {/* <h1 class="logo">MovieCat</h1> */}


          {/* </div> */}
          {/* <div className="menu-container">
                                <ul className="menulist">
                                    <li className="menulist-item active"><Link to={"/"}>Home</Link></li>
                                    <li className="menulist-item"><Link to={"/about"}>About</Link></li> */}


          {/* <li className="menulist-item active">Home</li>
                                    <li className="menulist-item">About</li> */}


          {/* <li className="menulist-item">Series</li>
                                    <li className="menulist-item">Popular</li>
                                    <li className="menulist-item">Trending</li>
                                </ul>
                            </div>
                            <div className="profile-container">
                                <img
                                    src={profilePic}
                                    alt=""
                                    className="profile-picture"
                                />
                                <div className="profile-text-container">
                                    <span className="profile-text">Profile</span>
                                    <i className="fa fa-caret-down" aria-hidden="true" />
                                </div>
                                <div className="toggle">
                                    <i className="fas fa-moon toggle-icon" />
                                    <i className="fas fa-sun toggle-icon" />
                                    <div className="toggle-ball" /> */}
          {/* </div>
                            </div>
                        </div>
                    </div> */}
          {/* <div className="sidebar">
                        <i className="left-menu-icon fas fa-search" />
                        <i className="left-menu-icon fas fa-home" />
                        <i className="left-menu-icon fas fa-users" />
                        <i className="left-menu-icon fas fa-bookmark" />
                        <i className="left-menu-icon fas fa-tv" />
                        <i className="left-menu-icon fas fa-hourglass-start" />
                        <i className="left-menu-icon fas fa-shopping-cart" />
                    </div> */}
          <div className="container">
            <div className="content-container">
              <div
                className="featured-content"
                style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), #151515), url(${backgroundimg})` }}
              >
                <img className="featured-title" src={featuretitle} alt="" />
                <p className="featured-desc">
                  MoviesCat is a free entertainment service that allows members to know everything about their favourite TV shows and movies on an internet-connected device. We ensure you a secure browsing experience!
                </p>
                {/* <button 
                                // onClick={handleClick} 
                                className="featured-button">Explore</button> */}
              </div>
              <div className="movie-list-container">
                <h1 className="movie-list-title">NEW RELEASES</h1>
                <div className="movie-list-wrapper">
                  <div className="movie-list">
                    <div className="movie-list-item">
                      <img src={blackadam} alt="img" className="movie-list-item-img" />
                      <span className="movie-list-item-title">Black Adam</span>
                      <p className="movie-list-item-desc">
                        Black Adam is a 2022 American superhero film starring
                        Dwayne Johnson as the titular DC Comics character
                      </p>
                      <Link to={"/featuremovie"}><button className="movie-list-item-button">
                        Explore
                      </button></Link>
                    </div>
                    <div className="movie-list-item">
                      <img src={cuttputli} alt="img" className="movie-list-item-img" />
                      <span className="movie-list-item-title">CUTTPUTLI</span>
                      <p className="movie-list-item-desc">
                        Cuttputlli (Puppet) is a 2022 Indian
                        Hindi-language psychological crime thriller film
                        directed by Ranjit M. Tewari
                      </p>
                      <button className="movie-list-item-button">
                        Explore
                      </button>
                    </div>

                    <div className="movie-list-item">
                      <img src={moonfall} alt="img" className="movie-list-item-img"/>
                      <span className="movie-list-item-title">MOONFALL</span>
                      <p className="movie-list-item-desc">
                        Moonfall is a 2022 science fiction disaster film
                        co-written, directed, and produced by Roland Emmerich
                      </p>
                      <button className="movie-list-item-button">
                        Explore
                      </button>
                    </div>

                    <div className="movie-list-item">
                      <img
                        src={topgun}
                        alt="img"
                        className="movie-list-item-img"
                      />
                      <span className="movie-list-item-title">TOPGUN</span>
                      <p className="movie-list-item-desc">
                        Top Gun is a 1986 American action drama film directed
                        by Tony Scott, produced by Don Simpson and Jerry
                        Bruckheimer
                      </p>
                      <button className="movie-list-item-button">
                        Explore
                      </button>
                    </div>

                    <div className="movie-list-item">
                      <img
                        src={mili}
                        alt="img"
                        className="movie-list-item-img"
                      />
                      <span className="movie-list-item-title">MILI</span>
                      <p className="movie-list-item-desc">
                        Mili is a 2022 Indian Hindi-language survival thriller
                        film directed by Mathukutty Xavier
                      </p>
                      <button className="movie-list-item-button">
                        Explore
                      </button>
                    </div>

                    <div className="movie-list-item">
                      <img
                        src={paleblueeyes}
                        alt="img"
                        className="movie-list-item-img"
                      />
                      <span className="movie-list-item-title">
                        PALE BLUE EYES
                      </span>
                      <p className="movie-list-item-desc">
                        The Pale Blue Eye is a 2022 American mystery thriller
                        film written and directed by Scott Cooper
                      </p>
                      <button className="movie-list-item-button">
                        Explore
                      </button>
                    </div>

                    <div className="movie-list-item">
                      <img
                        src={prey}
                        alt="img"
                        className="movie-list-item-img"
                      />
                      <span className="movie-list-item-title">PREY</span>
                      <p className="movie-list-item-desc">
                        Prey is a 2022 American science fiction action film in
                        the Predator franchise
                      </p>
                      <button className="movie-list-item-button">
                        Explore
                      </button>
                    </div>

                  </div>
                  {/* <i className="fas fa-chevron-right arrow" /> */}
                  <FontAwesomeIcon icon="chevron-right" />

                  {/* <div className="product-carousel">
                                        <button className="pre-btn"onClick={btnpressprev}><p>&lt;</p></button>
                                        <button className="next-btn"onClick={btnpressnext}><p>&gt;</p></button>
                                    </div> */}
                </div>
              </div>


              <div className="movie-list-container">
                <h1 className="movie-list-title">POPULAR</h1>
                <div className="movie-list-wrapper">
                  <div className="movie-list">

                    <div className="movie-list-item">
                      <img
                        src={avatar}
                        alt="img"
                        className="movie-list-item-img"
                      />
                      <span className="movie-list-item-title">AVATAR 2</span>
                      <p className="movie-list-item-desc">
                        Avatar: The Way of Water is a 2022 American epic science
                        fiction film directed and produced by James Cameron
                      </p>
                      <button className="movie-list-item-button">
                        Explore
                      </button>
                    </div>

                    <div className="movie-list-item">
                      <img
                        src={rrr}
                        alt="img"
                        className="movie-list-item-img"
                      />
                      <span className="movie-list-item-title">RRR</span>
                      <p className="movie-list-item-desc">
                        RRR is a 2022 Indian Telugu-language epic action
                        drama film directed by S. S. Rajamouli
                      </p>
                      <button className="movie-list-item-button">
                        Explore
                      </button>
                    </div>

                    <div className="movie-list-item">
                      <img
                        src={batman}
                        alt="img"
                        className="movie-list-item-img"
                      />
                      <span className="movie-list-item-title">BATMAN</span>
                      <p className="movie-list-item-desc">
                        The Batman is a superhero appearing in American comic
                        books published by DC Comics.
                      </p>
                      <button className="movie-list-item-button">
                        Explore
                      </button>
                    </div>

                    <div className="movie-list-item">
                      <img
                        src={kantara}
                        alt="img"
                        className="movie-list-item-img"
                      />
                      <span className="movie-list-item-title">KANTARA</span>
                      <p className="movie-list-item-desc">
                        Kantara (Mystical Forest) is a 2022 Indian
                        Kannada-language action thriller film written
                        and directed by Rishab Shetty
                      </p>
                      <button className="movie-list-item-button">
                        Explore
                      </button>
                    </div>

                    <div className="movie-list-item">
                      <img
                        src={loki}
                        alt="img"
                        className="movie-list-item-img"
                      />
                      <span className="movie-list-item-title">LOKI</span>
                      <p className="movie-list-item-desc">
                        Loki is an American television series created by Michael
                        Waldron for the streaming service Disney+
                      </p>
                      <button className="movie-list-item-button">
                        Explore
                      </button>
                    </div>

                    <div className="movie-list-item">
                      <img
                        src={aot}
                        alt="img"
                        className="movie-list-item-img"
                      />
                      <span className="movie-list-item-title">
                        ATTACK ON TITAN
                      </span>
                      <p className="movie-list-item-desc">
                        Attack on Titan is a Japanese dark fantasy anime
                        television series
                      </p>
                      <button className="movie-list-item-button">
                        Explore
                      </button>
                    </div>

                    <div className="movie-list-item">
                      <img
                        src={spiderman}
                        alt="img"
                        className="movie-list-item-img"
                      />
                      <span className="movie-list-item-title">SPIDERMAN</span>
                      <p className="movie-list-item-desc">
                        Spider-Man is a superhero appearing in American comic
                        books published by Marvel Comics
                      </p>
                      <button className="movie-list-item-button">
                        Explore
                      </button>
                    </div>

                  </div>
                  {/* <i className="fas fa-chevron-right arrow" /> */}
                  <FontAwesomeIcon icon="chevron-right" />
                </div>
              </div>

              <div
                className="featured-content"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), #151515), url(${backgroundimg1})`,
                }}
              >
                <p className="featured-desc1">
                  Fact of the day - The TITANIC Movie was 17.7 reels long when
                  released.
                </p>
              </div>

              <div className="movie-list-container">
                <h1 className="movie-list-title">WEB-SERIES</h1>
                <div className="movie-list-wrapper">
                  <div className="movie-list">

                    <div className="movie-list-item">
                      <img
                        src={familyman}
                        alt="img"
                        className="movie-list-item-img"
                      />
                      <span className="movie-list-item-title">FAMILY MAN</span>
                      <p className="movie-list-item-desc">
                        The Family Man is an Indian spy thriller streaming television series created by Raj NIdimoru and Krishna D.K
                      </p>
                      <button className="movie-list-item-button">Explore</button>
                    </div>

                    <div className="movie-list-item">
                      <img
                        src={hotd}
                        alt="img"
                        className="movie-list-item-img"
                      />
                      <span className="movie-list-item-title">House of Dragon</span>
                      <p className="movie-list-item-desc">
                        After death of their father, two siblings fight for the throne, thereby causing a civil war known as dance of dragon
                      </p>
                      <button className="movie-list-item-button">Explore</button>
                    </div>

                    <div className="movie-list-item">
                      <img
                        src={lastofus}
                        alt="img"
                        className="movie-list-item-img"
                      />
                      <span className="movie-list-item-title">THE LAST OF US</span>
                      <p className="movie-list-item-desc">
                        Tasked with escorting teenager across a post-apocalyptic world, a dreaded smuggler joins with a young apprentice to fulfill the mission
                      </p>
                      <button className="movie-list-item-button">Explore</button>
                    </div>

                    <div className="movie-list-item">
                      <img
                        src={moonnight}
                        alt="img"
                        className="movie-list-item-img"
                      />
                      <span className="movie-list-item-title">MOON KNIGHT</span>
                      <p className="movie-list-item-desc">
                        Steven Grant and mercenary Marc Spector investigate the mysteries of the Egyptian gods from inside the same body
                      </p>
                      <button className="movie-list-item-button">Explore</button>
                    </div>

                    <div className="movie-list-item">
                      <img
                        src={peacemaker}
                        alt="img"
                        className="movie-list-item-img"
                      />
                      <span className="movie-list-item-title">PEACEMAKER</span>
                      <p className="movie-list-item-desc">
                        Peacemaker is a man who fights for peace at any cost, no matter how many people he has to kill to get it
                      </p>
                      <button className="movie-list-item-button">Explore</button>
                    </div>

                    <div className="movie-list-item">
                      <img
                        src={peaky}
                        alt="img"
                        className="movie-list-item-img"
                      />
                      <span className="movie-list-item-title">PEACKYBLINDERS</span>
                      <p className="movie-list-item-desc">
                        Tommy Shelby leads the Peacky Blinders. Soon, Chester Campbell, an inspector, decides to nab him and put an end to the criminal activities
                      </p>
                      <button className="movie-list-item-button">Explore</button>
                    </div>

                    <div className="movie-list-item">
                      <img
                        src={strangerthings}
                        alt="img"
                        className="movie-list-item-img"
                      />
                      <span className="movie-list-item-title">STRANGERTHING</span>
                      <p className="movie-list-item-desc">
                        A group of younge friends find supernatural forces, secret gov. exploits. In search of answers, children unravel  mysteries
                      </p>
                      <button className="movie-list-item-button">Explore</button>
                    </div>

                    <div className="movie-list-item">
                      <img
                        src={theboys}
                        alt="img"
                        className="movie-list-item-img"
                      />
                      <span className="movie-list-item-title">THE BOYS</span>
                      <p className="movie-list-item-desc">
                        The Boys is an American superhero TV series developed by Eric Kripke.The name is taken from comic named 'The Boys'
                      </p>
                      <button className="movie-list-item-button">Explore</button>
                    </div>

                  </div>
                  {/* <i className="fas fa-chevron-right arrow" /> */}
                  <FontAwesomeIcon icon="chevron-right" />
                </div>
              </div>

              <div className="movie-list-container">
                <h1 className="movie-list-title">ANIME</h1>
                <div className="movie-list-wrapper">
                  <div className="movie-list">

                    <div className="movie-list-item">
                      <img
                        src={demonslayer}
                        alt="img"
                        className="movie-list-item-img"
                      />
                      <span className="movie-list-item-title">DEMON SLAYER</span>
                      <p className="movie-list-item-desc">
                        It's a Japanese manga series written and illustrated by Koyoharu Gotouge
                      </p>
                      <button className="movie-list-item-button">Explore</button>
                    </div>

                    <div className="movie-list-item">
                      <img
                        src={mha}
                        alt="img"
                        className="movie-list-item-img"
                      />
                      <span className="movie-list-item-title">HERO ACDEMIA</span>
                      <p className="movie-list-item-desc">
                        A superhero-loving boy without any powers is determined to enroll in a prestigious hero academy and learn whot it really means to ne a hero.
                      </p>
                      <button className="movie-list-item-button">Explore</button>
                    </div>

                    <div className="movie-list-item">
                      <img
                        src={chainsawman}
                        alt="img"
                        className="movie-list-item-img"
                      />
                      <span className="movie-list-item-title">CHAINSAWMAN</span>
                      <p className="movie-list-item-desc">
                        Following a betrayal, a young man left for the dead is reborn as a powerful devil-human hybrid after merging with his pet devil
                      </p>
                      <button className="movie-list-item-button">Explore</button>
                    </div>

                    <div className="movie-list-item">
                      <img src={er} alt="img" className="movie-list-item-img" />
                      <span className="movie-list-item-title">CYBERPUNK</span>
                      <p className="movie-list-item-desc">
                        Cyberpunk is a subgenre of science fiction in a dystopian futuristic settng that tends to focus on "combination of low low life and high tech"
                      </p>
                      <button className="movie-list-item-button">Explore</button>
                    </div>

                    <div className="movie-list-item">
                      <img
                        src={red}
                        alt="img"
                        className="movie-list-item-img"
                      />
                      <span className="movie-list-item-title">RED</span>
                      <p className="movie-list-item-desc">
                        Red is Japanese animated musical fantacy acton-adventure film directed and produced by Toei Animation.
                      </p>
                      <button className="movie-list-item-button">Explore</button>
                    </div>

                    <div className="movie-list-item">
                      <img src={tr} alt="img" className="movie-list-item-img" />
                      <span className="movie-list-item-title">TOKYOREVENGER</span>
                      <p className="movie-list-item-desc">
                        It's a Japanese manga series written and illustrated by Ken Wakui. The film is suspence shonen-manga genre
                      </p>
                      <button className="movie-list-item-button">Explore</button>
                    </div>
                  </div>
                  {/* <i className="fas fa-chevron-right arrow" /> */}
                  <FontAwesomeIcon icon="chevron-right" />
                </div>
              </div>
            </div>
          </div>
        </>
        <Footer />
      </div>

    );

  }
}
export default Home;