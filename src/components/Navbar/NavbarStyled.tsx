import styled from "styled-components";

const NavbarStyled = styled.div`
  .list {
    position: fixed;
    bottom: 0;
    margin: 0;
    display: flex;
    width: 100%;
    justify-content: space-around;
    background-color: #e8e4e4;
    z-index: 9999;

    a {
      color: inherit;
    }

    .icon {
      padding: 1rem;
    }
  }
`;

export default NavbarStyled;
