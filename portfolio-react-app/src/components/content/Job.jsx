import React from 'react';
import AvatarImage from '../commons/AvatarImage';

export default function Job({job}) {
    return (
        <li class="job">
            <AvatarImage img={job?.img} alt={job?.alt}/>
            <div>
                <p class="job_name">{job?.name}</p>
                <p class="job_period">{job?.period}</p>
            </div>
        </li>
    );
}

