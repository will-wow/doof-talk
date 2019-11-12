/** @jsx jsx */
import { jsx } from "theme-ui";

export const Layout = ({ bg, color, ...props }) => (
  <div
    {...props}
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      color: color || "text",
      bg: bg || "background",
      a: {
        color: "inherit"
      }
    }}
  />
);

export default Layout;
