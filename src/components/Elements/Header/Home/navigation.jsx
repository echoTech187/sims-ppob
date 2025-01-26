import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
const NavigationItems = (props) => {
    const { to,active, children } = props
    return (
        <li className="text-lg font-semibold"><a className={active ? "text-red-600" : ""} href={to}>{children}</a></li>
    )
}

const menuItem = [{
    name: "Top Up",
    link: "/topup",
    id: 1
}, {
    name: "Transaction",
    link: "/transaction",
    id: 2
}, {
    name: "Akun",
    link: "/account",
    id: 3
}]


const Navigation = () => {
    const { pathname } = useLocation();
    return (
        <nav className="flex-1">
            <ul className="flex justify-end items-center gap-8">
                {
                    menuItem.map((item) => {
                        return (
                            <NavigationItems to={item.link} active={pathname === item.link} key={item.id}>{item.name}</NavigationItems>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Navigation