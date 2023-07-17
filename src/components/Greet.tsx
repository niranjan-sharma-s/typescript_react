import React from 'react'

type GreetProps = {
    name:string
    messageCount?:number
    isLoggedIn:boolean
}

const Greet = (props: GreetProps) => {
  return (
      <div>
        <h1> 
            {props.isLoggedIn ? `Hello ${props.name}! you have ${props.messageCount} unread messages. `: 'Welcome Guest'}
           
        </h1>
    </div>
  )
}

export default Greet