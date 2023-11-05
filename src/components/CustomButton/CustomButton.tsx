'use client';

import { CustomButtonProps } from '@/types';
import styles from './styles.module.scss';

const CustomButton = ({
  title,
  color,
  max_width,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      className={`${styles[color || 'white']} ${styles.button} ${
        max_width && styles.max_width
      }`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
