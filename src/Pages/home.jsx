import HomeHeader from "../components/Elements/Header/Home";
import Hero from "../components/Fragments/Hero";
import MenuCard from "../components/Fragments/Card/Menu";
import PromoCard from "../components/Fragments/Card/Promo";

export default function HomePage () {
    
    return (
        <div className=" w-full overflow-x-hidden">
            <HomeHeader />
            <main className="main">
                <Hero variant="default"/>
                <MenuCard />
                <PromoCard />
            </main>
        </div>
    )
}

