import React from 'react';
import AvatarImage from '../commons/AvatarImage';

export default function Job({job}) {
    return (
        <li className="job">
            <AvatarImage img={job?.img} alt={job?.alt}/>
            <div>
                <p className="job_name">{job?.name}</p>
                <p className="job_period">{job?.period}</p>
            </div>
        </li>
    );
}

