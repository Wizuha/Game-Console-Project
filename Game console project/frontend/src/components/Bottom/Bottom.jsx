import React from 'react'
import './Bottom.css'

export default function Footbar() {
  return (
    <div className="bottom">
      <div className="subscribe">
        <div className="text-subscribe">
          <h1>Subscribe newlestter</h1>
        </div>
        <div className="input-subscribe">
          <form>
            <input type="text" name="subscribe" placeholder="Email adress" />
            <button>Submit</button>
          </form>
        </div>
        <div className="call">
          <div className="logo-call">
            <img src= 'headphone.svg' />
          </div>
          <div>Call us 24 / 7 : <br/> 0747835976</div>
        </div>
      </div>
    </div>
  );
}
