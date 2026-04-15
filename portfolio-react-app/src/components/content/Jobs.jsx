import React from 'react';
import Job from './Job.jsx';

export default function Jobs({style, list}) {
    return (
        <ul className={style}>
            {
                list?.map ( (job, idx) => 
                    <Job key={idx} job={job}/>
                )
            }
        </ul>
    );
}

