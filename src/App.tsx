import { ThemeProvider } from "styled-components";
import { HomePageBlog } from "./pages/BlogHome";
import { GlobalTheme } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalTheme/>
      <HomePageBlog/>
    </ThemeProvider>
  )
}


