import styled from 'styled-components';

export const Container = styled.div`
  width: 30rem;
  height: 30rem;
  border-radius: 2rem;
  border: 1px solid rgba(0,0,0, 0.1);
  box-shadow: 0px 5px 5px rgba(75, 93, 104, 0.1);
  background: #F2ECFC;
  padding: 5rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;

  #top-half {
    margin-top: 2rem;
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
      width: 25%;
    }
  }
`;