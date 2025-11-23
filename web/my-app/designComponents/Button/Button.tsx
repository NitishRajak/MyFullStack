import React from "react";
import { StyledButton } from "./style";

type Props = {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
  children?: React.ReactNode;
};

const Button = ({ label, onClick, children, variant = "primary" }: Props) => {
  return (
    <div>
      <StyledButton variant={variant} label={label} onClick={onClick}>
        {children}
      </StyledButton>
    </div>
  );
};

export default Button;
