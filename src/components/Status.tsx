import React from 'react'

type StatusProps = {
    //status: string, // TODO define type for possible statuses? or just use a generic "string
    status: 'Loading' | 'Success' | 'Error'
}

const Status = (props: StatusProps) => {
    if(props.status === 'Loading'){
        return <h1>Loading...</h1>
    } else if(props.status === 'Success'){
        return <h1>Fetching data successful</h1>
    } else if (props.status === 'Error'){
        return <h1>Error fetching data</h1>
    }
  return (
    <div>Status</div>
  )
}

export default Status