import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import GlobalStyle from "../components/GlobalStyles";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const Background = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const App = () => {
  return (
    <Background>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <MainContainer>
          <SideBar />
          <Outlet />
        </MainContainer>
      </AppContainer>
      <Footer />
    </Background>
  );
};

export default App;
