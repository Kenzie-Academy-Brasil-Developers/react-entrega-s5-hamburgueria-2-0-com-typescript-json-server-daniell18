import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f0f0f0;
  @media (min-width: 760px) {
    flex-direction: row;
  }
`;
