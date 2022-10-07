import { Outlet } from "react-router-dom";

const Invoices = () => {
  return (
    <div>
      <h1>Hello from Invoices</h1>
      <h2>{}</h2>
      <Outlet />
    </div>
  )
}

export default Invoices;