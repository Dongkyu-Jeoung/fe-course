import React from 'react';
import { Title, SubTitle } from "../components/commons/Titles.jsx"
import Categories from '../components/content/Categories.jsx';
import Projects from '../components/content/Projects.jsx';
import { useOutletContext } from 'react-router-dom';

export default function Work() {
    const workJson = useOutletContext()?.data?.work;
    return (
        <section id="work" className="container">
            <Title title="My Work"/>
            <SubTitle subTitle="Projects" />
            <Categories list={workJson?.categories}/>
            <Projects list={workJson?.projects}/>
        </section>
    );
}

