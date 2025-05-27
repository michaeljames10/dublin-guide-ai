"use client";
// components/Header.tsx
import { useState } from "react";
import { Burger } from "@mantine/core";

export default function Header() {
  const [opened, setOpened] = useState(false);

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem",
        borderBottom: "1px solid #eaeaea",
        backgroundColor: "#fff",
      }}
    >
      <div
        style={{ fontWeight: "bold", fontSize: "1.2rem" }}
        onClick={() => {
          window.location.href = "/";
        }}
      >
        MyLogo
      </div>

      <Burger
        opened={opened}
        onClick={() => setOpened((o) => !o)}
        aria-label="Toggle navigation"
      />
    </header>
  );
}
