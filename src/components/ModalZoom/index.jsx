import styled from "styled-components";
import Image from "../Gallery/Image";
import IconButton from "../IconButton";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const StyledDialog = styled.dialog`
  position: absolute;
    background: transparent;
    padding: 0;
    border: 0;
    width: 60%;
    margin-top: 3%;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            right: 45px;
        }
    }
`;

const ModalZoom = ({ photo, onClose, onToggleFav }) => {
  return (
    <>
      {photo && (
        <Overlay>
          <StyledDialog open={!!photo} onClose={onClose}>
            <Image photo={photo} expanded={true} onToggleFav={onToggleFav}/>
            <form method="dialog">
              <IconButton formMethod="dialog">
                <img src="/icones/fechar.png" alt="Icone de fechar" />
              </IconButton>
            </form>
          </StyledDialog>
        </Overlay>
      )}
    </>
  );
};

export default ModalZoom;
