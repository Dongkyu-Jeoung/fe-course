import React from 'react';
import { Title, SubTitle } from "../commons/Titles.jsx"
import Categories from './Categories.jsx';
import Projects from './Projects.jsx';

export default function Work({ workJson }) {
    return (
        <section id="work" className="container">
            <Title title="My Work"/>
            <SubTitle subTitle="Projects" />
            <Categories list={workJson?.categories}/>
            <Projects list={workJson?.projects}/>
        </section>
    );
}

