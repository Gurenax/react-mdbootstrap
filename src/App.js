import React, { Component } from 'react'
import Nav from './components/Nav'
import Form from './components/Form'
import Card from './components/Card'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="container-fluid mt-3">

          <h1>Material Bootstrap 4</h1>
          <Form />          

          <div className="mt-3"></div>

          <Card />
        </div>
      </div>
    )
  }
}

export default App