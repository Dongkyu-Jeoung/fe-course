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
                                <Menu href="#" name={item.name} style="testimonial_text_name"/>
                            </p>
                        </div>
                    </li>
                )
            }
        </ul>
    );
}

