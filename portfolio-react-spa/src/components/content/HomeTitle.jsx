import React from 'react';
import { HomeMainTitle } from '../commons/Titles.jsx';

export default function HomeTitle({homeJson}) {
    return (
        <HomeMainTitle style="home_title">
            Hello<br/>
            I'm <strong className="home_title_strong">{homeJson?.title}</strong>, {homeJson?.name}
        </HomeMainTitle>
        // <h2 className="home_title">
        //     Hello<br/>
        //     I'm <strong className="home_title_strong">Dream Coder</strong>, Judy
        // </h2>
    );
}

