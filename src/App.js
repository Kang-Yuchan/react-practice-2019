import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(prop) {
    super(prop)
    console.log("constructor");
  }
	state = {
		count: 0
  };
  add = () => {
    this.setState(i => ({ count: i.count+1 }))
  }

  minus = () => {
    this.setState(i => ({ count: i.count-1 }))
  }
	render() {
    console.log("render");
    return (
      <>
    <h1>This number is: {this.state.count}</h1>
    <button onClick={this.add}>+</button>
    <button onClick={this.minus}>-</button>
    </>
    )}
    componentDidMount() {
      console.log("componentDidMount");
    }
    componentDidUpdate(){
      console.log("componentDidUpdate")
    }
    componentWillUnmount() {
      console.log("componentWillUnmount")
    }
  }
  
  export default App;
