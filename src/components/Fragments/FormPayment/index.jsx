import { useEffect, useState } from "react"
import { MdMoney } from "react-icons/md"
import { useLocation } from "react-router-dom"
import { Services } from "../../../api/Information"
import { Transaction } from "../../../api/Transaction"
import {toast, ToastContainer} from 'react-toastify'
const PaymentForm = () => {
    const { pathname } = useLocation()
    const [tarif, setTarif] = useState(0)
    const [imageMenu, setImageMenu] = useState('')
    const [paymentName, setPaymentName] = useState('')

    useEffect(() => {
        async function getTarif() {
            const data = await Services()

            data.data.map((item) => {
                if (item.service_code === pathname.split('/')[2]) {
                    setTarif(item.service_tariff)
                    setImageMenu(item.service_icon)
                    setPaymentName(item.service_name)
                }
            })
        }
        getTarif()
    }, [])

    function paymentHandle(e) {
        e.preventDefault()

        const payload = {
            service_code: pathname.split('/')[2]
        }

        const postData = async () => {
            const data = await Transaction(payload)
            if(data.status === 0) {
                toast.success(data.message,{position: "bottom-right",autoClose: 3000,hideProgressBar: false,closeOnClick: false,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored",onClose: () => {
                    window.location.href = '/transaction'
                }})
            }else {
                toast.error(data.message,{position: "bottom-right",autoClose: 3000,hideProgressBar: false,closeOnClick: false,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored"})
            }
        }
        postData()
    }
    if (pathname.split('/')[2] === 'topup') return <Topup />


    return (
        <>
            <div className="container mx-auto p-8">
                <h1 className="text-2xl font-normal mb-6">Pembayaran</h1>
                <span className="text-xl font-semibold flex items-center gap-2 mb-8"><img src={imageMenu} alt="info" width={24} height={24} /> {paymentName} Prabayar</span>
                <form action="" onSubmit={(e) => paymentHandle(e)}>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <div className="relative">
                                <MdMoney height={24} width={24} className='pointer-events-none w-6 h-6 absolute text-slate-500 top-1/2 transform -translate-y-1/2 left-3' />
                                <input type="text" value={tarif}  onInput={(e) => setTarif(e.currentTarget.value)} readOnly className='border border-gray-300 rounded-md py-4 px-6 w-full pl-12' placeholder="Nominal Pembayaran" name="nominal" id="nominal" />
                            </div>
                            <button type="submit" className='bg-red-600 text-white font-semibold py-4 px-6 rounded-md mt-6 w-full cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400' >Bayar</button>
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </>
    )
}

export default PaymentForm