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

  .table-users {
    display: flex;
    justify-content: center;
  }

  .new-user {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
  }

  .new-product {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
  }

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
      display: flex;
      justify-content: center;

      .data {
        margin-top: 2rem;
        display: flex;
        flex-direction: row; 
        justify-content: center;

        > div {
          margin-right: 0.3rem;
        }
      }
    }
  }
  }
`;
