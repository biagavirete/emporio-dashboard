import styled from 'styled-components';

export const MainContainer = styled.div`
  width: calc(100vw - 30rem);
  height: calc(100vh - 10rem);
  background: var(--background);
  border-radius: 2rem;
  padding: 3rem 2rem;
  box-shadow: 0px 5px 5px rgba(75, 93, 104, 0.1);
  display: grid;
  grid-template-columns: 25% 50% 25%;
  grid-template-areas:
  "sidenav content userinfo";

  .content-area {
    overflow: scroll;
  }
`;