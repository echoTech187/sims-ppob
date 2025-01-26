const Input =(props)=>{
    const {name,placeholder, type, value} = props
    return(
        <input type={type} className='border border-gray-300 font-semibold rounded-md py-4 px-6 w-full pl-12 text-gray-800 focus:text-gray-900 focus:font-bold placeholder:text-gray-400' placeholder={placeholder} name={name} defaultValue={value} />
    )
}
export default Input