import React, { createContext, useState } from 'react'

export const ThemeChng = createContext();

const ThemeContext = (props) => {

  const [theme,setTheme] = useState('dark')
  
  

  return (
    <ThemeChng.Provider value={[theme,setTheme]}>
      {props.children}
    </ThemeChng.Provider>
  )
}

export default ThemeContext