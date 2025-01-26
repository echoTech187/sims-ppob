const Label =(props)=>{
    const {children} = props
    return(
        <label className='text-md font-semibold'>{children}</label>
    )
}

export default Label