import React from 'react'
import ReactDOM from 'react-dom'
import Greece from './components/greece'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header />
	  <Greece />
    <Footer />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));