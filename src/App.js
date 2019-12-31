import React from 'react';

function Header() {
  return (
    <h1>This is Header Component</h1>
  );
}

const Heroes = [
  
    {
      name: "Mccree",
      position: "DPS",
      type: "Hitscan",
      hp: 200
    },
    {
      name: "Widow Maker",
      position: "DPS",
      type: "Hitscan",
      hp: 200
    },
    {
      name: "Zarya",
      position: "Tank",
      type: "Hitscan",
      hp: 400
    }
  ]


function App() {
	return (
		<>
      <Header />
      <p>{Heroes.map(hero => <Heroes name={hero.name}/> )}</p>
			<p>Hello react!</p>
		</>
	);
}

export default App;
