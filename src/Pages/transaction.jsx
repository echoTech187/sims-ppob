import HomeHeader from "../components/Elements/Header/Home";
import TransactionForm from "../components/Fragments/FormTransaction";
import Hero from "../components/Fragments/Hero";

export default function TransactionPage () {
    return (
        <div className=" w-full overflow-x-hidden">
            <HomeHeader />
            <main className="main">
                <Hero variant="default"/>
                <TransactionForm />
            </main>
        </div>
    )
}

