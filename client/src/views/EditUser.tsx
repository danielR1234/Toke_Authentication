import React, { useContext } from 'react'
import { AppContext } from '../Context/Context'

interface Props {}

const EditUser: React.FC = (props: Props) => {
  const { state, dispatch } = useContext(AppContext)
  console.log('state', state)
  return <div>User</div>
}

export default EditUser
