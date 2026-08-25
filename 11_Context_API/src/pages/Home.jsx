import React, { useContext } from 'react'
import { ThemeChng } from '../context/ThemeContext'



const Home = () => {
  const [theme,setTheme] = useContext(ThemeChng)
  return (
    <div style={theme === 'dark' ? {backgroundColor:"black",color:"white"} : {backgroundColor:"white",color:"black"}} >Home {theme}</div>
  )
}

export default Home