import React from 'react'

export default function Greeting(props: any) {
  const {
    message= 'World'
  } = props

  return (
    <div>Hello, {greeting}!</div>
  )
}