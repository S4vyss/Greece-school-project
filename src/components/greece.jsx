import '../style/greece.css'
import greeceOnMap from '../assets/images/greece-on-map.png'
import ateny from '../assets/images/ateny.jpeg'

const Greece = () => {
  return (
    <div className="container">
        <div className="naglowek">
            <h1>CHARAKTERYSTYKA</h1>
        </div>
        <div className="reszta">
            <img src={greeceOnMap} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veritatis eligendi nesciunt illo velit necessitatibus reprehenderit placeat. Voluptates necessitatibus repellendus nobis culpa sed sapiente voluptate natus suscipit, enim placeat pariatur?</p>
            <img src={ateny} className="stolica" />
            <p className="stolica-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eius praesentium corporis alias veniam commodi voluptatum, voluptate ipsam repellat architecto labore ullam quis! Deserunt delectus sequi, enim cum atque ab!</p>
        </div>
    </div>
  )
}

export default Greece
