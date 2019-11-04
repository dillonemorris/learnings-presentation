import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 600px;
`;

const Column = styled.div`
  padding: 1rem;
  margin: 20px;
  width: 100%;

  @media (min-width: 500px) {
    width: calc(50% - 40px);
  }

  @media (min-width: 800px) {
    width: calc(33.3333% - 40px);
  }

  color: #fff;

  display: flex;
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
