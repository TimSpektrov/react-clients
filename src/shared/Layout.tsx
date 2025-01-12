import { FC } from "react";
import { Outlet } from "react-router";
import { Header } from "./Header.tsx";

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
