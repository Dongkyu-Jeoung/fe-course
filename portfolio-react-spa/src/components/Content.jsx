import Home from "./content/Home.jsx"
import Skills from "../pages/Skills.jsx"
import About from "../pages/About.jsx"
import Work from "../pages/Work.jsx"
import Testimonial from "../pages/Testimonial.jsx"
import ArrowTop from "./content/ArrowTop.jsx"

export default function Content ({ jsonContent }) {
    
    return (
        <>
            <Home homeJson={jsonContent?.home}/>
            <About aboutJson={jsonContent?.about}/>
            <Skills skillsJson={jsonContent?.skills}/>
            <Work workJson={jsonContent?.work}/>
            <Testimonial testiJson={jsonContent?.testimonial}/>
            <ArrowTop />
        </>
    )
}