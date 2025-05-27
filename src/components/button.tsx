"use client";
import { Button } from "@mantine/core";
import React from "react";

type ButtonProps = {
  onClick?: () => void;
  variant?: "filled" | "outlined" | "text";
  text: string;
};

export const ButtonPrimary: React.FC<ButtonProps> = ({
  onClick,
  variant = "filled",
  text,
}) => {
  return (
    <Button radius="lg" onClick={onClick} variant={variant}>
      {text}
    </Button>
  );
};
