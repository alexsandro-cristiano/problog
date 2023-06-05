import { Outlet } from "react-router-dom";
import { Navbar } from "../../../components/Navbar";

export function Base() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
