import { TopUp } from "../../../api/Transaction"
async function Topup(e) {
    e.preventDefault()
    const nominal = e.target.topup.value
    console.log(nominal)
    const data = await TopUp(parseInt(nominal))
    alert(data.message)
    window.location.href = '/transaction'
    
}

export { Topup }