import Container from "react-bootstrap/Container";
import logo from "..//../assets/logo.png"; // относительный путь к изображению

const NavBar = () => {
  return (
    <div
      style={{
        width: "1440px",
        height: "72px",
        padding: "8px 1224px 9px 40px",
        gap: "0px",
      }}
    >
      <Container>
        <div>
          <img src={logo} alt="Logo" />
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
