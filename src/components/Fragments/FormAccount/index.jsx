import { MdEdit } from "react-icons/md"
import { FaRegUser } from "react-icons/fa"
import { MdAlternateEmail } from "react-icons/md"
import TextInput from "../../Elements/TextInput"
import Button from "../../Elements/Button"
import { Logout } from "../FormLogin/auth"
import { useEffect, useState } from "react"
import { updatePhoto, userProfile, updateProfile } from "../../../api/Membership"
const AccountForm = () => {

    const [user, setUser] = useState({})
    const [edit, setEdit] = useState(false)

    const [defaultImage, setDefaultImage] = useState("")
    const [isDefaultImage, setIsDefaultImage] = useState(false)

    useEffect(() => {
        async function getUser() {
            const data = await userProfile();
            setUser(data?.data);
            if(data?.data?.profile_image!== null) {
                const { profile_image } = data?.data
                const splitImage = profile_image.toString().split("/")[4]
                if (splitImage !== 'null') {
                    setDefaultImage(profile_image)
                    setIsDefaultImage(false)
                }else{
                    setDefaultImage("src/assets/Profile Photo.png")
                    setIsDefaultImage(true)
                }
                
            }
        }
        getUser();
    }, []);

    async function uploadUserPhoto(e) {
        const file = e.target.files[0]
        if (file) {
            if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
                alert('Format file harus jpg/png')
                return false;
            }
            if (file.size > 100 * 1024) {
                alert('Ukuran file tidak boleh lebih dari 100kb')
                return false;
            }
            console.log(file);
            const form = new FormData();
            form.append('file', file);
            const postData = await updatePhoto(form);
            if (postData.status === 0) {
                setUser(postData?.data)
                alert(postData.message)

                document.getElementById('form-account').reload();
            }
        }else{
            alert('Pilih foto terlebih dahulu')
        }

    }

    async function editProfile(e) {
        e.preventDefault()
        const first_name = e.target.firstName.value
        const last_name = e.target.lastName.value

        const data = {
            first_name,
            last_name
        }

        const postData = await updateProfile(data)

        if (postData.status === 0) {
            setEdit(!edit)
            setUser(postData?.data)
            alert(postData.message)
        }else{
            setEdit(false)
            alert(postData.message)
        }
        console.log(data);

    }



    return (
        <div className="container mx-auto py-8 px-8 flex flex-col w-1/2 justify-center items-center gap-12" id="form-account">
            <div className="flex flex-col mx-auto gap-8 justify-center items-center">
                <div className="relative w-45 h-45">
                    <img
                        className="absolute top-0 left-0 w-full h-full border border-gray-200 rounded-full object-contain"
                        src={defaultImage}
                        alt=""
                    />
                    <form action="" encType="multipart/form-data" method="post" id="form-upload" className={`${edit ? 'hidden' : ''}`}>
                        <span className="absolute bottom-0 right-0 w-10 h-10 bg-white rounded-full border-2 border-gray-200 cursor-pointer">
                            <span className="relative w-9 h-9 flex justify-center items-center">
                                <label htmlFor="file-upload" className="cursor-pointer  w-9 h-9"><MdEdit height={16} width={16} className='pointer-events-none w-5 h-5 text-black absolute left-1/4 top-1/2 transform -translate-y-1/2' /></label>
                                <input type="file" className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" id="file-upload" name="file-upload" onChange={(e) => uploadUserPhoto(e)} />
                            </span>
                        </span>
                    </form>
                </div>
                <span className="text-4xl font-semibold">{user?.first_name} {user?.last_name}</span>
            </div>
            <form onSubmit={(e) => editProfile(e)} className='flex flex-col gap-4 w-full px-8 justify-center items-center'>
                <TextInput
                    label="Email"
                    labelIcon={<MdAlternateEmail height={20} width={20} className='pointer-events-none w-6 h-6 absolute text-slate-900 top-1/2 transform -translate-y-1/2 left-3' />}
                    placeholder="Masukan email anda"
                    type="email"
                    name="email"
                    values={user?.email}
                    showLabel={true}
                />
                <TextInput
                    label="Nama Depan"
                    labelIcon={<FaRegUser height={20} width={20} className='pointer-events-none w-5 h-5 absolute text-slate-900 top-1/2 transform -translate-y-1/2 left-3' />}
                    placeholder="Nama Depan"
                    type="text"
                    name="firstName"
                    values={user?.first_name}
                    showLabel={true}
                />
                <TextInput
                    label="Nama Belakang"
                    labelIcon={<FaRegUser height={20} width={20} className='pointer-events-none w-5 h-5 absolute text-slate-900  top-1/2 transform -translate-y-1/2 left-3' />}
                    placeholder="Nama Belakang"
                    type="text"
                    name="lastName"
                    values={user?.last_name}
                    showLabel={true}
                />

                { edit && 
                    <Button classname='bg-red-600 text-white font-semibold py-2 rounded-md w-full cursor-pointer'>Simpan</Button>
                }

                {!edit &&
                    (<><Button classname='bg-white border border-red-900 text-red-600 font-semibold py-2 rounded-md mt-6 w-full cursor-pointer'>Edit Profil</Button>
                    <button type='button' className='bg-red-600 text-white font-semibold py-2 rounded-md w-full  cursor-pointer' onClick={Logout}>Logout</button></>)
                }
                
                
                
            </form>
        </div>
    )
}

export default AccountForm