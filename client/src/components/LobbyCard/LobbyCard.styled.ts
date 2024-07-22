import styled from "styled-components";

import defaultAvatar from "@/images/default-avatar.png";

export const Card = styled.div`
  width: 300px;
  height: 150px;

  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.primary};

  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
`;

export const CardDescription = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Description = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  gap: 20px;

  & > p {
    font-weight: 700;
    margin: 0%;
  }

  & > span {
    font-weight: 400;
    color: #aaa;
  }
`;

export const JoinButton = styled.button`
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.secondary};

  border: none;
  border-radius: 15px;

  &:hover {
    cursor: pointer;
  }
`;

export const ArrowRightIcon = styled.div`
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 0 10px 17px 10px;
  border-color: transparent transparent
    ${({ theme }) => theme.colors.neutral[100]} transparent;
  transform: rotate(90deg);
`;

export const CardContent = styled.div`
  width: 100%;

  height: 50%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const PlayerInfo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const PlayerAvatar = styled.img.attrs(({ src }) => ({
  src: src || defaultAvatar.src,
}))`
  width: 40px;
  height: 40px;
  object-fit: cover;

  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
`;

export const PlayerUsername = styled.p`
  font-weight: 400;
  font-size: 10px;
  color: ${({ theme }) => theme.colors.neutral[300]};

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  max-width: 40px;
  margin: 5px 0 0 0;
`;
