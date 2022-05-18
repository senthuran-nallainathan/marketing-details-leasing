import logo from './logo.svg';
import './App.css';

import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function App(props) {
  return (
  <div>
    <h1>Marketing Details</h1>
    <Popup trigger={<button className="button"> Edit </button>} modal nested>
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="content">
          <h1>Marketing Details</h1>
          <br/>
          <br/>
          <p>Do you own professional photos ?</p>
          <input type="radio" value="Yes" name="professional-photo-yes" /> Yes
          <input type="radio" value="Yes" name="professional-photo-no" /> No
          <br/>
          <p>Photo editing</p>
          <input type="radio" value="Yes" name="photo-editing-yes" /> Yes
          <input type="radio" value="Yes" name="photo-editing-no" /> No
          <br/>
          <p>REA premiere Upgrade</p>
          <input type="radio" value="Yes" name="rea-premiere-yes" /> Yes
          <input type="radio" value="Yes" name="rea-premiere-no" /> No
          <br/>
          <p>Sign board required?</p>
          <input type="radio" value="Yes" name="sign-board-yes" /> Yes
          <input type="radio" value="Yes" name="sign-board-no" /> No
          <br/>
          <p>Floorplan required?</p>
          <input type="radio" value="Yes" name="floor-plan-yes" /> Yes
          <input type="radio" value="Yes" name="floor-plan-no" /> No
          <br/>
          <p>Virtual styling</p>
          <input type="radio" value="Yes" name="virtual-styling-yes" /> Yes
          <input type="radio" value="Yes" name="virtual-styling-no" /> No
        </div>
        <div className="actions">
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            Save
          </button>
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            Close
          </button>
          </div>
        </div>
      )}
      </Popup>

    <br/>
    <p>Do you own professional photos ?</p>
    <br/>
    <p>Do you own professional photos ?</p>
    <br/>
    <p>Photo editing</p>
    <br/>
    <p>REA premiere Upgrade</p>
    <br/>
    <p>Sign board required?</p>
    <br/>
    <p>Floorplan required?</p>
    <br/>
    <p>Virtual styling</p>
  </div>
  );
}

export default App;