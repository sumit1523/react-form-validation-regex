import React, { Component } from 'react';
import './App.css';
import Form from './Component/Form.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Form Validation</h2>
        </div>
        <Form />
        
      </div>
    );
  }
}

export default App;
