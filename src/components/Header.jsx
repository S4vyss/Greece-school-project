import { useState } from 'react'
import '../style/header.css'

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
        <a href='#' className='naglowek'><button>GRECJA</button></a>
        <nav>
            <ul className='podStrony'>
                <li>
                    <a href="#">
                        Przycisk 1
                    </a>
                </li>
                <li>
                    <a href="#">
                        Przycisk 2
                    </a>
                </li>
                <li>
                    <a href="#">
                        Przycisk 3
                    </a>
                </li>
                <li>
                    <a href="#">
                        Przycisk 4
                    </a>
                </li>
                <li>
                    <a href="#">
                        Przycisk 5
                    </a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
