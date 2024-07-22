import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100dvh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Card = styled.div`
  width: 600px;
  height: 500px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.primary};

  border-radius: 8px;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  input {
    width: calc(200px - 22px);
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 5px;

    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};

    padding: 10px;
    margin: 4px;

    &:focus,
    &:focus-within,
    &:focus-visible {
      border: 1px solid ${({ theme }) => theme.colors.text};
      outline: none;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.text};
      opacity: 0.5;
    }
  }

  button {
    padding: 10px;

    border-radius: 5px;
    border: none;
    background-color: ${({ theme }) => theme.colors.secondary};

    margin-top: 10px;
    width: 200px;

    font-weight: 700;

    color: #fff;

    transition: opacity 0.5s;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
`;

export const OnlineCounter = styled.span`
  color: #878787;
  font-size: 30px;
  text-align: left;
  position: absolute;

  top: 20px;
  left: 20px;
`;

export const OnlinePlayers = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  position: absolute;

  top: 50px;
  left: 20px;

  gap: 8px;

  width: 400px;
  height: auto;
  padding: 10px 0px;

  color: #fff;
`;
