import { HTMLAttributes } from "react";
import styled from "styled-components";

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  color?: string;
}

const getBackgroundColor = (variant?: string) => {
  switch (variant) {
    case "primary":
      return "#007bff";
    default:
      return "#6c757d";
  }
};

const getColor = (variant?: string) => {
  switch (variant) {
    case "primary":
      return "#ffffff";
    default:
      return "#000000";
  }
};
export const StyledButton = styled.button<IButtonProps>`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  width: 100%;

  /* color: white; */
  color: ${(props) => getColor(props.variant)};
  cursor: pointer;
  background-color: ${(props) => getBackgroundColor(props.variant)};
`;
