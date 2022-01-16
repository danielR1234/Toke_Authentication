import React, {
  createContext,
  Dispatch,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { InitialStateType } from '../types/types'
import { UserActions, UserReducer } from './UserReducer'

const initialState = {
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

  // Merge local state into context state
  useEffect(() => {
    setContextValue((contextState: AppContextState) => ({
      ...contextState,
      state,
    }))
  }, [state])

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}

export { AppProvider, AppContext }
