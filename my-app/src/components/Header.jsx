import './Header.css'
import fav from '../assets/images/img01.jpg'


export default function Header () {
    return (
        <header className='header'>
            <h1>Header</h1>
            <div className='imgwrap'>
                <img src={fav} alt="img1" width='100px'/>
            </div>
        </header>
    )
}