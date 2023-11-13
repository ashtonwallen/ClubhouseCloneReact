import { Outlet } from "react-router";

function PlanLayout({ children }) {
  return (
    <div style={{ width: "100%", maxWidth: "500px", margin: "0 auto" }}>
      <Outlet />
      {children}
    </div>
  );
}

export default PlanLayout;
