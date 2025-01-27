import TextInput from '../../Elements/TextInput'
import Button from '../../Elements/Button'
import { MdAlternateEmail, MdOutlineLock } from 'react-icons/md'
import { FaRegUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { authRegister } from '../../../redux/slices/auth'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
export default function RegisterForm() {

    const { message, isError, isLoading } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {

    }, [message, isError, isLoading])
    function registerHandle(e) {
        e.preventDefault()
        const email = e.target.email?.value
        const firstName = e.target.firstName?.value
        const lastName = e.target.lastName?.value
        const password = e.target.password?.value
        const confirmPassword = e.target.confirm_password?.value
        const formData = {
            email: email,
            firstName: firstName,
            lastName: lastName,
            password: password,
            confirmPassword: confirmPassword
        }
        dispatch(authRegister(formData))

        if (!isError) {
            toast.success('Registrasi Berhasil, Silahkan login untuk melanjutkan', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                onClose: () => {
                    dispatch(Reset())
                    navigate('/login')
                }
            })
        }
    }
    return (
        <>
            {
                message !== "" && (
                    <>
                        <div id="alert" className="flex items-center w-full md:w-2/3 p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                            <span className="sr-only">Info</span>
                            <div className="ms-3 text-sm font-medium">
                                {message}
                            </div>
                        </div>

                    </>
                )

            }
            <form className='flex flex-col gap-4 w-full px-8 md:w-3/4' onSubmit={(e) => registerHandle(e)} method='post'>
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
                <Button classname='bg-red-600 text-white font-semibold py-2 rounded-md mt-6 cursor-pointer'>{isLoading ? "Loading..." : "Registrasi"}</Button>
            </form>
            <ToastContainer />
        </>
    )
}