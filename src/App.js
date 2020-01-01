import React from 'react';
import PropTypes from "prop-types";


function Header() {
  return (
    <h1>This is Header Component</h1>
    );
}

function Food ({fav, nation, rating}) {
  return (
    <>
      <h1>I like {fav}. This is from {nation}</h1>
      <h2>This food's rating is {rating}/5.</h2>
    </>
  )
}

Food.propTypes = {
  fav: PropTypes.string.isRequired,
  nation: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

const favFoods = [
  
    {
      id: 1,
      name: "Kimchi",
      nation: "Korea",
      rating: 5
    },
    {
      id: 2,
      name: "Sushi",
      nation: "Japan",
      rating: 5
    },
    {
      id: 3,
      name: "Pasta",
      nation: "Italy",
      rating: 4
    }
  ]
  

function App() {
	return (
		<>
      <Header />
      {favFoods.map(dish => <Food 
      key={dish.id} 
      fav={dish.name} 
      nation= {dish.nation} 
      rating= {dish.rating} />)}
    </>
	);
}

export default App;
