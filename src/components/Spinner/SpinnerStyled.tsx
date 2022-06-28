import styled from "styled-components";

const SpinnerStyled = styled.div`
  z-index: 100;
  position: sticky;
  display: flex;
  justify-content: center;
  align-content: center;
  color: #fdfffc;
  opacity: 0.75;

  span {
    font-size: 20px;
    font-weight: 500;
    user-select: none;
  }

  .invisible {
    display: none;
  }
`;
export default SpinnerStyled;
