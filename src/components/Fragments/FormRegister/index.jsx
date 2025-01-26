import TextInput from '../../Elements/TextInput'
import Button from '../../Elements/Button'
import { MdAlternateEmail, MdOutlineLock } from 'react-icons/md'
import { FaRegUser } from 'react-icons/fa'
import { Register } from '../../../api/Membership'
export default function RegisterForm() {

    async function authRegister(e) {
        e.preventDefault()

        const email = e.target.email?.value
        const firstName = e.target.firstName?.value
        const lastName = e.target.lastName?.value
        const password = e.target.password?.value
        const confirmPassword = e.target.confirm_password?.value

        if (!email || !firstName || !lastName || !password || !confirmPassword) {
            alert('Semua field harus diisi')
            return false;
        }

        if (password.length < 6) {
            alert('Password minimal 6 karakter')
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Email tidak valid')
            return false;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
        if (!passwordRegex.test(password)) {
            alert('Password harus mengandung setidaknya satu huruf besar, satu huruf kecil, dan satu angka')
            return false;
        }

        if (password !== confirmPassword) {
            alert('Password dan konfirmasi password tidak sama')
            return false;
        }

        const payload = {
            email: email,
            first_name: firstName,
            last_name: lastName,
            password: password
        }

        const postData = await Register(payload)
        if (postData.status === 0) {
            alert(postData.message)
            window.location.href = '/login'
        }
    }
    return (
        <>
            <form className='flex flex-col gap-4 w-full px-8 md:w-3/4' onSubmit={(e) => authRegister(e)} method='post'>
                <TextInput
                    label="Email"
                    labelIcon={<MdAlternateEmail height={20} width={20} className='pointer-events-none w-5 h-5 absolute text-slate-500 opacity-45 top-1/2 transform -translate-y-1/2 left-3' />}
                    placeholder="Masukan email anda"
                    type="email"
                    name="email"
                />
                <TextInput
                    label="Nama Depan"
                    labelIcon={<FaRegUser height={20} width={20} className='pointer-events-none w-5 h-5 absolute text-slate-500 opacity-45 top-1/2 transform -translate-y-1/2 left-3' />}
                    placeholder="Nama Depan"
                    type="text"
                    name="firstName"
                />
                <TextInput
                    label="Nama Belakang"
                    labelIcon={<FaRegUser height={20} width={20} className='pointer-events-none w-5 h-5 absolute text-slate-500 opacity-45 top-1/2 transform -translate-y-1/2 left-3' />}
                    placeholder="Nama Belakang"
                    type="text"
                    name="lastName"
                />
                <TextInput
                    label="Password"
                    labelIcon={<MdOutlineLock height={20} width={20} className='pointer-events-none w-5 h-5 absolute text-slate-500 opacity-45 top-1/2 transform -translate-y-1/2 left-3' />}
                    placeholder="buat password"
                    type="password"
                    name="password"
                    showPassword={true}
                />
                <TextInput
                    label="Password"
                    labelIcon={<MdOutlineLock height={20} width={20} className='pointer-events-none w-5 h-5 absolute text-slate-500 opacity-45 top-1/2 transform -translate-y-1/2 left-3' />}
                    placeholder="konfirmasi password"
                    type="password"
                    name="confirm_password"
                    showPassword={true}
                />
                <Button classname='bg-red-600 text-white font-semibold py-2 rounded-md mt-6 cursor-pointer'>Registrasi</Button>
            </form>
        </>
    )
}