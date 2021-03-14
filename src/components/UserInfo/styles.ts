import styled from 'styled-components';

export const UserInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  padding: 3rem 0 3rem 0;
  border-left: 2px solid #F8F8FA;

  img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    border: 0.2rem solid #000000;
    margin: 2rem 0 2rem 0;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  @media(max-width: 1234px) {
    img {
      width: 5rem;
      height: 5rem;
    }
  }

  @media(max-width: 1152px) {
    p {
      display: none;
    }
  }

`;

export const Badge = styled.div`
  width: auto;
  background: var(--dark);
  border: 1px solid #000000;
  border-radius: 0.3rem;
  padding: 0 0.5rem;

  strong {
    color: #ffffff;
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: 700;
  }
`;