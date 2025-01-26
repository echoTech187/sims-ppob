import { Link } from "react-router-dom"
const Brand = () => {
    return (
        <Link to={"/"} className="logo flex items-center gap-2 flex-1">
            <img src="/src/assets/Logo.png" alt="logo" width={24} height={24} />
            <h6 className="text-xl font-semibold">SIMS PPOB</h6>
        </Link>
    )
}

export default Brand