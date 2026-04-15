import { Title, SubTitle, TitleDescription } from "../commons/Titles.jsx"
import SkillsContent from "./SkillsContent.jsx"


export default function Skills ({skillsJson}) {
    const description = skillsJson?.description;

    return (
        <section id="skills" className="container">
            <Title title="My Skills" />
            <SubTitle subTitle="Skills & Attributes" />
            <TitleDescription TitleDescription={description} />
            <SkillsContent skillsJson={skillsJson}/>
            
        </section>
    )
}