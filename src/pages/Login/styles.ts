import styled from 'styled-components';

export const Container = styled.div`
  width: auto;
  height: 30rem;
  border-radius: 2rem;
  border: 1px solid rgba(0,0,0, 0.1);
  box-shadow: 0px 5px 5px rgba(75, 93, 104, 0.1);
  background: #F2ECFC;
  padding: 0 3rem 0 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
  align-items: center;
  text-align: center;

  .left {
    img {
      width: 20rem;
    }
  }

  .right {
  h3 {
    margin-bottom: 1rem;
  }

  #top-half {
    /* margin-top: 2rem; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    justify-items: center;
    align-items: center;

    img {
      width: 35%;
      margin: 0;
    }

    h1 {
      padding: 0;
      margin: 0;
    }
  }

  #bottom-half {
    display: flex;
    justify-items: center;
    justify-content: center;
    margin-top: 2rem;

    img {
      width: 5rem;
    }
  }
  }

  @media(max-width: 984px) {
    .left {
      display: none;
    }
  }

`;

export const Form = styled.div`
  max-width: 28rem;
  max-height: 30rem;
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
        box-shadow: 0px 5px 5px rgba(75, 93, 104, 0.1);
      }
    }

    p {
      font-size: 0.7rem;
      color: var(--orange);
      font-weight: bold;
      padding: 0.3rem;
    }

  @media(max-width: 580px) {
    max-width: 24rem;

    input {
      margin-top: 0.5rem;
      height: 3rem;
      width: 15rem;
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
  }

`;