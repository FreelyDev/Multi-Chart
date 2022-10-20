import { useContext } from "react"
import ThemeContext from "context/ThemeContext"

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext)
  
  return (
    <div className={theme} >
      {children}
    </div>
  )
}

export default Layout