import styled from "styled-components";

export const ContainerCart = styled.div`
  display: flex;
  margin: 5px;
  gap: 3px;
  width: 200px;
  justify-content: space-between;
  img {
    width: 50px;
    background-color: #f5f5f5f5;
  }
  p {
    margin: 0px;
  }
  h2 {
    text-align: center;
  }
  button {
    color: red;
  }
`;
export const NumberQtd = styled.div`
  color: black;
`;
export const ContainerQtd = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  margin-top: 10px;
  width: 130px;
`;
export const ContainerAlt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    text-align: center;
  }
`;
export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const NumberCart = styled.div`
  background-color: orange;
  color: white;
  height: 15px;
  width: 15px;
  font-size: 12px;
  border-radius: 10px;
  position: relative;
  left: 30px;
  top: 20px;
`;
