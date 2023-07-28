import { ThemeProvider } from "styled-components";
import { HomePageBlog } from "./pages/BlogHome";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles/>
      
      <HomePageBlog/>
    </ThemeProvider>
  )
}


