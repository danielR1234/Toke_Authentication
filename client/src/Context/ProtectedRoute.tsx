import { RouteProps, Route, Navigate } from 'react-router-dom'
import { useIsAuthenticated } from './Context'

export const ProtectedRoute: React.FC<RouteProps> = (props) => {
  const authenticated = useIsAuthenticated()
  const { children } = props

  return (
    <>
      {authenticated && <Route {...props}>{children}</Route>}
      {!authenticated && <Navigate to='/' />}
    </>
  )
}
