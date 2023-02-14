import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

// New component class starts here:
class TonightsPlan extends React.Component {
  render() {
    let choice;
    if (fiftyFifty == true) {
      choice = "WOOO"
    }
    else {
      choice = "bed"
    }
    return <h1>Tonight I'm going to {choice} WOOO</h1>
  }

}
ReactDOM.render(<TonightsPlan />, document.getElementById('app'))