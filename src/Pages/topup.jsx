import HomeHeader from "../components/Elements/Header/Home";
import TopUpForm from "../components/Fragments/FormTopUp";
import Hero from "../components/Fragments/Hero";

export default function TopUpPage () {
    return (
        <div className=" w-full overflow-x-hidden">
            <HomeHeader />
            <main className="main">
                <Hero variant="default"/>
                <TopUpForm />
            </main>
        </div>
    )
}

