import React from 'react'

const ButtonToolbar = () => (
  <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
    <div className="btn-group mr-2" role="group" aria-label="First group">
      <button type="button" className="btn mr-1 mb-1 btn-pink">1</button>
      <button type="button" className="btn mr-1 mb-1 btn-pink">2</button>
      <button type="button" className="btn mr-1 mb-1 btn-pink">3</button>
      <button type="button" className="btn mr-1 mb-1 btn-pink">4</button>
    </div>
    <div className="btn-group mr-2" role="group" aria-label="Second group">
      <button type="button" className="btn mr-1 mb-1 btn-pink">5</button>
      <button type="button" className="btn mr-1 mb-1 btn-pink">6</button>
      <button type="button" className="btn mr-1 mb-1 btn-pink">7</button>
      <button type="button" className="btn mr-1 mb-1 btn-pink">8</button>
    </div>
    {/* <div className="btn-group" role="group" aria-label="Third group">
      <button type="button" className="btn mb-1 btn-pink">8</button>
    </div> */}
  </div>
)

export default ButtonToolbar