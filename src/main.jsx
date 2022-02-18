import React from 'react'
import ReactDOM from 'react-dom'
import Greece from './components/Greece'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Bibliografia from './Pages/Bibliografia'
import Miejsca from './Pages/Miejsca'
import Telefon from './Pages/Telefon'
import Wykres from './Pages/Wykres'
import Zdjecia from './Pages/Zdjecia'
import Error1 from './Pages/Error1'

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Greece />
          <Footer />
        </Route>
        <Route path="/wykres">
          <Wykres />
          <Footer />
        </Route>
        <Route path="/telefon">
          <Telefon />
          <Footer />
        </Route>
        <Route path="/miejsca">
          <Miejsca />
          <Footer />
        </Route>
        <Route path="/zdjecia">
          <Zdjecia />
          <Footer />
        </Route>
        <Route path="/bibliografia">
          <Bibliografia />
          <Footer />
        </Route>
        <Route path="*">
          <Error1 />
        </Route>
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));