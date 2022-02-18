import '../style/stylePages/wykres-telefon.css'

const Telefon = () => {
  return (
    <div className="container">
      <div className='naglowek'> 
        <h1 className='naglowekPage'>Telefon</h1>
        <h3>Wykres przedstawia liczbę abonentów telefonii komórkowej za ostatnie lata</h3>
        <div className="wykres">
          <iframe width="400" height="325" frameBorder="0" scrolling="no" marginWidth="0" marginHeight="0" src="https://www.google.pl/publicdata/embed?ds=d5bncppjof8f9_&amp;ctype=l&amp;strail=false&amp;bcs=d&amp;nselm=h&amp;met_y=it_cel_sets&amp;scale_y=lin&amp;ind_y=false&amp;rdim=world&amp;idim=country:GRC&amp;ifdim=world&amp;hl=pl&amp;dl=pl&amp;ind=false"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Telefon
