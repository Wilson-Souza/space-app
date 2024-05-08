import { AiFillHeart, AiOutlineExpandAlt } from "react-icons/ai";
import styled from "styled-components";

const StyledFigure = styled.figure`
  width: ${(props) => (props.$expanded ? "90%" : "45%")};
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
    object-fit: cover;
  }
  figcaption {
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;
    h3 {
      font-family: "GandhiSansBold";
      margin: 0;
      font-size: 22px;
      border-bottom: 5px solid black;
      padding-bottom: 5px;
      text-align: center;
    }
  }
  footer {
    display: flex;
    justify-content: space-between;
  }
`;

const StyledIcon = styled.div`
  margin-top: 12px;
  cursor: pointer;
  width: 70px;
  display: flex;
  justify-content: space-between;
`;

const Image = ({ photo, expanded = false, onZoom, onToggleFav }) => {
  const colorIcon = photo.fav ? "red" : "white";

  return (
    <StyledFigure $expanded={expanded} id={`foto-${photo.id}`}>
      <img src={photo.path} alt="" />
      <figcaption>
        <h3>{photo.titulo}</h3>
        <footer>
          <p>{photo.fonte}</p>
          <p>{photo.tagTitulo}</p>
          <StyledIcon>
            <AiFillHeart
              color={colorIcon}
              onClick={() => onToggleFav(photo)}
              size={25}
            ></AiFillHeart>
            {!expanded && (
              <AiOutlineExpandAlt
                aria-hidden={expanded}
                onClick={() => onZoom(photo)}
                size={25}
              ></AiOutlineExpandAlt>
            )}
          </StyledIcon>
        </footer>
      </figcaption>
    </StyledFigure>
  );
};

export default Image;
