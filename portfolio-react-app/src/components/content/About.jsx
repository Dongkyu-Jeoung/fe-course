import React from 'react';
import Majors from './Majors.jsx';
import Jobs from './Jobs.jsx';
import { Title } from '../commons/Titles.jsx';

export default function About({aboutJson}) {
    return (
        <section id="about" class="container">
            <Title title="About Me" />
            <p class="description">{aboutJson?.description}</p>
            <Majors style="majors" list={aboutJson?.majors}/>
            <Jobs style="jobs" list={aboutJson?.jobs}/>
        </section>
    );
}

