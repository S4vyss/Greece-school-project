import '../style/stylePages/wykres-telefon.css'

const Wykres = () => {
  return (
    <div className="container">
      <div className='naglowek'> 
        <h1 className='naglowekPage'>Wykres</h1>
        <h3>Wykres przedstawia wskaźnik uczniów do nauczycieli w szkołach średnich dla danego państwa</h3>
        <div className="wykres">
          <iframe width="600" height="525" frameBorder="0" scrolling="no" marginWidth="0" marginHeight="0" src="https://www.google.pl/publicdata/embed?ds=d5bncppjof8f9_&amp;ctype=c&amp;strail=false&amp;bcs=d&amp;nselm=s&amp;met_y=pupil_teacher_ratio&amp;fdim_y=education_level:9&amp;scale_y=lin&amp;ind_y=false&amp;idim=country:GRC&amp;ifdim=country:region:ECS&amp;tunit=Y&amp;pit=1487286000000&amp;hl=pl&amp;dl=pl&amp;ind=false&amp;icfg"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Wykres
