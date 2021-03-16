import styled from 'styled-components';

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