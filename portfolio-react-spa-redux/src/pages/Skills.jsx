import { Title, SubTitle, TitleDescription } from "../components/commons/Titles.jsx"
import SkillsContent from "../components/content/SkillsContent.jsx"
import { useOutletContext } from "react-router-dom";


export default function Skills () {
    const skillsJson = useOutletContext()?.data?.skills

    return (
        <section id="skills" className="container">
            <Title title="My Skills" />
            <SubTitle subTitle="Skills & Attributes" />
            <TitleDescription TitleDescription={skillsJson?.description} />
            <SkillsContent skillsJson={skillsJson}/>
            
        </section>
    )
}