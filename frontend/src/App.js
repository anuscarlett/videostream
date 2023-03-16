import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Navbar from "./nav";
import { lightTheme,darkTheme } from "./utils/theme";
import {
  BrowserRouter,Routes,
  Route
  
} from "react-router-dom";
import Home from "./pages/home";
import Video from "./pages/video";
import SignIn from "./pages/SignIn";

const Container=styled.div`
background-color:${({theme})=>theme.bg};
color:${({theme})=>theme.text};
height:100vh;
`;
const Main=styled.div`

background-color:${({theme})=>theme.bg};
`;
const Wrapper=styled.div`
padding :22px 56px;
`;
function App() {
  const[darkMode,setDarkMode]=useState(true)
  return (
    <ThemeProvider theme={darkMode?darkTheme:lightTheme}>
    <Container>
    <BrowserRouter>
     <Main>
    <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Wrapper>
        <Routes>
        <Route path='/'>   
          <Route index element={<Home type="random"/>}/>
          <Route path="signin" element={<SignIn/>}/>
          <Route path='video'>
            <Route path=':id' element={<Video/>}/>
          </Route>
        </Route>
       </Routes>
      </Wrapper>
      </Main> 
    </BrowserRouter>
    </Container>
    </ThemeProvider>
  );
}

export default App;
