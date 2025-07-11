import { useState } from 'react'

import './App.css'
// import './css/popup-styles.css'
// import RegisterForm from './components/session/login-register-form'
import LoginRegisterForm from './components/session/login-register-form'
import Tasklist from './components/Tasklist/tasklist'
import LoginPage from './pages/LoginRegisterPage'
import TasksPage from './pages/TasksPage'
import { useEffect } from 'react'
import { getUserToken } from './controllers/userController'
import { UpdateProvider } from './context/updateContext'
import { PopupDisplayProvider } from './context/popupDisplaysContext'
import { UserProvider } from './context/userContext'

function App() {
  const [user, setUser] = useState(false)

  useEffect(() => {
    const user = getUserToken()
    if (user) {
      setUser(user)
    }
  }, [])

  return (
    <>
      <UpdateProvider>
        <PopupDisplayProvider>
          <UserProvider>

            {user ? <TasksPage/> : <LoginPage/>}
          
          </UserProvider>
        </PopupDisplayProvider>
      </UpdateProvider>
    </>
  )
}

export default App
