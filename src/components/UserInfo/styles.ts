import styled from 'styled-components';

export const UserInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  border-left: 2px solid #000000;

  img {
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    margin: 2rem 0 2rem 0;
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
  }
`;