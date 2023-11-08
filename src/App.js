import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
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
        </Routes>
      </PlanLayout>
    </BrowserRouter>
  );
}

export default App;
