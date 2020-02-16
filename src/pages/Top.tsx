import React from "react";
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

export const Top: React.FC = () => {
  return (
    <div>
      <header className="App-header">
        <h1>React Audio Recorder</h1>
        <h2>Target</h2>
        <span>iOS/Android</span>
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/react-audio-recorder/samples">
          CLICK HERE
        </Link>
      </header>
    </div>
  )
}