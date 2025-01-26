import HomeHeader from "../components/Elements/Header/Home";
import AccountForm from "../components/Fragments/FormAccount";
import Hero from "../components/Fragments/Hero";

export default function AccountPage () {
    return (
        <div className=" w-full overflow-x-hidden">
            <HomeHeader />
            <main className="main">
                <AccountForm />
            </main>
        </div>
    )
}