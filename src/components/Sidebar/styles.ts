import styled from 'styled-components';

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  grid-area: sidenav;
  padding: 0.5rem;
  margin-right: 1rem;
  border-right: 2px solid #000000;

  .logo-links {
    margin-bottom: 2rem;
  }

  .logo {
    display: flex;
    flex-direction: row;

    img {
      width: 3rem;
    }
  }

  .links {
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      padding: 1rem 3rem;
      text-decoration: none;
      color: #000000;
      transition: all 0.2s;
      border-radius: 2rem;
      font-size: 1.2rem;

      :hover {
        background: #ffffff;
      }
    }
  }

  .logout {
    button {
      width: auto;
      padding: 0 1rem;
      display: flex;
      justify-content: center;
      justify-items: center;
      align-content: center;
      align-items: center;
      height: 2rem;
      background: #fff;
      color: #000000;
      border-radius: 2rem;
      font-size: 1rem;

      svg {
        margin-right: 0.3rem;
      }
    }

  }

`;