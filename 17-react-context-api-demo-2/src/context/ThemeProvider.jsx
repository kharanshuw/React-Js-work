// src/context/ThemeContext.js
import { createContext, useContext } from 'react';

const ThemeContext = createContext();

/**
 * ThemeProvider component to provide theme context to app
 * @param {Object} props - component props
 * @param {ReactNode} props.children - app component
 * @param {Object} props.value - theme context value
 * @returns {ReactElement}
 */
export const ThemeProvider = ({ children, value }) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);


export default ThemeProvider;