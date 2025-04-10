import React, {useEffect} from "react"

const Meals = () => {

    useEffect(() => {
        fetch("http://localhost:3000/meals")
        .then((mealsData) => {
            return mealsData.json();
        })
          
        .then((mealsData) => {
            console.log(mealsData)
        })
    })

    return (
        <ul id="meals">
            { 
                // list of meals
            }
        </ul>
    )
}

export default Meals