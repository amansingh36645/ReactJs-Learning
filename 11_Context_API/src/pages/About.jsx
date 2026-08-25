import React, { useContext } from 'react'
import { ThemeChng } from '../context/ThemeContext'

const About = () => {

  const [theme,setTheme] = useContext(ThemeChng)

  return (
    <div style={theme === "dark" ? {backgroundColor:"black",color:"white"}:{backgroundColor:"white",color:"black"}}>About {theme}</div>
  )
}

export default About