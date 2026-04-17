import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHtml5 } from "@fortawesome/free-brands-svg-icons"
import { faMobile, faServer} from "@fortawesome/free-solid-svg-icons"

export default function Major({major}) {

    return (
        <li className="major">
            { major.icon=='html' && <FontAwesomeIcon icon={faHtml5} className='major_icon'/>}
            { major.icon=='mobile' && <FontAwesomeIcon icon={faMobile} className='major_icon'/>}
            { major.icon=='server' && <FontAwesomeIcon icon={faServer} className='major_icon'/>}
            <p className="major_title">{major.title}</p>
            <p className="description_small">{major.subjects}</p>
        </li>
    );
}

