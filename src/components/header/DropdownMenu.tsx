import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./header.css";
import { Nav } from "react-bootstrap";

interface MyComponentProps {
  onData: string[];
  page: string;
}

const DropdownMenu: React.FC<MyComponentProps> = ({ onData, page }) => {
  const [show, setShow] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 991 });

  const handleToggle: React.MouseEventHandler<HTMLDivElement> = () => {
    if (isSmallScreen) {
      setShow((prevState) => !prevState);
    }
  };

  return (
    <NavDropdown
      title={<span className="navbar--color-white my-auto ">{page}</span>}
      id="navbarScrollingDropdown"
      onMouseOver={!isSmallScreen ? () => setShow(true) : undefined}
      onMouseLeave={!isSmallScreen ? () => setShow(false) : undefined}
      onClick={handleToggle}
      show={show}
    >
      {onData.map((item) => (
        <Nav.Link
          key={item}
          className="dropdown-item navbar-dropdown-menu"
          href={`/${page.toLowerCase()}/${item.toLowerCase()}`}
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </Nav.Link>
      ))}
    </NavDropdown>
  );
};

export default DropdownMenu;
