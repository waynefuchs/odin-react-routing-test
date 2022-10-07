import { Routes, Route } from "react-router-dom";
import Invoices from "./Invoices";

const RouteInvoicing = () => {
  return <Routes>
    <Route path="new" element={<h1>Create new form</h1>} />
    <Route path="read/:id" element={<Invoices />} />
    <Route path="delete/:id" element={<Invoices />} />
    <Route path="*" element={<h1>Not Found</h1>} />
  </Routes>
}

export default RouteInvoicing;