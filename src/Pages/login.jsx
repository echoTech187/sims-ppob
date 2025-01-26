import logo from '../assets/Logo.png'
import Header from '../components/Elements/Header'
import LoginForm from '../components/Fragments/FormLogin'
import Illustration from '../components/Elements/Illustration'
import Footer from '../components/Elements/Footer'
import {Link} from 'react-router-dom'
import LoginLayout from '../components/Layouts/Auth'
export default function LoginPage() {
    return (
        <>
            <LoginLayout>
                <div className="container">
                    <div className='flex flex-col items-center mx-auto gap-8'>
                        <Header variant="login" logo={logo} brand="SIMS PPOB" desc="Masuk atau buat akun untuk memulai" />
                        <LoginForm />
                        <Footer variant="login">belum punya akun? registrasi <Link to='/register' className='text-red-600 font-semibold'>disini</Link></Footer>
                    </div>
                </div>
                <Illustration />
            </LoginLayout>
        </>
    )
}