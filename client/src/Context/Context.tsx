import React, {
  createContext,
  Dispatch,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { Response } from '../types/interfaces'
import { InitialStateType } from '../types/types'
import axios from '../utils/axios'
import { Types } from './Types'
import { UserActions, UserReducer } from './UserReducer'

const initialState = {
  user: {
    authenticating: true,
    authenticated: false,
    user: {
      Token: null,
      Mailadresse: null,
      Tan: null,
      Hash: null,
      IBAN: null,
      Krankenkasse: null,
      Sozialversicherungsnummer: null,
      Steuerklasse: null,
      Steueridentifikationsnummer: null,
      Kirchensteuerpflichtig: null,
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

  const test = useCallback(() => {
    dispatch({
      type: Types.SET_AUTHENTICATING,
      payload: {
        value: true,
      },
    })
    if (Token) {
      axios.get<any, Response>(`/${Token}`).then((data) => {
        dispatch({
          type: Types.SET_USER,
          payload: {
            user: data.data.user,
          },
        })
      })
    } else {
      dispatch({
        type: Types.SET_AUTHENTICATING,
        payload: {
          value: false,
        },
      })
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
    test()
  }, [test])

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

export const useIsAuthenticating = () => {
  const {
    state: {
      user: { authenticating },
    },
  } = useContext(AppContext)
  return authenticating
}

export const useUser = () => {
  const {
    state: {
      user: { user },
    },
  } = useContext(AppContext)
  return user
}
