import React, {useEffect, useState} from "react"
import MealItem from "./MealItem"
const Meals = () => {

    const [meals, setMeals] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/meals")
        .then((mealsData) => {
            return mealsData.json();
        })
          
        .then((mealsData) => {
            setMeals(mealsData)
        })
    }, [])

    return (
        <ul id="meals">
            {meals.map((meal, id, price) => (
            <MealItem key={id} meal={meal} price={price}/>))
            }
        </ul>
    )
}

export default Meals