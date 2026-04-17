import React from 'react';
import AvatarImage from '../components/commons/AvatarImage.jsx';
import HomeTitle from '../components/content/HomeTitle.jsx';
import Menu from '../components/commons/Menu.jsx';
import { useOutletContext } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Home() {
    const homeJson = useOutletContext()?.data?.home;
    const like = useSelector((state) => state.like.count);
    const projectList = useSelector((state) => state.like.list);
    return (
        <section id="home" className="container">
            <AvatarImage img={homeJson?.img} 
                        alt="home avatar" 
                        style="home_avatar" />
            <HomeTitle homeJson={homeJson}/>
            
            <p className="home_description">{homeJson?.description}</p>
            <Menu href="#" style="home_contact" name="Contact Me"/>
            <h2>❤ 좋아요 [{like}]</h2>
            <p>{projectList}</p>
        </section>
    );
}

