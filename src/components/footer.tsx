// components/Footer.tsx
import { NavLink, Text } from "@mantine/core";

export default function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        borderTop: "1px solid #eaeaea",
        backgroundColor: "#fff",
        fontSize: "0.9rem",
        color: "#555",
      }}
    >
      {/* Left content */}
      <Text size="sm" c="dimmed">
        &copy; {new Date().getFullYear()} Dublin Guide
      </Text>

      {/* Right content */}
      <div style={{ display: "flex", gap: "1rem" }}>
        <NavLink fs="sm" href="/about" label="Contact" />
        <NavLink href="/about" label="About" />
      </div>
    </footer>
  );
}
