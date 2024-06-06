import React, { useEffect, useState } from 'react'

import './App.css'; 
import Recipe from './Recipie'; 


const App = () => { 
const APP_ID = "98d3103e"; 
const APP_KEY = 
"a208a01f00a05011e5a56c5eecb545ab	"; 
const [recipes, setRecipes] = useState([]); 
const [search, setSearch] = useState(""); 
const [query, setQuery] = useState("chicken"); 
useEffect(() => { 
	getRecipes(); 
}, [query]) 
const getRecipes = async () => { 
	const response = await fetch 
		(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`); 
	const data = await response.json(); 
	setRecipes(data.hits); 
	console.log(data); 

}; 
const updateSearch = e => { 
	setSearch(e.target.value); 
}; 
const getSearch = e => { 
	e.preventDefault(); 
	setQuery(search); 
	setSearch(""); 
} 

return ( 
	<div className="App"> 
	<h1 class="heading">Savoury secrets</h1>
	<form className="search-form" onSubmit={getSearch} > 
		<input className="search-bar" type="text" value={search} 
			onChange={updateSearch} /> 
		<button className="search-button" type="submit" > 
			Search 
		</button> 
	</form> 
	<div className="recipes"> 
		{recipes.map(recipe => ( 
		<Recipe 
			key={recipe.recipe.label} 
			title={recipe.recipe.label} 
			calories={recipe.recipe.calories} 
			image={recipe.recipe.image} 
			ingredients={recipe.recipe.ingredients} 
		/> 

		))} 
	</div> 

	</div> 
); 
} 

export default App; 
