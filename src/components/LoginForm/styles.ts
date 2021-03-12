import styled from 'styled-components';

export const Container = styled.div`
  max-width: 28rem;
  max-height: 30rem;
  display: flex;
  flex-direction: column;

  form { 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;

    input {
      margin-top: 0.5rem;
      height: 3rem;
      width: 20rem;
      padding: 0 1rem;
      border: 1px solid var(--light-grey);
      border-radius: 0.8rem;
    }

    button {
      height: 3.1rem;
      width: 15rem;
      margin-top: 1rem;
      background: var(--bright-yellow);
      border-radius: 0.8rem;
      color: #000000;
      font-size: 1.2rem;
      font-weight: bold;
      transition: all 0.2s;

      :hover {
        cursor: pointer;
        background: #FEFF65;
      }
    }

    p {
      font-size: 0.7rem;
      color: var(--orange);
      font-weight: bold;
      padding: 0.3rem;
    }
  }
`;