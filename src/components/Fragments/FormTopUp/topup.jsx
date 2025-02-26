import { TopUp } from "../../../api/Transaction"
import {toast} from 'react-toastify'
async function Topup(e) {
    e.preventDefault()
    const nominal = e.target.topup.value

    if(nominal < 10000 || nominal > 1000000) {
        toast.error('Nominal Top Up Tidak Sesuai',{position: "bottom-right",autoClose: 3000,hideProgressBar: false,closeOnClick: false,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored"})
        return false;
    }
    const data = await TopUp(parseInt(nominal))
    toast.success(data.message,{position: "bottom-right",autoClose: 3000,hideProgressBar: false,closeOnClick: false,pauseOnHover: true,draggable: true,progress: undefined,theme: "colored",onClose: () => {
        window.location.href = '/transaction'
    }})
    
    
}

export { Topup }