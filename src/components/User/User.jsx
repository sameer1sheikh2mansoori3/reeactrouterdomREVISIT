import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const hulk = useParams()
  return (
    <div>User{hulk.userid}</div>
  )
}

export default User