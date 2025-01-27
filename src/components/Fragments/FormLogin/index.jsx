import TextInput from '../../Elements/TextInput'
import Button from '../../Elements/Button'
import { MdAlternateEmail, MdOutlineLock } from 'react-icons/md'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authLogin } from '../../../redux/slices/auth'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
export default function LoginForm() {
    const { message, isError, isLoading, isLogged } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        if (isLogged) {
            toast.success('Login Berhasil, anda akan diarahkan ke halaman utama', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                onClose: () => {
                    navigate('/')
                }
            })
        }
    }, [isLogged, message, isError, isLoading])
    function onSubmit(e) {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const data = {
            email,
            password
        };
        dispatch(authLogin(data))
    }
    return (
        <>
            {
                message !== "" && !isLogged && (
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
            <form className='flex flex-col gap-4 w-full px-8 md:w-3/4' onSubmit={(e) => onSubmit(e)}>
                <TextInput
                    label="Email"
                    labelIcon={<MdAlternateEmail height={20} width={20} className='pointer-events-none w-5 h-5 absolute text-slate-500 opacity-45 top-1/2 transform -translate-y-1/2 left-3' />}
                    placeholder="Masukan email anda"
                    type="email"
                    name="email"
                />
                <TextInput
                    label="Password"
                    labelIcon={<MdOutlineLock height={20} width={20} className='pointer-events-none w-5 h-5 absolute text-slate-500 opacity-45 top-1/2 transform -translate-y-1/2 left-3' />}
                    placeholder="Masukan password anda"
                    type="password"
                    name="password"
                    showPassword={true}
                />
                <Button classname='bg-red-600 text-white font-semibold py-2 rounded-md mt-6 cursor-pointer'>{isLoading ? "Loading..." : "Masuk"}</Button>


            </form>
            <ToastContainer />
        </>
    )
}