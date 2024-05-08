import styled from "styled-components";

const StyledInput = styled.input`
  height: 56px;
  padding: 10px 20px;
  border-radius: 10px;
  border: 2px solid;
  border-color: #c98cf1;
  background: transparent;
  box-sizing: border-box;
  width: 25vw;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
`;

const StyledContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledIcon = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px;
  height: 38px;
`;

const Input = ({setFilter}) => {
  return (
    <StyledContainer>
      <StyledInput onChange={(event) => setFilter(event.target.value)} placeholder="O que você procura?"></StyledInput>
      <StyledIcon src="/imagens/search.png" alt="" />
    </StyledContainer>
  );
};

export default Input;
