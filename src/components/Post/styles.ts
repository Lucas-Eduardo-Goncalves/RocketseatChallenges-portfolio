import styled from "styled-components";

export const PostArea = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  grid-column: 2 / 4;

  img {
    height: 128px;
    width: 128px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 28px;

    h4 {
      font-size: 1.5rem;
      margin-bottom: 8px;
    }

    .lastChild {
      margin-top: 11px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 10px;
    }
  }
`;
