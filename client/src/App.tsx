import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageLayout from './Components/PageLayout'
import { AppProvider } from './Context/Context'
import EditUser from './views/EditUser'
import EmailAuthentication from './views/EmailForm/EmailAuthentication'
import TokenAuthentication from './views/TokenAuthentication/TokenAuthentication'
import TokenTanForm from './views/TokenTanForm'

const App: React.FC = () => {
  return (
    <AppProvider>
      <PageLayout>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<TokenAuthentication />} />
            <Route path='/email' element={<EmailAuthentication />} />
            <Route path='/tokenandtan' element={<TokenTanForm />} />
            <Route path='/profile' element={<EditUser />} />
          </Routes>
        </BrowserRouter>
      </PageLayout>
    </AppProvider>
  )
}

export default App
