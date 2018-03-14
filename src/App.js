import React, { Component } from 'react'
import Nav from './components/Nav'
import Form from './components/Form'
import Card from './components/Card'
import CardDeck from './components/CardDeck'
import DropdownButton from './components/DropdownButton'
import ToggleSwitch from './components/ToggleSwitch'
import ButtonGroup from './components/ButtonGroup'
import ButtonToolbar  from './components/ButtonToolbar'
import CustomCheckbox from './components/CustomCheckbox'
import Jumbotron from './components/Jumbotron'
import Collapse from './components/Collapse'
import Pagination from './components/Pagination'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="container mt-5">
          <h1>Material Bootstrap 4 Components for React</h1>
          <h5>by Gurenax</h5>
          <a className="text-pink" href="https://github.com/Gurenax/react-mdbootstrap"><h5>Fork me on GitHub</h5></a>
          
          <h3 className="mt-5">Jumbotron</h3>
          <Jumbotron/>

          <h3 className="mt-5">Roboto Headings</h3>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>

          <h3 className="mt-5">Roboto Paragraph</h3>
          <p>Food truck helvetica YOLO pabst man braid sriracha. Meditation skateboard brooklyn edison bulb street art paleo hell of try-hard. Ugh chillwave ennui gochujang cred slow-carb 3 wolf moon thundercats taxidermy vexillologist. Post-ironic polaroid meh bitters offal enamel pin, hoodie banh mi. Waistcoat man bun woke chartreuse you probably haven't heard of them, listicle chicharrones etsy whatever trust fund dreamcatcher yuccie. Microdosing narwhal affogato, tbh taxidermy ugh twee. Palo santo craft beer butcher, single-origin coffee subway tile salvia cray distillery bicycle rights scenester sustainable cornhole polaroid.</p>
          

          <h3 className="mt-5">Dropdown Button</h3>
          <DropdownButton />

          <h3 className="mt-5">Button Group</h3>
          <ButtonGroup />

          <h3 className="mt-5">Button Toolbar</h3>
          <ButtonToolbar />

          <h3 className="mt-5">Toggle Switch</h3>
          <ToggleSwitch />
          
          <h3 className="mt-5">Form</h3>
          <Form />

          <h3 className="mt-5">Custom Checkbox</h3>
          <CustomCheckbox />

          <h3 className="mt-5">Card</h3>
          <Card />

          <h3 className="mt-5">Card Deck</h3>          
          <CardDeck>
            <Card />
            <Card />
            <Card />
          </CardDeck>

          <h3 className="mt-5">Collapse</h3>
          <Collapse />

          <h3 className="mt-5">Pagination</h3>
          <Pagination />
          
        </div>
      </div>
    )
  }
}

export default App
