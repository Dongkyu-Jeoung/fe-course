import Home from "./content/Home.jsx"
import Skills from "./content/Skills.jsx"
import About from "./content/About.jsx"


export default function Content ({jsonContent}) {
    return (
        <>
            <Home homeJson={jsonContent?.home}/>
            <About aboutJson={jsonContent?.about}/>
            <Skills skillsJson={jsonContent?.skills}/>
        </>
    )
}