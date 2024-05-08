import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  background-color: #04244F;
  justify-content: space-around;
  padding: 10px 0;
  width: 100%;
  margin-top: 20px;

  p {
    font-size: 18px;
    font-weight: 500;
    color: aliceblue;
    align-items: center;
  }

  img {
    align-items: center;
    padding: 10px;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <img src="/imagens/sociais/facebook.svg" alt=""></img>
        <img src="/imagens/sociais/instagram.svg" alt=""></img>
        <img src="/imagens/sociais/twitter.svg" alt=""></img>
      </div>
      <p>Desenvolvido por Wilson Souza</p>
    </StyledFooter>
  );
};

export default Footer;
