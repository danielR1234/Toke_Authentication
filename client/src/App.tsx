import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageLayout from './Components/PageLayout'
import { AppProvider } from './Context/Context'
import { ProtectedRoute } from './Context/ProtectedRoute'
import EditUser from './views/EditUser'
import EmailAuthentication from './views/EmailAuthentication/EmailAuthentication'
import HashAuthentication from './views/TanHashAuthentication/HashAuthentication'
import TokenAuthentication from './views/TokenAuthentication/TokenAuthentication'

const App: React.FC = () => {
  return (
    <AppProvider>
      <PageLayout>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<TokenAuthentication />} />
            <Route path='/email' element={<EmailAuthentication />} />
            <Route path='/hash' element={<HashAuthentication />} />
            <Route
              path='/profile'
              element={
                <ProtectedRoute>
                  <EditUser />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </PageLayout>
    </AppProvider>
  )
}

export default App
