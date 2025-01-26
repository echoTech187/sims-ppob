const Button =(props)=>{
    const {children, classname} = props
    return(
        <button className={classname}>{children}</button>
    )
}

export default Button;