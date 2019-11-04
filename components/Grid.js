import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 20px;
  height: 600px;
`;

const Column = styled.div`
  display: flex;
  padding: 1rem;

  color: #fff;

  justify-content: center;
  align-items: center;
  background-color: cornflowerblue;
`;

const FlexGrid = () => {
  return (
    <>
      <Container>
        <Column>item 1</Column>
        <Column>item 2</Column>
        <Column>item 3</Column>
        <Column>item 4</Column>
        <Column>item 5</Column>
        <Column>item 6</Column>
      </Container>
    </>
  );
};

export default FlexGrid;
