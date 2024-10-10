import { Outlet } from "react-router-dom";
import MainHeader from "../src/components/MainHeader";

export default function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}
