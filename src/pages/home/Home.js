import axios from 'axios';
import React, { useState } from 'react'
import Header from '../../components/header/Header'
import { HomeImg, ImgDiv, MainContainer ,  } from './HomeStyles';
import RecipeCardComp from './RecipeCardComp';
import homeSvg from "../../assets/home.svg";



const APP_ID = "6493af56";
const APP_KEY = "7c6c293db20366b90354f44502ec1372";
const Home = () => {
  const [query,setQuery] = useState("");
  const [food,setFood] = useState();
  const mealTypes = ["Breakfast","Lunch","Dinner","Snack","Teatime"];
  const [meal,setMeal] = useState(mealTypes[0].toLocaleLowerCase())

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData = async () => {
    if(query){
      const result = await axios.get(url)
      setFood(result.data.hits)
    }else {
      console.log("please fill the form");
    }
  }
  
  return (
      <div>
      <Header setQuery={setQuery}
      getData={getData}
      mealTypes={mealTypes}
      setMeal={setMeal}
      />
      {food ? (<MainContainer>
        {food.map((liste,index)=>(
          <RecipeCardComp key={index} recipe1={liste.recipe} />
        ))}


      </MainContainer>
        ):<ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>}

    </div>
  )
}

export default Home