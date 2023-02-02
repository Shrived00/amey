import React from 'react'
import Navbar from './Navbar'
import Footer from './../footer';


function About() {
  return (
    <div>
        <Navbar/>
    
        <div className="about-container">
            <div className="about-info">
                <p className="about-info-para">
                    Welcome to Our first ever project in coding world! Yeah, its our first group project other than college submission in any type of computer working. This journey starts with <b>CoC Inheritance</b> competition anouncement. It required team to participate 4-5 people and thus we created our team and decided to register for the <b>Big Event</b>. If you do not feel any confusion by seeing such words then Hey Bro <b>WE ARE FROM VJTI.</b> 
                </p><br></br>
                <p>
                    Journey started with interview sessions where each team had to explain its idea to interviewer. As being beginners, we all thought we can't servive in such high competition zone but <b>Whole Universe Conspires When You Really Aspire Something</b> and we got selected. Next stage was learning stage where we learnt many things like <i><b> HTML-CSS-JS-MongoDb-API-REACTJS-PUG </b></i> and what not!
                </p><br></br>
                <p>
                    Our goal never was to win the competition (yes, game is by default win or loss) but we tried to make best out this event and I think we have!
                    Special Thanks to our Mentors <b>CHAITYA VORA</b> and <b>HARSHIL SHAH</b> who guided us throughout the journey.
                </p><br></br>
                <p>Pardon if any typo error!</p>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default About