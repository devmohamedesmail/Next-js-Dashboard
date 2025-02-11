'use client'
import React, { createContext, useState } from 'react'


export const ThemeContext = createContext()
export default function ThemeProvider({ children }) {
  const [themeOptions, setthemeOptions] = useState({
    "primary": "#023047",
    "secondary": "#fb8500",
    "sidebar": "#023047",
    "header": "#023047"
  })
  return (
    <ThemeContext.Provider value={{ themeOptions, setthemeOptions }}>
      {children}
    </ThemeContext.Provider>
  )
}
