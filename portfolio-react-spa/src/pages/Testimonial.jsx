import React from 'react';
import { Title, Description } from '../components/commons/Titles.jsx';
import Testimonials from '../components/content/Testimonials.jsx'
import { useOutletContext } from 'react-router-dom';

export default function Testimonial() {
    const testiJson = useOutletContext()?.testimonial;
    return (
        <section id="testimonial" className="container">
            <Title title="Testimonial" />
            <Description description="See What they say about me" />
            <Testimonials list={testiJson?.testimonials}/>
            
        </section>
    );
}

