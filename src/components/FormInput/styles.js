import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid #fff;
  border-radius: 5px;
  background-color: #2ac;
  padding: 5px;
  width: 80%;
  max-width: 300px;
  button {
    padding: 5px;
    background-color: #0000cd;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 5px;
    :hover {
      border-color: #98fb98;
      color: #98fb98;
    }
  }
  input {
    width: 120px;
    padding: 5px;
    margin-right: 5px;
  }
`;
