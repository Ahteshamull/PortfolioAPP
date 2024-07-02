import { useContext } from 'react';
import { useState, createContext } from 'react';

let Theme = createContext()
const ThemeProvider = ({ children }) => {
    
    const [theme, setTheme] = useState('light')
    return (
        <Theme.Provider value={[theme, setTheme ]}>
            {children}
        </Theme.Provider>
    )

}
const useTheme = () => useContext(Theme)
export { useTheme,ThemeProvider}