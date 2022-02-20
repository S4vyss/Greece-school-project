import '../style/stylePages/miejsca.css'
import { FaSearchLocation } from 'react-icons/fa'

//Setup img vars
const images = {
  "image1": "https://www.visitgreece.gr/images/723x723/1/jpg/files/bozouris_11_florina_769x769.webp",
  "image2": "https://www.visitgreece.gr/images/347x347/2/jpg/files/s_647784889_metsovo_769x769.webp",
  "image3": "https://www.visitgreece.gr/images/347x347/1/jpg/files/skoulas_7747_athens-monastiraki_769x769.webp",
  "image4": "https://www.visitgreece.gr/images/347x347/jpg/files/merakos_01_kavala-imaret_769x769.webp",
  "image5": "https://www.visitgreece.gr/images/347x347/1/jpg/files/merakos_02_xanthi-paliapoli_769x769.webp",
  "image6": "https://www.visitgreece.gr/images/347x347/1/jpg/files/merakos_01_zagori-mikropapigo_769x769.webp",
  "image7": "https://www.visitgreece.gr/images/347x347/1/jpg/files/s_1018954780_karpenisiwinter_769x769.webp",
  "image8": "https://www.visitgreece.gr/images/347x347/1/jpg/files/s_703765747_dimitsana_769x769.webp",
  "image9": "https://www.visitgreece.gr/images/347x347/1/jpg/files/kalaitzian_215_florina-nymfaio_769x769.webp"
}

const hrefs = {
  "href1": "https://goo.gl/maps/1se8UzFLFcorfXr3A",
  "href2": "https://goo.gl/maps/1f8ykahzJG8DkWyt5",
  "href3": "https://goo.gl/maps/ubpsvanY3ycfC3UN9",
  "href4": "https://goo.gl/maps/TLcfbHhWUsREWCxDA",
  "href5": "https://goo.gl/maps/87pqp5YcqWixbU5H9",
  "href6": "https://goo.gl/maps/FvFZFXk3PHBytaNd9",
  "href7": "https://goo.gl/maps/vGcZQ34PRXG5Q2CT7",
  "href8": "https://goo.gl/maps/bKcyALEaoLbLdYZKA",
  "href9": "https://goo.gl/maps/ZTcw4RzzjTpMtJi68"
}

const Miejsca = () => {
  return (
    <>
    <div className="naglowek">
       <h1 className='naglowekMiejsca'>Miejsca warte odwiedzenia</h1>
    </div>
    <section className="container-grid">
      <Miejsce href={hrefs.href1} img={images.image1} title="Florina" description="Macedonia" />
      <Miejsce href={hrefs.href2} img={images.image2} title="Metsovo" description="Epirus" />
      <Miejsce href={hrefs.href3} img={images.image3} title="Ateny" description="Attica" />
      <Miejsce href={hrefs.href4} img={images.image4} title="Kavala" description="Macedonia" />
      <Miejsce href={hrefs.href5} img={images.image5} title="Ksanti" description="Thrace" />
      <Miejsce href={hrefs.href6} img={images.image6} title="Zajori" description="Epirus" />
      <Miejsce href={hrefs.href7} img={images.image7} title="Karpenisi" description="Centralna Grecja" />
      <Miejsce href={hrefs.href8} img={images.image8} title="Dimitsana" description="Peloponnese" />
      <Miejsce href={hrefs.href9} img={images.image9} title="Nimfeo" description="Macedonia" />
    </section>
    </>
  )
}

const Miejsce = (props) => {
  return (
    <article className="child">
      <figure>
        <img src={props.img} alt="" className="place" />
        <figcaption>
          <h1 className="title">{props.title}</h1>
          <a href={props.href} target="_blank">
            <FaSearchLocation />
          </a>
          <h4 className="description">{props.description}</h4>
        </figcaption>
      </figure>
    </article>
  )
}

export default Miejsca
