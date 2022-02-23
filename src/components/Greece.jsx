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
            <img src={ greeceOnMap } />
            <p>Grecja, Republika Grecka – 
              kraj położony w południowo-wschodniej części Europy, 
              na południowym krańcu Półwyspu Bałkańskiego. 
              Graniczy z czterema państwami: Albanią, 
              Macedonią Północną i Bułgarią od północy oraz Turcją od wschodu. 
              Grecja pozostaje pod wpływem klimatu śródziemnomorskiego. 
              Cechuje go łagodna zima z suchym, gorącym latem. 
              W najcieplejszym miesiącu średnia temperatura wynosi ponad 22 °C. 
              Liczba ludności na rok 2018 wynosi 10 768 000.
            </p>
            <img src={ ateny } className="stolica" />
            <p className="stolica-info">
              Ateny – stolica i największe miasto Grecji, 
              jeden z najważniejszych ośrodków turystycznych Europy z 
              zabytkami kultury antycznej i zarazem dziesiąty co do wielkości zespół miejski w Unii Europejskiej 
              na poziomie 3,5 mln mieszkańców. 
              Ateny znajdują się w strefie klimatu subtropikalnego 
              typu śródziemnomorskiego, z łagodnymi zimami i długimi ciepłymi, 
              częściowo gorącymi latami.
            </p>
        </div>
    </div>
  )
}

export default Greece