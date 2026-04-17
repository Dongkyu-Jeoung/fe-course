import React from 'react';
import AvatarImage from '../commons/AvatarImage';
import Menu from '../commons/Menu.jsx';
import { TitleDescription } from '../commons/Titles.jsx';

export default function Testimonials({ list }) {
    
    return (
        <ul className="testimonials">
            {
                list?.map ((item, idx) =>
                    <li className="testimonial" key={idx}>
                        <AvatarImage img={item.img} alt={item.alt} style="testimonial_img" />
                        <div className="testimonial_text">
                            <TitleDescription TitleDescription={item.text} />
                            <p>
                                <a href="#" className="testimonial_text_name">{item.name}</a>
                            </p>
                        </div>
                    </li>
                )
            }
        </ul>
    );
}

