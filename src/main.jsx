import React from 'react'
import ReactDOM from 'react-dom'
import Greece from './components/greece'
import Header from './components/Header'

const App = () => {
  return (
    <>
      <Header />
	  <Greece />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));