export default function Header(props) {
    const { variant, logo, brand, desc } = props
    return (
        <>
            <div className={`${variant}-title flex items-center gap-4`}>
                <img src={logo} alt="logo" width={30} height={30} />
                <h1 className='text-3xl font-bold'>{brand}</h1>
            </div>
            <div className={`${variant}-desc max-w-[300px] text-center`}>
                <p className='text-4xl font-semibold'>{desc}</p>
            </div>
        </>
    )
}