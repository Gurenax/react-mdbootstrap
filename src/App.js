import React, { Component } from 'react'
import Nav from './components/Nav'
import Form from './components/Form'
import Card from './components/Card'
import DropdownButton from './components/DropdownButton'
import ToggleSwitch from './components/ToggleSwitch'
import ButtonGroup from './components/ButtonGroup'
import ButtonToolbar  from './components/ButtonToolbar'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="container mt-3">
          <h1>Material Bootstrap 4</h1>
          
          <h3 className="mt-3">Dropdown Button</h3>
          <DropdownButton />

          <h3 className="mt-3">Button Group</h3>
          <ButtonGroup />

          <h3 className="mt-3">Button Toolbar</h3>
          <ButtonToolbar />

          <h3 className="mt-3">Toggle Switch</h3>
          <ToggleSwitch />
          
          <h3 className="mt-3">Form</h3>
          <Form />

          <h3 className="mt-3">Card</h3>
          <Card />

        </div>
      </div>
    )
  }
}

export default App
