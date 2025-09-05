const Button = (props) => {
   
    if(props.textOnly){
        return(<button className="text-button">{props.children}</button>)
    } 
    else{
        return(<button className="button" onClick={props.onClick}>{props.children}</button>)
    }
}

export default Button