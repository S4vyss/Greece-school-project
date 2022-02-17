import { useState } from 'react'
import '../style/header.css'
import { Link } from 'react-router-dom'

const Header = () => {

    const [navbar, setNavbar] = useState(false);

    // Changing header background color on scroll 
    const changeBackground = () => {
        if (window.scrollY >= 115) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener("scroll", changeBackground);

  return (
    <header className={navbar ? 'navbar active' : 'navbar'}>
        <Link to="/" className='naglowek'><button>GRECJA</button></Link>
        <nav>
            <ul className='podStrony'>
                <li>
                    <Link to="/wykres">
                        Wykres
                    </Link>
                </li>
                <li>
                    <Link to="/telefon">
                        Telefon
                    </Link>
                </li>
                <li>
                    <Link to="/miejsca">
                        Miejsca
                    </Link>
                </li>
                <li>
                    <Link to="/zdjecia">
                        Zdjecia
                    </Link>
                </li>
                <li>
                    <Link to="/bibliografia">
                        Bibliografia
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
