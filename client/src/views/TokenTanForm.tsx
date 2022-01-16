import React, { useContext } from 'react'
import { AppContext } from '../Context/Context'

interface Props {}

const TokenTanForm: React.FC = (props: Props) => {
  const { state, dispatch } = useContext(AppContext)
  console.log('state', state)
  return <div>tokenandtaninput</div>
}

export default TokenTanForm
