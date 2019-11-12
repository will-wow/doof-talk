/** @jsx jsx */
import { jsx } from "theme-ui";
import { Image } from "mdx-deck";

const BgImage = ({ src, children, color, opacity }) => {
  return (
    <div
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: color || (opacity < 1 ? "black" : "white"),
        backgroundColor: "white",
        height: "100vh",
        width: "100vw"
      }}
    >
      <Image src={src} style={{ position: "absolute", opacity }} />
      <div style={{ position: "relative" }}>{children}</div>
    </div>
  );
};

BgImage.defaultProps = {
  opacity: 1
};

export default BgImage;
