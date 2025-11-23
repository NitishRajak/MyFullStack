import React from "react";
import { StyledButton } from "./style";

type Props = {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
  children?: React.ReactNode;
  isLoading?: boolean;
};

const Button = ({
  label,
  onClick,
  children,
  variant = "primary",
  isLoading = false,
  ...restProps
}: Props) => {
  return (
    <div>
      <StyledButton variant={variant} onClick={onClick} {...restProps}>
        {isLoading ? "Loading..." : children}
      </StyledButton>
    </div>
  );
};

export default Button;
