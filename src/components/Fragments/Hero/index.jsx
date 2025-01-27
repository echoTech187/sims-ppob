import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getUser } from "../../../redux/slices/user"
const Hero = () => {
    const [showSaldo, setShowSaldo] = useState(false)


    const dispatch = useDispatch()
    const { pathname } = useLocation()
    const path = pathname.split('/')
    const { data, photo,isLoading  } = useSelector((state) => state.user)
    useEffect(() => {
        async function user() {
            dispatch(getUser())
        }
        user()

    }, []);
    

    function ShowHideSaldo() {
        setShowSaldo(!showSaldo)
    }
    if (isLoading) {
        return (
            <div className="container mx-auto py-8 px-8">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col mx-auto gap-4 flex-1">
                        <div className="relative w-24 h-24">
                            <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gray-200 animate-pulse"></div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-xl w-48 h-8 bg-gray-200 mb-0 animate-pulse"></p>
                            <p className="text-3xl w-64 h-10 bg-gray-200 font-semibold animate-pulse"></p>
                        </div>
                    </div>
                    <div className="user-saldo-bg flex-1 h-[150px] text-white">
                        <div className="flex flex-col justify-center gap-3 px-6 h-[150px]">
                            <p className="text-lg w-32 h-8 bg-amber-950 opacity-10 font-semibold animate-pulse"></p>
                            <p className="text-3xl w-64 h-12 bg-amber-950 opacity-10 font-semibold animate-pulse"></p>
                            <p className="text-sm w-16 h-6 bg-amber-950 opacity-10 font-semibold animate-pulse"></p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

    
    return (
        <div className="container mx-auto py-8 px-8">
            <div className="flex items-center justify-between">
                <div className="flex flex-col mx-auto gap-4 flex-1 ">
                    <div className="relative w-24 h-24">
                        <img
                            className="absolute top-0 left-0 w-full h-full border border-gray-200 rounded-full"
                            src={photo}
                            alt=""
                        />
                    </div>
                    <div>
                        <p className="text-xl mb-0">Selamat Datang,</p>
                        <p className="text-3xl font-semibold">
                            {data?.first_name + " " + data?.last_name}
                        </p>
                    </div>
                </div>
                <div className={`${path[1] === "payment" ? "user-saldo-bg-payment" : "user-saldo-bg"}  flex-1 h-[150px] text-white`}>
                    <div className="flex flex-col justify-center gap-4 px-6 h-[150px]">
                        <p className="text-lg font-semibold">Saldo anda</p>
                        <p className="text-3xl font-semibold flex gap-2 items-center">Rp. {showSaldo ? Number(data.balance).toLocaleString('id-ID') : <span className="text-sm">&#9898;&#9898;&#9898;&#9898;&#9898;&#9898;</span>}</p>
                        <p className="text-sm font-semibold" onClick={() => ShowHideSaldo()}>{showSaldo ? "Tutup Saldo" : "Lihat Saldo"}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero