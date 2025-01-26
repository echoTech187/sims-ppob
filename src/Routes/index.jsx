import App from '../App'
import LoginPage from '../Pages/login'
import RegisterPage from '../Pages/register'
import TopUpPage from '../Pages/topup'
import PaymentPage from '../Pages/payment'
import TransactionPage from '../Pages/transaction'
import AccountPage from '../Pages/account'
const routerList = [{
    path: "/",
    element: <App />
},
{
    path: "/login",
    element: <LoginPage />
},
{
    path: "/register",
    element: <RegisterPage />
},
{
    path: "/topup",
    element: <TopUpPage />
},
{
    path: "/payment/:id",
    element: <PaymentPage/>
},
{
    path: "/transaction",
    element: <TransactionPage />
},
{
    path:"/account",
    element:<AccountPage/>
}
];

export default routerList