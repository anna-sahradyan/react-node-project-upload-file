import React from 'react';
import styled from "styled-components";
const Container = styled.div`
  width: 100vw;
  height: 30px;
  background-color: #008080;
  color: white;
  justify-content: center;
  align-items: center;
  display: flex;
`

const Header = () => {
    return (
        <>
            <Container >
                <h2>UPLOADING FILES TO THE SERVER</h2>
            </Container>

        </>
    );
};

export default Header;