import { Link } from "react-router-dom";

function Dashboard() {
  const name = localStorage.getItem("name");
  const role = localStorage.getItem("role");

  return (
    <div>
      <h1>Dashboard</h1>

      <h2>Welcome {name}</h2>

      <p>Role: {role}</p>

      <Link to="/products">
        <button>View Products</button>
      </Link>
      
      <Link to="/products">
  View Products
</Link>

<br /><br />

<Link to="/add-product">
  Add Product
</Link>

      <button
        onClick={() => {
          localStorage.clear();
          window.location.href = "/";
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;