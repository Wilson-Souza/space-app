import styled from "styled-components";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import { useEffect, useState } from "react";
import photos from "../fotos.json";
import ModalZoom from "../components/ModalZoom";


const GalleryContent = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Inicio = () => {
  const [photosGallery, setPhotosGallery] = useState(photos);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const onToggleFav = (photo) => {
    if (photo.id === selectedPhoto?.id) {
      setSelectedPhoto({
        ...selectedPhoto,
        fav: !selectedPhoto.fav,
      });
    }
    setPhotosGallery(
      photosGallery.map((photoGallery) => {
        return {
          ...photoGallery,
          fav: photoGallery.id === photo.id ? !photo.fav : photoGallery.fav,
        };
      })
    );
  };

  const [tag, setTag] = useState(0);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fotosFiltradas = photos.filter((photo) => {
      const filterByTag = !tag || photo.tagId === tag;
      const filtroByText =
        !filter || photo.titulo.toLowerCase().includes(filter.toLowerCase());
      return filterByTag && filtroByText;
    });
    setPhotosGallery(fotosFiltradas);
  }, [filter, tag]);

  return (
    <GalleryContent>
      <Banner
        text={"A galeria mais completa de fotos do espaço!"}
        backgroundImage={"imagens/banner.png"}
      />
      <Gallery
        onSelectedPhoto={(photo) => setSelectedPhoto(photo)}
        photos={photosGallery}
        onToggleFav={onToggleFav}
        setTag={setTag}
        setFilter={setFilter}
      />
      <ModalZoom
        onToggleFav={onToggleFav}
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />
    </GalleryContent>
  );
};

export default Inicio;
