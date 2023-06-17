import React from "react";

interface MyComponentProps {
  onData: string[];
  page: string;
}

const DropdownMenu: React.FC<MyComponentProps> = ({ onData, page }) => {
  return (
    <ul className="dropdown-menu position-absolute">
      {onData.map((item) => (
        <li key={item}>
          <a className="dropdown-item" href={`/${page}/${item}`}>
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
