import React from 'react';
import Major from './Major.jsx';

export default function Majors({list, style}) {

    return (
        <ul className={style}>
            {list?.map ((major, idx) => <Major key={idx} major={major}/>)}
        </ul>
    );
}

