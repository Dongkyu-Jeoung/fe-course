import React from 'react';
import { Title, Description } from '../commons/Titles';
import Testimonials from './Testimonials.jsx'

export default function Testimonial({ testiJson }) {
    return (
        <section id="testimonial" className="container">
            <Title title="Testimonial" />
            <Description description="See What they say about me" />
            <Testimonials list={testiJson?.testimonials}/>
            
        </section>
    );
}

