import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100dvh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  flex-wrap: wrap;

  gap: 8px;

  background-color: ${({ theme }) => theme.colors.background};
`;
