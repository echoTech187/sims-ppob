import { getSession } from "../../components/Fragments/FormLogin/auth"
async function Login(credentials) {
    const data = await fetch('https://take-home-test-api.nutech-integrasi.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    return await data.json()
}

async function Register(credentials) {
    const data = await fetch('https://take-home-test-api.nutech-integrasi.com/registration', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'

        },
        body: JSON.stringify(credentials)
    })
    return await data.json()
}

async function userProfile() {
    const token = getSession()
    const data = await fetch('https://take-home-test-api.nutech-integrasi.com/profile', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
        },
    })
    return await data.json()
}

async function updateProfile(credentials) {
    const token = getSession()
    const data = await fetch('https://take-home-test-api.nutech-integrasi.com/profile/update', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
        },
        body: JSON.stringify(credentials)
    })
    return await data.json()
}

async function updatePhoto(formData) {
    const token = getSession()
    const data = await fetch('https://take-home-test-api.nutech-integrasi.com/profile/image', {
        method: 'PUT',
        headers: {
            'Accept': 'image/*',
            'Authorization': 'Bearer '+token
        },
        body: formData
    })
    return await data.json()
}


export { Login, Register, userProfile, updateProfile, updatePhoto }