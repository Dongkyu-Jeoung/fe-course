import React from 'react';
import Article from './Article.jsx';
import SkillsTitle from './SkillsTitle.jsx';
import SkillsCoding from './SkillsCoding.jsx';
import SkillsTools from './SkillsTools.jsx';

export default function SkillsContent({skillsJson}) {
    const tools = skillsJson?.tools;
    const etc = skillsJson?.etc;
    const coding = skillsJson?.coding;

    return (
        <div className="skills">
            <Article style="skills_coding">
                <SkillsTitle title="Coding Skills" />
                <SkillsCoding list={coding}/>
            </Article>

            <Article style="skills_tools">
                <SkillsTitle title="Tools"/>
                <SkillsTools list={tools}/>
            </Article>
            
            <Article style="skills_etc">
                <SkillsTitle title="Etc"/>
                <SkillsTools list={etc}/>
            </Article>

        </div>
    );
}

