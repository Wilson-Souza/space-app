import styled from "styled-components";

const StyledDiv = styled.div`
    width: 90%;
    height: 72vh;
    h1 {
        text-align: center;
        color: #ffffff;
        font-size: 96px;
        align-items: center;
    }
    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        opacity: 60%;
        border-radius: 20px;
    }
`

const ComingSoon = () => {
    return ( 
        <StyledDiv>
            <img src="/imagens/background.jpg" alt="" />
        </StyledDiv>
    );
}
 
export default ComingSoon;