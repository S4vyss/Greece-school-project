import '../style/header.css'

const Header = () => {
  return (
    <header>
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
