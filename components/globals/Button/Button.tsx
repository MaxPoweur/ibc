import React from 'react';
import styles from './Button.module.scss';

export enum ButtonStyle {
   PRIMARY = 'primary',
   REGULAR = 'regular',
   OUTLINE = 'outline',
}
interface ButtonProps {
   onClick?: () => void;
   children: React.ReactNode;
   className?: string;
   width?: string;
   style?: ButtonStyle;
}

const Button = (props: ButtonProps) => {
   const style = props.style || ButtonStyle.PRIMARY;
   return (
      <div className={`button-container ${styles.ButtonContainer} ${props.className && props.className}`}>
         <button className={`button ${style}`} onClick={props.onClick} style={{ width: props.width }}>
            {props.children}
         </button>
      </div>

   );
};

export default Button;