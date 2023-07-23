import React from "react";
import "../Button/Button.css";

//button sizes: sm, med, lg, xl


export const Button = ({ color1, children, onClick, size, fontSize, goTo }) => {


  return (
    <button
      className = 'outline-button'
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;