import styled from "styled-components";
import NavItem from "../NavItem";
import { useState } from "react";

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;
`;

const SideBar = () => {
  const [activeLink, setActiveLink] = useState(""); // Estado para rastrear o link ativo

  return (
    <aside>
      <nav>
        <StyledList>
          <NavItem
            active={activeLink === ""}
            setActiveLink={setActiveLink}
            activeIcon="/icones/home-ativo.png"
            inactiveIcon="/icones/home-inativo.png"
            path=""
          >
            Início
          </NavItem>
          <NavItem
            active={activeLink === "more-views"}
            setActiveLink={setActiveLink}
            activeIcon="/icones/mais-vistas-ativo.png"
            inactiveIcon="/icones/mais-vistas-inativo.png"
            path="more-views"
          >
            Mais visto
          </NavItem>
          <NavItem
            active={activeLink === "more-likes"}
            setActiveLink={setActiveLink}
            activeIcon="/icones/mais-curtidas-ativo.png"
            inactiveIcon="/icones/mais-curtidas-inativo.png"
            path="more-likes"
          >
            Mais Curtidas
          </NavItem>
          <NavItem
            active={activeLink === "newest"}
            setActiveLink={setActiveLink}
            activeIcon="/icones/novas-ativo.png"
            inactiveIcon="/icones/novas-inativo.png"
            path="newest"
          >
            Mais Novas
          </NavItem>
          <NavItem
            active={activeLink === "surprise"}
            setActiveLink={setActiveLink}
            activeIcon="\icones\surpreenda-me-ativo.png"
            inactiveIcon="\icones\surpreenda-me-inativo.png"
            path="surprise"
          >
            Surpresa
          </NavItem>
        </StyledList>
      </nav>
    </aside>
  );
};

export default SideBar;
