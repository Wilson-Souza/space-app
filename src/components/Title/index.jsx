import styled from "styled-components";

const Title = styled.h2`
    color: #7B78E6;
    font-size: 32px;
    text-align: ${ props => props.$alinhamento ? props.$alinhamento : 'left' };
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    width: 90%;
    align-items: center;
`

export default Title