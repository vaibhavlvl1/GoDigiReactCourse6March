import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import FoodList from "./components/FoodList";

function App() {
  const [foodList, setfoodList] = useState();

  const [searchItem, setSearchItem] = useState("");
  const [debValue, setDebValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [result, setResult] = useState();

  const BASE_URL = "https://api.edamam.com/api/food-database/v2/parser?";
  const APP_ID = "280b57ab";
  const API_KEY = "8ad346a16fd664f98298fb7f8cf1ed63";

  async function searchForFood(e) {
    e.preventDefault();

    try {
      let response = await axios.get(
        `${BASE_URL}app_id=${APP_ID}&app_key=${API_KEY}&&ingr=${searchItem}`
      );

      setResult(response.data.hints);
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function getFoodList() {
    try {
      let response = await axios.get(
        `${BASE_URL}app_id=${APP_ID}&app_key=${API_KEY}`
      );
      setfoodList(response.data.hints);
    } catch (error) {
      console.log(error.message);
    }
  }

  // useEffect(() => {
  //   getFoodList();
  //   `get/${dev}`
  // }, [debValue]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebValue(searchItem);
      console.log(searchItem);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchItem]);

  // console.log(debValue);

  return (
    <>
      <Header setSearchItem={setSearchItem} />

      {searchItem ? (
        <FoodList foodList={result} />
      ) : (
        <FoodList foodList={foodList} />
      )}
    </>
  );
}

export default App;
