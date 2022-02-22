import '../style/stylePages/zdjecia.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect, } from 'react'

const images = {
  "image1": "https://www.visitgreece.gr/images/750x440/1/jpg/files/merakos_01_halkidiki-arnaia_750x440.jpg",
  "image2": "https://www.visitgreece.gr/images/750x440/1/jpg/files/s_1273536235_drama_1310x769.jpg",
  "image3": "https://www.visitgreece.gr/images/750x440/2/jpg/files/s_1634138464_grevena-azizagabridge_1310x769.jpg",
  "image4": "https://www.visitgreece.gr/images/750x440/1/jpg/files/merakos_02_kastoria_1310x769.jpg",
  "image5": "https://www.visitgreece.gr/images/750x440/1/jpg/files/s_402289702_litochoro_1310x769.jpg",
  "image6": "https://www.visitgreece.gr/images/750x440/1/jpg/files/s_655551238_serres_1310x769.jpg"
}

const Zdjecia = () => {
  return (
    <div>
      <section>
        <div className="naglowek">
          <h1>Zdjęcia</h1>
        </div>
        <Zdjecie name="Halkidiki" image={images.image1} />
        <Zdjecie name="Drama" image={images.image2} />
        <Zdjecie name="Grevena" image={images.image3} />
        <Zdjecie name="Kastoria" image={images.image4} />
        <Zdjecie name="Litochoro" image={images.image5} />
        <Zdjecie name="Serres" image={images.image6} />
      </section>
    </div>
  )
}

const Zdjecie = (props) => {

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <article className="zdjecia">
      <div data-aos="fade-up" className="containerZdjecia">
          <div className="titleZdjecie">
            <h2>{props.name}</h2>
          </div>
          <div className="image">
            <a href="https://www.visitgreece.gr/mainland/macedonia/" target="_blank"><img src={props.image} alt="" /></a>
          </div>
      </div>
    </article>
  )
}

export default Zdjecia
