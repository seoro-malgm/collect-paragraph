import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1rem;
`;

const LeftArea = styled.div``;

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <LeftArea>
          <h1>logo</h1>
        </LeftArea>
      </HeaderContainer>
    </>
  );
}
