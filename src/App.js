import React, { Component } from 'react';
import './App.css';
import ExchangedCurrency from './components/CurrencyConverter';

class App extends Component {
  render() {
    return (
      <>
      <h2>And now hear this</h2>
        <ExchangedCurrency />
        
      </>
    );
  }
}
export default App;