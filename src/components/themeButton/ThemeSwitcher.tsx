import { useContext } from "react"
import ThemeContext from "context/ThemeContext"

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        style = {{
            position : 'fixed',
            top : 10,
            right : 10,
        }}
    >
        {theme === "dark" ? "Light" : "Dark"}
    </button>
  )
}

export default ThemeSwitcher