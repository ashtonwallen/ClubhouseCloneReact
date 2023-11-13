import { Outlet } from "react-router";

export default function AppLayout({ children }) {
  return (
    <div className="appLayout">
      <Outlet />
      {children}
    </div>
  );
}
