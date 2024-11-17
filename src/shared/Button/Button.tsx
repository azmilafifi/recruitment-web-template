import React from 'react';
import { IconType } from 'react-icons';
import styles from './Button.module.scss';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  backgroundColor?: string;
  color?: string;
  style?: React.CSSProperties;
  className?: string;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, backgroundColor, color, style, className, icon }) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
      style={{ backgroundColor, color, ...style }}
    >
      {label}
      {icon && <span className={styles.icon}>{React.createElement(icon, { size: 20 })}</span>}
    </button>
  );
};

export default Button;
