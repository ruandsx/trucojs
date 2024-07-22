import styled from "styled-components";
import sunIcon from "@/images/sun-icon.png";
import moonIcon from "@/images/moon-icon.png";

export const ToggleInput = styled.input.attrs(() => ({
  type: "checkbox",
}))`
  width: 100px;
  height: 46px;
  border-radius: 30px;

  position: absolute;
  top: 20px;
  right: 20px;

  background-color: #7d4201;

  transition: all 0.5s ease-in;

  cursor: pointer;
  z-index: 1;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  &::before {
    content: "";

    width: 40px;
    height: 40px;
    border-radius: 50%;

    position: absolute;
    top: 50%;
    left: 3px;

    transform: translateY(-50%);
    transition: all 0.5s ease-in;

    background-size: contain;
    background-image: url(${sunIcon.src});
  }

  /* Changing toggle button background when checked */
  &:checked {
    background-color: #021d35;

    /* Changing dot switch image and moving to the right side when checked */
    &::before {
      left: 58px;
      background-size: contain;
      background-image: url(${moonIcon.src});
    }
  }
`;
