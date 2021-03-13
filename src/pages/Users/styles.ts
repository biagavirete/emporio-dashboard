import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  input[type=text], input[type=email], input[type=password] {
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
        box-shadow: 0px 5px 5px rgba(75, 93, 104, 0.1);
      }
    }

    p {
      font-size: 0.7rem;
      color: var(--orange);
      font-weight: bold;
      padding: 0.3rem;
    }
`;