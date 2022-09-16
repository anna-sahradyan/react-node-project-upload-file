import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5),
  rgba(255, 255, 255, 0.5)),
  url("/image/upload.jpg") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;

`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

export const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;

  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;
export const ButtonUpload = styled.input`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;

  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;
export const BoxUpload = styled.div`
  position: absolute;
  transform: translate(-300%, -130%);
  height: 25%;
  z-index: 2;
`;
export const Image = styled.img`
  position: absolute;
  transform: translate(-300%, -130%);
  height: 25%;
  z-index: 2;
`;
export const Ul = styled.ul`
  list-style-type: none;

`;
export const Li = styled.li`


`;

