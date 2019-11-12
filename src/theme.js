/** @jsx jsx */
import { jsx } from "theme-ui";
import c5 from "./assets/c5.png";

const Provider = ({ children }) => {
  return (
    <div sx={{ position: "relative" }}>
      {children}
      <img
        alt="Carbon Five Logo"
        src={c5}
        sx={{
          width: "3rem",
          height: "3rem",
          opacity: 0.75,
          position: "absolute",
          right: "1rem",
          bottom: "1rem"
        }}
      />
    </div>
  );
};

export default {
  googleFont: "https://fonts.googleapis.com/css?family=Fira+Code|Slabo+27px",
  fonts: {
    body: '"Slabo 27px", system-ui, sans-serif',
    monospace: '"Fira Code", monospace'
  },
  colors: {
    text: "#fff",
    background: "#404040",
    primary: "#025A6E",
    secondary: "#EF8555",
    black: "#000"
  },
  styles: {
    a: {
      color: "inherit"
    }
  },
  Provider
};
