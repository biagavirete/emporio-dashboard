import styled from 'styled-components';

export const MainContainer = styled.div`
  width: calc(100vw - 30rem);
  height: calc(100vh - 10rem);
  background: #ffffff;
  border-radius: 2rem;
  box-shadow: 0px 5px 5px rgba(75, 93, 104, 0.1);
  display: grid;
  grid-template-columns: 25% 50% 25%;
  grid-template-areas:
  "sidenav content userinfo";

  .content-area {
    display: flex;
    flex-direction: column;
    padding: 3rem 0 3rem 0;
    overflow: auto;

    h1 {
      margin-bottom: 2rem;
    }

    .data-area {
      display: flex;
      flex-direction: column;
      justify-content: center;
      justify-items: center;
      align-content: center;
      align-items: center;
      margin-top: 2rem;

      .data {
        margin-top: 2rem;
        display: flex;
        flex-direction: row; 

        > div {
          margin-right: 2rem;
        }
      }
    }
  }

  @media(max-width: 1280px) {
    .content-area {

    .data-area {

      .data {
        margin-top: 2rem;
        display: flex;
        flex-direction: column; 

        > div {
          margin-bottom: 2rem;
        }
      }
    }
  }
  }
`;

export const SquareDiv = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 1rem;
  box-shadow: 0px 5px 5px rgba(75, 93, 104, 0.1);
  background-color: var(--light-grey);
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  p {
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: 700;
    font-size: 3rem;
    margin-bottom: 0.5rem;
    color: var(--yellow);
  }

  @media(max-width: 1028px) {
    width: 6rem;
    height: 6rem;

    p {
      font-size: 2rem;
    }
    
    strong {
      font-size: 0.8rem;
    }
  }
`;