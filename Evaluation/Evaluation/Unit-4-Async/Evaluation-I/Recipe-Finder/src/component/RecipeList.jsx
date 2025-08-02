/** @format */
import '../Recipe.css'
import React, { useState } from "react";
import { Nav } from './Nav';
import axios from "axios";
import { RecipeDetail } from './RecipeDetail';

export const RecipeList = () => {
    
  let url = "https://dummyjson.com/recipes";

const [theme,setTheme] = useState(true)

  function changeTheme(){
  setTheme(!theme)
  }

  const [recipelist, setRecipelist] = useState([]);

  axios
    .get(url)
    .then((res) => {
      setRecipelist(res.data.recipes);
    })
    .catch((error) => {
      console.log(error);
    });

    document.body.style.backgroundColor = theme ? "white" : "black"
     document.body.style.color = theme ? "black" : "white"

  return (
    <>
    <Nav/>
    <div className='theme'>
        <button className={theme ? "Light" : "Dark"} onClick={changeTheme}>{theme ? "Dark" : "Light"}</button>
    </div>
      <div className='box-1'>
        {recipelist.map((item, index) => (
          <div className='box-2'  key={index}>
            <img src={item.image} alt="recipe image" />
            <h4>Cuisine Type - {item.cuisine}</h4>
            <h4>Recipe - {item.name}</h4>
            <h4>Meal Type - {item.mealType} </h4>
            <a href= './RecipeDetail.jsx' ><button>Detail</button></a>
          </div>
        ))}
      </div>
    </>
  );
};
