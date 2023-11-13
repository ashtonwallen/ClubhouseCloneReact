import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AllowNotification from "./Pages/AllowNotification";
import CodeConfirm from "./Pages/CodeConfirm";
import Home from "./Pages/Home";
import AppLayout from "./Pages/Layouts/AppLayout";
import PlanLayout from "./Pages/Layouts/PlanLayout";
import PhoneConfirmation from "./Pages/PhoneConfirmation";
import Welcome from "./Pages/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlanLayout />}>
          <Route index element={<Welcome />} />
          <Route path="/sign_in" element={<PhoneConfirmation />} />
          <Route path="/code_confirm" element={<CodeConfirm />} />
          <Route path="/allow_notification" element={<AllowNotification />} />
        </Route>
        <Route path="/home" element={<AppLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
