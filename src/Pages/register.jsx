import logo from '../assets/Logo.png'
import Header from '../components/Elements/Header'
import RegisterForm from '../components/Fragments/FormRegister'
import Illustration from '../components/Elements/Illustration'
import Footer from '../components/Elements/Footer'
import {Link} from 'react-router-dom'
import LoginLayout from '../components/Layouts/Auth'
const RegisterPage =(props)=>{
    return (
        <>
            <LoginLayout>
                <div className="container">
                    <div className='flex flex-col items-center mx-auto gap-8'>
                        <Header variant="register" logo={logo} brand="SIMS PPOB" desc="Masuk atau buat akun untuk memulai" />
                        <RegisterForm />
                        <Footer variant="register">sudah punya akun? login <Link to='/login' className='text-red-600 font-semibold'>disini</Link></Footer>
                    </div>
                </div>
                <Illustration />
            </LoginLayout>
        </>
    )
}

export default RegisterPage