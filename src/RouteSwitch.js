import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Profile from "./Profile";
import RouteInvoicing from "./RouteInvoicing";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/invoices/*" element={<RouteInvoicing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;