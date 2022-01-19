import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PageLayout } from './Components'
import { ProtectedRoute } from './Context/ProtectedRoute'
import { EditUser } from './views/EditUser'
import { EmailAuthentication } from './views/EmailAuthentication'
import { HashAuthentication } from './views/HashAuthentication'
import { TokenAuthentication } from './views/TokenAuthentication'

const App: React.FC = () => {
  return (
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
  )
}

export default App
