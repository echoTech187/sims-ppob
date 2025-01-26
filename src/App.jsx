import HomePage from './Pages/home'
import { getSession } from './components/Fragments/FormLogin/auth'

function App() {
  const token = getSession()
  if (!token) {
    window.location.href = '/login'
  } else {
    return (
      <>
        <HomePage />
      </>
    )
  }
}
export default App
