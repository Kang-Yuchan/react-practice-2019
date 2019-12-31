import React from 'react';


function Header() {
  return (
    <h1>This is Header Component</h1>
    );
}

function Food ({fav, nation}) {
  return <h1>I like {fav}. This is from {nation}</h1>
}

const favFoods = [
  
    {
      name: "Kimchi",
      nation: "Korea"
    },
    {
      name: "Sushi",
      nation: "Japan"
    },
    {
      name: "Pasta",
      nation: "Italy"
    }
  ]


function App() {
	return (
		<>
      <Header />
			<p>Hello react!</p>
      {favFoods.map(food => <Food fav={food.name} nation={food.nation}/>)}
		</>
	);
}

export default App;
