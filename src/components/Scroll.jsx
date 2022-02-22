import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import '../style/scroll.css'

// TODO: dokończ scrolla 

const Scroll = () => {

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollUp = () => {
      window.scrollTo({
          top:0,
          behavior: "smooth",
      });
  };

  useEffect(() => {
      window.addEventListener("scroll", toggleVisibility);

      return () => {
          window.removeEventListener("scroll", toggleVisibility);
      }
  }, []);

  return (
    <div className="div-button">
      <button type='button' onClick={scrollUp} className={ isVisible ? "btn" : "not-visible"}><FaArrowUp style={{ width: "20px", height: "20px"}} /></button>
    </div>
  )
}

export default Scroll
