import React from 'react'

const User = (props) => {
    console.warn(props)
    const {data}=props
  return (
    <div><h1>User component</h1>
    <h2>{props.data.name}</h2>
    <h2>{data.age}</h2>
    </div>
  )
}

export default User