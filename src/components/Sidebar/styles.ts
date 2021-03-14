import styled from 'styled-components';

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  grid-area: sidenav;
  padding: 3rem 0 3rem 0;
  margin-right: 1rem;
  background-color: var(--yellow);
  border-radius: 2rem 0 0 2rem;
  color: #ffffff;

  .selected {
    background: #ffffff;
  }

  .logo-links {
    margin-bottom: 2rem;
  
    .logo {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 2rem;
      margin: 0 1rem 2rem;

      img {
        width: 3rem;
        margin-right: 0.5rem;
      }

      strong {
        font-family: 'Open Sans Condensed', sans-serif;
        font-size: 1.2rem;
      }
    }

    .links {
      display: flex;
      flex-direction: column;
      align-items: center;
      align-content: center;
      justify-content: center;
      justify-items: center;

      a {
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        justify-items: center;
        text-decoration: none;
        color: #000000;
        transition: all 0.2s;
        border-radius: 2rem;
        width: calc(100% - 2rem);
        height: 3rem;
        margin-bottom: 0.5rem;

        svg {
          margin-right: 0.5rem;
          font-size: 1.2rem;
        }

        strong {
          font-family: 'Open Sans Condensed', sans-serif;
          font-size: 1.2rem;
          font-weight: 700;
        }

        :hover {
          background: #ffffff;
        }

        .selected {
          background: #ffffff;
        }
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

      :hover {
        box-shadow: 0px 5px 5px rgba(75, 93, 104, 0.1);
        cursor: pointer;
      }
    }
  }
  @media(max-width: 1258px) {
    .selected {
    background: transparent;
    }

    .links {
      a {
        width: auto;

        :hover {
          cursor: pointer;
          background: transparent;
        }
      }
    }

    .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 2rem;
    margin: 0 1rem 2rem;

    img {
      width: 3rem;
      margin-right: 0.5rem;
    }

    strong {
      display: none;
    }
  }
  }

  @media(max-width: 980px) {
    .links {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    justify-items: center;
    text-align: center;

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      align-content: center;
      justify-content: center;
      justify-items: center;
      padding: 0;
      
      strong {
        display: none;
      }

      svg {
        font-size: 2rem;
      }

      :hover {
        cursor: pointer;
        background: transparent;
      }
    }
  }

  .logout {
    button {
      width: auto;
      height: auto;
      padding: 0 1rem;
      display: flex;
      justify-content: center;
      justify-items: center;
      align-content: center;
      align-items: center;
      background: #fff;
      color: #000000;

      svg {
        font-size: 2rem;
      }

      strong {
        display: none;
      }

      :hover {
        box-shadow: 0px 5px 5px rgba(75, 93, 104, 0.1);
        cursor: pointer;
      }
    }
  }
  }
`;