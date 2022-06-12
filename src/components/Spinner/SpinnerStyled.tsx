import styled from "styled-components";

const SpinnerStyled = styled.div`
  z-index: 100;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  position: fixed;
  align-items: center;
  width: 100%;
  height: 100vh;
  color: #fdfffc;
  opacity: 0.65;

  span {
    margin-top: 35px;
    font-size: 20px;
    font-weight: 500;
    user-select: none;
  }

  .invisible {
    display: none;
  }
`;
export default SpinnerStyled;
