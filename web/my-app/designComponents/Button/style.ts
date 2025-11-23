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
  }
};

const getColor = (variant?: string) => {
  switch (variant) {
    case "primary":
      return "#ffffff";
  }
};
export const StyledButton = styled.button<IButtonProps>`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: white;
  color: ${(props) => getColor(props.variant)};
  cursor: pointer;
  background-color: ${(props) => getBackgroundColor(props.variant)};
`;
