import React from 'react';
import './Button.css';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className , disabled }) => {
  return (
    <button className={`button ${className}`}onClick={onClick} >

      {label}
      
      </button>
  );
}

export default Button;
