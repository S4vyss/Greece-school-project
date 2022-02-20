import '../style/footer.css'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
          <h3>Grecja</h3>
          <p>Strona stworzona przez Wilqa z klasy 1pa za pomocą React.js</p>
          <ul className="socials">
                <li>
                    <a href="https://github.com/S4vyss" target="_blank"><FaGithub size="2.5em"/></a>
                </li>
          </ul>
      </div>
      <div className="footer-bottom">
          <p>Copyright &copy; Wilqu 1pa</p>
      </div>
    </footer>
  )
}

export default Footer
