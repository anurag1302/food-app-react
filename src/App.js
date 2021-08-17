import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import mealApi from "./components/api/mealApi";
import Title from "./components/Title/Title";
import Menu from "./components/Menu/Menu";

let uniqueCategories = mealApi.map((meal) => {
  return meal.category;
});

uniqueCategories = [...uniqueCategories, "All"]; //usage of spread operator to concatenate an extra item

function App() {
  const [data, setData] = useState(mealApi);

  const handleClick = (category) => {
    if (category === "All") {
      setData(mealApi);
      return;
    }

    let filteredMeals = mealApi.filter((meal) => {
      return meal.category === category;
    });

    setData(filteredMeals);
  };

  return (
    <div className="App">
      <Title />
      <Menu handleClick={handleClick} uniqueCategories={uniqueCategories} />
      <hr />
      <Card data={data} />
    </div>
  );
}

export default App;
