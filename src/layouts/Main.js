import styled from "styled-components";
import Header from "../components/Header";
const Main = styled.section`
  .container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media all and (max-width: 576px) {
    .container {
      max-width: 100%;
    }
  }
  @media all and (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }
  @media all and (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }
  @media all and (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }
  @media all and (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }
  @media all and (min-width: 1440px) {
    .container {
      max-width: 1320px;
    }
  }
`;

const Contents = ({ children }) => {
  return (
    <>
      <Header />
      <Main>
        <div className="container">{children}</div>
      </Main>
    </>
  );
};

export default Contents;
