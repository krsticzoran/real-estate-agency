import React from "react";
import { Link } from "react-router-dom";

interface MyComponentProps {
  onData: string[];
  page: string;
}

const DropdownMenu: React.FC<MyComponentProps> = ({ onData, page }) => {
  return (
    <ul className="dropdown-menu position-absolute">
      {onData.map((item) => (
        <li key={item}>
          <Link className="dropdown-item" to={`/${page}/${item}`}>
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
