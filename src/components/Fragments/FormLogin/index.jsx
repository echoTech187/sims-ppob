import TextInput from '../../Elements/TextInput'
import Button from '../../Elements/Button'
import { MdAlternateEmail, MdOutlineLock } from 'react-icons/md'

import { authLogin } from './auth'

export default function LoginForm() {
    
    return (
        <>
            <form className='flex flex-col gap-4 w-full px-8 md:w-3/4' onSubmit={(e)=>authLogin(e)}>
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
                <Button classname='bg-red-600 text-white font-semibold py-2 rounded-md mt-6 cursor-pointer'>Masuk</Button>
            </form>
        </>
    )
}