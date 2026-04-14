import Logo from "./header/Logo.jsx"
import MenuList from "./commons/MenuList.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header ({jsonHeader}) {
    // const list = [
    //     { "href" : "#home", "style" : "header_menu_item active", "name" : "Home"},
    //     { "href" : "#about", "style" : "header_menu_item", "name" : "About"},
    //     { "href" : "#skills", "style" : "header_menu_item", "name" : "Skills"},
    //     { "href" : "#work", "style" : "header_menu_item", "name" : "My Work"},
    //     { "href" : "#testimonial", "style" : "header_menu_item", "name" : "Testimonial"},
    //     { "href" : "#contact", "style" : "header_menu_item", "name" : "Contact"},
    // ]

    return (
        <header className="header">
            <Logo img="/images/favicon.ico" alt="header logo" style="header_logo_img" title="Judy"/>
            <MenuList menus={jsonHeader?.menus} style="header_menu"/>
            <button className="header_toggle">
                <FontAwesomeIcon icon={faBars} />
            </button>
        </header>
    )
}