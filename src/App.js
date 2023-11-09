import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AllowNotification from "./Pages/AllowNotification";
import CodeConfirm from "./Pages/CodeConfirm";
import PlanLayout from "./Pages/Layouts/PlanLayout";
import PhoneConfirmation from "./Pages/PhoneConfirmation";
import Welcome from "./Pages/Welcome";

function App() {
  return (
    <BrowserRouter>
      <PlanLayout>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route exact path="/sign_in" element={<PhoneConfirmation />} />
          <Route exact path="/code_confirm" element={<CodeConfirm />} />
          <Route
            exact
            path="/allow_notification"
            element={<AllowNotification />}
          />
        </Routes>
      </PlanLayout>
    </BrowserRouter>
  );
}

export default App;
