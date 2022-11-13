import styled from "styled-components";

export const AvatarArea = styled.section`
  grid-column: 1;
  grid-row: 1 / 4;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  img {
    width: 128px;
    height: 128px;

    border: 2px solid var(--primary);
    border-radius: 50%;
  }

  h1 {
    margin-top: 30px;
    font-size: 2rem;
  }

  p {
    margin-top: 10px;
  }
`;

export const MyProjects = styled.section`
  grid-row: 1;
  grid-column: 2 / 4;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Links = styled.nav`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  grid-row: 4 / 6;

  div {
    display: flex;
    align-items: center;
    gap: 20px;

    svg {
      font-size: 24px;
    }
  }
`;

export const RecentPosts = styled.section`
  grid-row: 4;
  grid-column: 2 / 4;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Tecnologies = styled.nav`
  grid-column: 1;
  grid-row: 6 / 9;
  h2 {
    font-size: 1.2rem;
    margin: 25px 0 8px;
  }
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    gap: 5px;

    li {
      color: #000000;
      background-color: var(--secondary);
      padding: 0.75rem;
      border-radius: 0.5rem;
    }
  }
`;
