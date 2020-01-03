import React from 'react';
import axios from "axios";

class App extends React.Component {
	state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/movie_details.json");
  }

  componentDidMount() {
    this.getMovies();
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
