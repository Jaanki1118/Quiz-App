import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div style={{ textAlign: "center", marginBottom: 10 }}>
      Made with by{" "}
      <a
        href="https://www.youtube.com/roadsindecoder"
        style={{ cursor: "pointer" }}
      >
        Roadside coder
      </a>
    </div>
  );
};
export default Footer;
