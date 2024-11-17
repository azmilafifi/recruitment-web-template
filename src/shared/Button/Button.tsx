import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  backgroundColor?: string;
  color?: string;
  style?: React.CSSProperties;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, backgroundColor, color, style, className }) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
      style={{ backgroundColor, color, ...style }}
    >
      {label}
    </button>
  );
};

export default Button;
