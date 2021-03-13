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

export const Table = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0px 5px 5px rgba(75, 93, 104, 0.1);

  th {
    padding: 1rem 1rem;
    font-size: 1.2rem;
    font-family: 'Open Sans Condensed', sans-serif;
    text-align: left;
    
}

  tbody {
    tr {
      border-bottom: 1px solid #dddddd;

      td {
        padding: 1rem 1rem;

        button {
          background: transparent;
          
          :hover {
            cursor: pointer;
          }
        }
      }
    }
  }
`;

export const NewUserButton = styled.button`
  height: 3rem;
  width: 12rem;
  margin-top: 1rem;
  background: var(--bright-yellow);
  border-radius: 0.8rem;
  color: #000000;
  font-size: 1rem;
  font-weight: bold;
  transition: all 0.2s;
  margin-bottom: 1rem;

    :hover {
      cursor: pointer;
      background: #FEFF65;
      box-shadow: 0px 5px 5px rgba(75, 93, 104, 0.1);
      }
`;