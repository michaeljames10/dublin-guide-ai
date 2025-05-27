// ButtonWrapper.tsx
"use client";

import React from "react";
import { ButtonPrimary } from "./button";

export default function ButtonWrapper() {
  return (
    <ButtonPrimary
      text="See all areas"
      onClick={() => {
        console.log("See all areas clicked");
        window.location.href = "/areas";
      }}
    />
  );
}
