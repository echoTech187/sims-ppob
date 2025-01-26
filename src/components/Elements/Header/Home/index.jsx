import Brand from "./brand"
import Navigation from "./navigation"

const HomeHeader = () => {

    return (
        <header className=" border-b border-b-neutral-300">
            <div className="flex items-center justify-between w-full container mx-auto px-8 py-8 ">
                <Brand/>
                <Navigation/>
            </div>

        </header>
    )
}

export default HomeHeader