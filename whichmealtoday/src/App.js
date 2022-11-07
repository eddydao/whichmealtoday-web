import './App.css';
import meal from "./img/meal.jpeg";

const Ingredient = () => {
  return(
    <>
      <ul class="ingredient">
        <li>Ingre 1</li>
        <li>Ingre 2</li>
        <li>Ingre 3</li>
        <li>Ingre 4</li>
        <li>Ingre 5</li>
      </ul>
    </>
  )

}

const Dish = () =>{
  return(
    <div class="disk">
      <img class="meal-img" src={meal} alt=''></img>
      <span>Disk name</span>
      <Ingredient></Ingredient>
    </div>
  )
}


const MainContent = () => {
  return(
    <div>
      <h1>Which meal today</h1>
      <br></br>
      <h3>Morning menu</h3>
      <Dish></Dish>
      <h3>Lunch menu</h3>
      <Dish></Dish>
      <h3>Dinner menu</h3>
      <Dish></Dish>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <MainContent></MainContent>
    </div>
  );
}

export default App;
