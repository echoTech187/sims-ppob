import { getSession } from "../../components/Fragments/FormLogin/auth"
async function Banner() {
    const token = getSession()
    const data = await fetch('https://take-home-test-api.nutech-integrasi.com/banner', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    })
    return await data.json()
}

async function Services() {
    const token = getSession()
    const data = await fetch('https://take-home-test-api.nutech-integrasi.com/services', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    })
    return await data.json()
}
export { Banner, Services }