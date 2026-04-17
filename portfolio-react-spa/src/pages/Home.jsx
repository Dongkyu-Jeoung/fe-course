import React from 'react';
import AvatarImage from '../components/commons/AvatarImage.jsx';
import HomeTitle from '../components/content/HomeTitle.jsx';
import Menu from '../components/commons/Menu.jsx';
import { useOutletContext } from 'react-router-dom';

export default function Home() {
    const homeJson = useOutletContext()?.data?.home;
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

