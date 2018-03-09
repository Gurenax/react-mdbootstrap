import React from 'react'

const Card = () => (
  <div className="card" style={{'width': 18+'rem'}}>
    <img className="card-img-top" src="assets/images/sample.jpg" alt="Card caption"/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="/" className="btn btn-block btn-pink">Go somewhere</a>
    </div>
  </div>
)

export default Card
