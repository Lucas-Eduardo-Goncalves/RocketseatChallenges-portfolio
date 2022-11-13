import styled from "styled-components";

export const ProjectArea = styled.section`
  display: flex;
  flex-direction: column;

  grid-column: 2;
  grid-row: 2 / span 3;

  > h3 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;

    svg {
      height: 2rem;
    }
  }

  > p {
    margin-top: 22px;
    margin-bottom: 47px;
  }

  aside {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
    }

    .firstChild {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .lastChild {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      span {
        height: 1rem;
        width: 1rem;
        background-color: yellow;
        border-radius: 50%;
      }
    }
  }
`;
