import React from 'react';

class App extends React.Component {
	state = {
    isLoading: true,
    movies: []
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading : false})
    }, 5000)
  }
	render() {
    const { isLoading } = this.state;
    return (
      <>
        <div>{isLoading ? "I'm loading" : "Ready Perfectly"}</div>
      </>
    )}
  }
  
  export default App;
