"use client";
import { useEffect, useState } from "react";

const BackgroundGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full min-h-screen -z-10"
      style={{
        background: `radial-gradient(350px circle at ${position.x}px ${position.y}px, rgba(52, 133, 255, 0.18), rgba(0, 0, 0, 0.05))`,
        transition: "background 0.2s ease",
      }}
    ></div>
  );
};

export default BackgroundGlow;
