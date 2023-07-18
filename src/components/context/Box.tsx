import React ,{useContext} from 'react'
import { themeContext } from './ThemeContext'

const Box = () => {
    const theme = useContext(themeContext)
  return (
    <div style={{backgroundColor:theme.primary.backgroundColor , color:theme.primary.color}}>Box</div>
  )
}

export default Box