import { getSession } from "../../components/Fragments/FormLogin/auth"
async function Balance () {
    const token = getSession()
    const data =  await fetch('https://take-home-test-api.nutech-integrasi.com/balance', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
        },
    })
    return await data.json()
}
async function TopUp (nominal) {
    const token = getSession()

    if(nominal === "" ) {
        return {
            status: 0,
            message: "Nominal Tidak Boleh Kosong",
            data: null
        }
    }
    if(nominal < 10000) {
        return {
            status: 0,
            message: "Minimal Nominal Top Up Rp. 10.000",
            data: null
        }
    }
    if(nominal > 1000000) {
        return {
            status: 0,
            message: "Maksimal Nominal Top Up Rp. 1.000.000",
            data: null
        }
    }
        
    

    const data =  await fetch('https://take-home-test-api.nutech-integrasi.com/topup', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
        },
        body: JSON.stringify({top_up_amount :nominal})
    })
    return await data.json()
}
async function Transaction (credentials) {
    const token = getSession()
    const data =  await fetch('https://take-home-test-api.nutech-integrasi.com/transaction', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer '+token
        },
        body: JSON.stringify(credentials)
    })
    return await data.json()
}

async function GetTransaction (props){
    const {offset, limit} = props
    const token = getSession()
    const data =  await fetch('https://take-home-test-api.nutech-integrasi.com/transaction/history?offset='+offset+'&limit='+limit+'', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
        },
    })
    return await data.json()
}

export  {Balance, TopUp, Transaction, GetTransaction}