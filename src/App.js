import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Showcase from './components/Showcase'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Showcase />
          <Gallery />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
