import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled.li`
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 30px;
  cursor: pointer;
  color: ${(props) => (props.$active ? "#7B78E5" : "#D9D9D9")};
  font-family: ${(props) =>
    props.$active ? "GandhiSansBold" : "GandhiSansRegular"};
  display: flex;
  align-items: center;
  gap: 15px;
`;

const NavItem = ({
  activeIcon,
  inactiveIcon,
  path,
  children,
  active,
  setActiveLink,
}) => {

  return (
    <NavLink
      to={path}
      onClick={() => setActiveLink(path)}
    >
      <StyledLink $active={active}>
        <img src={active ? activeIcon : inactiveIcon} alt="" />
        {children}
      </StyledLink>
    </NavLink>
  );
};

export default NavItem;
