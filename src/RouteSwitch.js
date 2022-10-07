import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Invoices from "./Invoices";
import Profile from "./Profile";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/invoices">
          <Route path=":invoiceId" element={<Invoices />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;