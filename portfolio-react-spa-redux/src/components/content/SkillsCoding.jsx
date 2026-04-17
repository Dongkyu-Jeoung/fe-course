import React from 'react';
import { useDispatch } from 'react-redux';
import { click } from '../../features/skillsSlice.js';

export default function SkillsCoding({list}) {
    const dispatch = useDispatch();
    
    return (
        <ul>
            {list?.map ((skill, idx) => 
                <li className="bar" key={idx}>
                    <div className="bar_title">
                        <span onClick={()=> {dispatch(click(skill.title))}}>{skill.title}</span>
                        <span>{skill.value}</span>
                    </div>
                    <div className="bar_bg">
                        <div className="bar_value" style={{width : skill.width}}></div>
                    </div>
                </li>
            )}
        </ul>
    );
}

