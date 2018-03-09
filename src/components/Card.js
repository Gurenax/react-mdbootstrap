import React from 'react'

const Card = () => (
  <div className="card" style={{'width': 18+'rem'}}>
    <img className="card-img-top" src="https://img.heypik.com/58pic/27/91/98/32358PICHdF.jpg?x-oss-process=image/resize,w_1024" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-block btn-pink">Go somewhere</a>
    </div>
  </div>
)

export default Card
