import { NavLink } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import "./components.css";

function Header() {
  return (
    <>
      <span className="brand">
        <i className="fas fa-book"></i> API
        <br />
      </span>
      <Breadcrumb>
        <Breadcrumb.Item>
          <NavLink
            exact
            to="/"
            className="navlink brand"
            activeClassName="activenavlink"
          >
            Users
          </NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <NavLink
            to="/createuser"
            className="navlink"
            activeClassName="activenavlink"
          >
            Create User
          </NavLink>
        </Breadcrumb.Item>
        {/* <Breadcrumb.Item active>Data</Breadcrumb.Item> */}
      </Breadcrumb>
    </>
  );
}

export default Header;
