import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import styled, { ThemeProvider } from "styled-components"
import { AuthContextProvider, MyRoutes, Light, Dark, TopNav, Login } from "./index"

import { createContext, useState } from "react"
import { useLocation } from "react-router-dom"

export const ThemeContext = createContext(null);
function App() {
  const [themeuse, setTheme] = useState("dark");
  const theme = themeuse === "light" ? "light" : "dark";
  const themeStyle = theme === "light" ? Light : Dark;
  const { pathname } = useLocation();
  const isLogin = pathname === "/login";

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider theme={themeStyle}>
          <AuthContextProvider>
            {isLogin ? (
              <Login />
            ) : (
              <AppLayout>
                <TopNav />
                <MainContent>
                  <MyRoutes />
                </MainContent>
              </AppLayout>
            )}
            <ReactQueryDevtools initialIsOpen={false} />
          </AuthContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

const AppLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgtotal};
`;

const MainContent = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
`;

export default App
