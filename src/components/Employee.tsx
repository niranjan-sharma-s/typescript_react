import React from 'react'

type EmployeeName = {
    name:{
        firstName: string,
        lastName?: String
    }
}

const Employee = (props: EmployeeName ) => {
  return (
    <div>
        <h2>Employee : {props.name.firstName} {props.name.lastName}</h2>
    </div>
  )
}

export default Employee