import React from 'react'
import Status from './Status'

type PageProps = {
    children: React.ReactNode
}

const Page = (props: PageProps) => {
  return (
    <>
    <h1>Data</h1>
    <div>{props.children}</div>
    </>
  )
}

export default Page