import { Navigate, RouteProps } from 'react-router-dom'
import { useIsAuthenticated, useIsAuthenticating } from './Context'

export const ProtectedRoute: React.FC<RouteProps> = (props) => {
  const authenticated = useIsAuthenticated()
  const authenticating = useIsAuthenticating()
  const { children } = props

  return (
    <>
      {authenticated && children}
      {!authenticated && authenticating && <div>...ladogin</div>}
      {!authenticated && !authenticating && <Navigate to='/' />}
    </>
  )
}
