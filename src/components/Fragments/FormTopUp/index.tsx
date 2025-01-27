import React, { useState } from "react"
import { MdMoney } from "react-icons/md"
import { Topup } from "./topup"
import { ToastContainer} from "react-toastify"
const allowTopup = [10000, 20000, 50000, 100000, 250000, 500000]

const TopUpForm = () => {
    const [nominal, setNominal] = useState("")
    const [disabled, setDisabled] = useState(true)
    function InsertNominal(nominal: any) {
        setNominal("")
        if (nominal >= 10000 && nominal <= 1000000) {
            setNominal(nominal.toString())
            setDisabled(false)
        } else {
            setNominal(nominal.toString())
            setDisabled(true)
        }
    }
    return (
        <>
            <div className='container mx-auto px-8 py-8'>
                <h1 className="text-xl ">Silahkan masukan</h1>
                <h1 className="text-3xl font-semibold">Nominal Top Up</h1>
            </div>
            <div className='container mx-auto px-8 pb-8'>
                <form action="" onSubmit={(e) => Topup(e)} className="flex flex-col gap-4">
                    <div className="flex w-full gap-12">
                        <div className="w-2/3">
                            <div className="relative">
                                <MdMoney height={24} width={24} className='pointer-events-none w-6 h-6 absolute text-slate-500 top-1/2 transform -translate-y-1/2 left-3' />
                                <input type="text"  value={nominal}  className="border border-gray-400 rounded-md px-10 py-4 w-full "  onInput={(e) => InsertNominal(e.currentTarget.value)} name="topup" id="topup" placeholder="Masukan Nominal Top Up" />
                                
                            </div>
                            <p className="text-gray-400 text-xs pt-1"> Minimal Top Up Rp. 10.000 dan maksimal Rp. 1.000.000</p>
                            <button type="submit" className='bg-red-600 text-white font-semibold py-4 px-6 rounded-md mt-6 w-full cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400' disabled={disabled}>Top Up</button>
                        </div>
                        <div className="grid grid-cols-3 gap-4 flex-1">
                            {
                                allowTopup.map((item, index) => {
                                    return (
                                        <div className={`border border-gray-400 font-semibold py-4 px-6 rounded-md text-center flex items-center justify-center cursor-pointer ${parseInt(nominal) === item ? 'bg-red-600 text-white' : ''} `} onClick={() => InsertNominal(item)} key={index}>Rp{Number(item).toLocaleString('id-ID')}</div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </>
    )
}

export default TopUpForm