import React from "react";
import NavBar from "./ui/NavBar"; // Импорт NavBar

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <NavBar /> {/* Навбар добавлен сюда */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
