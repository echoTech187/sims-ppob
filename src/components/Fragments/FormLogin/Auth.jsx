import {Login, userProfile} from '../../../api/Membership'
async function authLogin(e) {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    if(email === '' || password === '') {
        alert('Semua field harus diisi')
        return false
    }
    const token = await Login({
        email,
        password
    });
    if (token?.status !== 0) {
        alert(token?.message)
        return false;
    }
    if (token?.data?.token !== null) {
        setSession(token?.data?.token);
        window.location.href = '/';
    }
}

async function profile() {
    const data = userProfile()
    return await data.data
}

function setSession(userToken) {
    sessionStorage.setItem('token', userToken);
}

function getSession() {
    const token = sessionStorage.getItem('token')
    const usertoken = token
    return usertoken
}

function Logout() {
    sessionStorage.removeItem('token');
    window.location.href = '/login';
}
export { authLogin, profile, getSession, setSession, Logout }