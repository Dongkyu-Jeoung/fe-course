import React from 'react';
import Majors from '../components/content/Majors.jsx';
import Jobs from '../components/content/Jobs.jsx';
import { Title } from '../components/commons/Titles.jsx';
import { useOutletContext } from 'react-router-dom';

export default function About() {
    const aboutJson = useOutletContext()?.about;
    return (
        <section id="about" className="container">
            <Title title="About Me" />
            <p className="description">{aboutJson?.description}</p>
            <Majors style="majors" list={aboutJson?.majors}/>
            <Jobs style="jobs" list={aboutJson?.jobs}/>
        </section>
    );
}

