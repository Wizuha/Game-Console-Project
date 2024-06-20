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
          <input type="text" name="subscribe" placeholder="Email adress" />
          <img src="send-2.svg" />
        </div>
        <div className="call">
          <div className="logo-call">
            <img src="headphone.svg" />
          </div>
          <div>
            <p>
              Call us 24 / 7 : <br /> 0747835976
            </p>
          </div>
        </div>
      </div>
      <div className="foot-bottom">
        <div className="left-bottom">
          <div className="logo-site">
            <img src="Union.svg" />
            <p>Game center</p>
          </div>
          <div className="adress">
            <p>
              64 st james boulevard <br />
              hoswick, ze2 7zj
            </p>
          </div>
        </div>
        <div className="mid-left-bottom">
          <p>Find product</p>
          <ul>
            <li>Playstation</li>
            <li>Xbox One</li>
            <li>Nintendo DS</li>
          </ul>
        </div>
        <div className="mid-right-bottom">
          <p>Get help</p>
          <ul>
            <li>About us</li>
            <li>Contact us</li>
            <li>Return policy</li>
            <li>Privacy policy</li>
            <li>Payment policy</li>
          </ul>
        </div>
        <div className="right-bottom">
          <p>About us</p>
          <ul>
            <li>News</li>
            <li>Service</li>
            <li>Our policy</li>
            <li>Customer care</li>
            <li>Faq's</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
