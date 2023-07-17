import React from 'react'

type EmployeeList = {
    names: {
        firstName: string,
        lastName: string,
        designation: string
    }[]
}

const EmployeeList = (props: EmployeeList) => {
    return (
        <div><h4> Employee list</h4>
            {
                props.names.map((name) => {
                    return (<>
                        <div key={name.firstName}>{name.firstName} {name.lastName}</div>
                        <div> {name.designation}</div>
                    </>)
                })
            }

        </div>
    )
}

export default EmployeeList