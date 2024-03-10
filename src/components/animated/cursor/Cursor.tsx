import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import "./cursor.css";

interface Position {
  x: number;
  y: number;
}

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState<Position>({ x: 0, y: 0 });
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTimeout(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      }, 150);

      setTimeout(() => {
        setDotPosition({ x: e.clientX, y: e.clientY });
      }, 50);
    };

    window.addEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {!isMobile && (
        <>
          <div
            className="custom-cursor"
            style={{
              left: position.x - 20,
              top: position.y - 20,
            }}
          ></div>
          <div
            className="dot"
            style={{
              left: dotPosition.x + 3,
              top: dotPosition.y + 3,
            }}
          ></div>
        </>
      )}
    </>
  );
};

export default CustomCursor;
