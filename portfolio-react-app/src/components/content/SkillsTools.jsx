import React from 'react';

export default function SkillsTools({list}) {
    
    return (
        <ul>
            {list?.map ((tool, idx) => 
                <li key={idx}>{tool}</li>)
            }
        </ul>
    );
}

