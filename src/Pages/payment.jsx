import HomeHeader from "../components/Elements/Header/Home";
import PaymentForm from "../components/Fragments/FormPayment";
import Hero from "../components/Fragments/Hero";

export default function PaymentPage () {
    return (
        <div className=" w-full overflow-x-hidden">
            <HomeHeader />
            <main className="main">
                <Hero variant="default"/>
                <PaymentForm />
            </main>
        </div>
    )
}

