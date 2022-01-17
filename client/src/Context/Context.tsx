import React, {
  createContext,
  Dispatch,
  useCallback,
  useEffect,
  useReducer,
  useContext,
  useState,
} from 'react'
import { Response } from '../types/interfaces'
import { InitialStateType } from '../types/types'
import axios from '../utils/axios'
import { UserActions, UserReducer } from './UserReducer'
import { Types } from './Types'

const initialState = {
  user: {
    authenticated: false,
    user: {
      Token: null,
      Mailadresse: null,
      Tan: null,
      Hash: null,
      IBAN: null,
      KrankenKasse: null,
      Sozialversicherungsnummer: null,
      Steurklasse: null,
    },
  },
}

interface AppContextState {
  state: InitialStateType
  dispatch: Dispatch<UserActions>
}

// AppContext stores all relevant Data
const AppContext = createContext<AppContextState>({
  state: initialState,
  dispatch: () => null,
})

const mainReducer = ({ user }: InitialStateType, action: UserActions) => ({
  user: UserReducer(user, action),
})

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)

  const [contextValue, setContextValue] = useState<AppContextState>({
    state,
    dispatch,
  })

  const Token = localStorage.getItem('Token')

  const persistUser = useCallback(async () => {
    try {
      if (Token) {
        const data = await axios.get<any, Response>(`/${Token}`)
        if (data.data.user) {
          dispatch({
            type: Types.SET_USER,
            payload: {
              user: data.data.user,
            },
          })
        }
      }
    } catch (err) {
      console.error(err)
    }
  }, [Token])

  // Merge local state into context state
  useEffect(() => {
    setContextValue((contextState: AppContextState) => ({
      ...contextState,
      state,
    }))
  }, [state])

  useEffect(() => {
    persistUser()
  }, [persistUser])

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}

export { AppProvider, AppContext }

export const useIsAuthenticated = () => {
  const {
    state: {
      user: { authenticated },
    },
  } = useContext(AppContext)
  return authenticated
}
