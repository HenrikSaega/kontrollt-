import Button from "./UI/Button"
import { useContext } from "react";
import { CartContext } from "../store/CartContext"

const MealItem = (props) => {
    const { addToCart } = useContext(CartContext);

    const formatedPrice = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
        props.meal.price)

    function handleAddToCart() {
        console.log("Toode lisatud!")
        const item = {
            id: props.meal.id,
            name: props.meal.name,
            price: props.meal.price,
            amount: 1
        }
        console.log("Lisatav toode: ", item);
        addToCart(item);
    }
    
    return (
        <li>
            <article className="meal-item article">
                
                <div className="meal-item">
                    <img src={require(`../assets/${props.meal.image}`)} alt={props.meal.name}/>
                    <h3>{props.meal.name}</h3>
                    <p className="meal-item-price">{formatedPrice}</p>
                    <p>{props.meal.description}</p>
                </div>
                <p>
                    <Button onClick={handleAddToCart}>Lisa korvi</Button>
                </p>
            </article>
        </li>
        
    )
}

export default MealItem