import styled from "styled-components";
import Title from "../Title";
import Tags from "./Tags";
import Popular from "./Popular";
import Image from "./Image";
import Input from "../TextField";

const GalleryContainer = styled.div`
  display: flex;
`;

const FluidSection = styled.section`
  flex-grow: 1;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
`;

const Gallery = ({ photos = [], onSelectedPhoto, onToggleFav, setTag, setFilter }) => {
  return (
    <>
      <Tags setTag = {setTag} />
      <GalleryContainer>
        <FluidSection>
          <Title>Navegue pela galeria <Input setFilter={setFilter}/></Title>
          <ImageContainer>
            {photos.map((photo) => (
              <Image
                onToggleFav={onToggleFav}
                onZoom={onSelectedPhoto}
                photo={photo}
                key={photo.id}
              ></Image>
            ))}
          </ImageContainer>
        </FluidSection>
        <Popular></Popular>
      </GalleryContainer>
    </>
  );
};

export default Gallery;
