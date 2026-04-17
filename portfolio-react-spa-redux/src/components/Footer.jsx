import { Description, Title } from "./commons/Titles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


export default function Footer ({ jsonFooter }) {
    const list = jsonFooter?.contacts;
    
    return (
        <footer id="contact" className="footer">
            <Title title={jsonFooter?.title}/>
            <Description description={jsonFooter?.description}/>

            <ul className="contact_links">
                {
                    list?.map( (item, idx) =>
                        <li key={idx}>
                            <a href={item.href} className="contact_link">
                                <FontAwesomeIcon icon={item.icon === "faGithub" ? faGithub : faLinkedinIn} />
                            </a>
                        </li>
                    )
                }
            </ul>
            <p>{jsonFooter?.rights}</p>
        </footer>
    )
}