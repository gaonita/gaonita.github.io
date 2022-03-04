import React, {useState} from 'react'

export const themes ={
    light:{
        background:'#ffffff',
        color:'#000'
    },
    dark:{
        background: '#060316',
        color:'#fff'
    }
}

const ThemeContextObj = {
    theme:themes.dark,
    toggleTheme:()=>{}
}
export const ThemeContext = React.createContext(ThemeContextObj)

export const ThemeProvider = ({children})=>{
 const [theme, setTheme] = useState(themes.light);
 const toggleTheme = () =>{
     setTheme(theme === themes.dark? themes.light:themes.dark)
 }
 document.body.style.backgroundColor = theme.background;
 return(
     <ThemeContext.Provider value={{theme, toggleTheme}}>
         {children}
     </ThemeContext.Provider>
 )
}
