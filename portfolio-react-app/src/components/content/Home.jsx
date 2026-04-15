import React from 'react';
import AvatarImage from '../commons/AvatarImage';
import HomeTitle from './HomeTitle.jsx';
import Menu from '../commons/Menu.jsx';

export default function Home({ homeJson }) {
    return (
        <section id="home" className="container">
            <AvatarImage img={homeJson?.img} 
                        alt="home avatar" 
                        style="home_avatar" />
            <HomeTitle homeJson={homeJson}/>
            
            <p className="home_description">{homeJson?.description}</p>
            <Menu href="#" style="home_contact" name="Contact Me"/>
        </section>
    );
}

