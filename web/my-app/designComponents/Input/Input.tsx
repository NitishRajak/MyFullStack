import React from "react";
import { Container, InputField, Label } from "./style";

type Props = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ label, onChange, placeholder, value }: Props) => {
  return (
    <Container>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Label>{label}</Label>
        <InputField
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </Container>
  );
};

export default Input;
