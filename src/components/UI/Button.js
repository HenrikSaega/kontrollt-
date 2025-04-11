const Button = (props) => {
   
    if(props.textOnly){
        return(<button className="text-button">Add to Cart</button>)
    } 
    else{
        return(<button className="button">Add to Cart</button>)
    }
}

export default Button