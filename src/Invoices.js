import { Outlet, useParams } from "react-router-dom";

const Invoices = () => {
  const {id} = useParams();
  return (
    <div>
      <h1>Hello from Invoices</h1>
      <h2>{id}</h2>
      <Outlet />
    </div>
  )
}

export default Invoices;