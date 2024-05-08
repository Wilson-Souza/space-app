import styled from "styled-components";
import tags from "./tags.json";


const StyledButton = styled.button`
    width: auto;
    background: rgba(217, 217, 217, 0.3);
    box-sizing: border-box;
    margin: 15px;
    font-size: 24px;
    color: #FFFFFF;
    border-radius: 10px;
    padding: 12px;
    transition: background-color 0.3s ease;
    cursor: pointer;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    };
    &:focus {
      border-color: #C98CF1;
      background-color: rgba(117, 17, 67, 0.3);
    }
`

const StyledContainer = styled.div`
    display: flex;
    
`
const StylesTitle = styled.h3`
    font-size: 24px;
    margin-right: 36px;
    color: #D9D9D9;
`

const Tags = ({setTag}) => {
  return (
    <StyledContainer>
      <StylesTitle>Busque por tags:</StylesTitle>
      {tags.map(tag => <StyledButton onClick={() => setTag(tag.tag)} key={tag.id}>{tag.titulo}</StyledButton>)}
    </StyledContainer>
  );
};

export default Tags;
