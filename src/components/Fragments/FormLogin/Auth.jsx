import { userProfile, Register } from '../../../api/Membership'

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
export { profile, getSession, setSession, Logout }