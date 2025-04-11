const MealItem = (props) => {
    const formatedPrice = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
        props.meal.price)
    
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
                    <button >Add to Cart</button>
                </p>
            </article>
        </li>
        
    )
}

export default MealItem