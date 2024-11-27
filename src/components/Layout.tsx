
import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";
import NavBar from "./ui/NavBar";

export default function Layout() {
  return (
    <Container>
      <NavBar />
      <Outlet />
    </Container>
  );
}
