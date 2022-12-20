import React, { useRef, useState } from 'react';
import styles from './Button.module.scss';

export enum ButtonStyle {
   PRIMARY = 'primary',
   PRIMARY_DARK = 'primary-dark',
   REGULAR = 'regular',
   OUTLINE = 'outline',
}
interface ButtonProps {
   onClick?: () => void;
   children: React.ReactNode;
   className?: string;
   width?: string;
   style?: ButtonStyle;
   onUpload?: (files: FileList) => void;
}

const Button = (props: ButtonProps) => {
   const style = props.style || ButtonStyle.PRIMARY;
   const fileInputRef = useRef<HTMLInputElement>(null);
   const [files, setFiles] = useState<null | FileList>();
   const onClick= () => {
      if (props.onUpload) {
         fileInputRef.current?.click();
      } else if(props.onClick) {
         props.onClick();
      }
   }
   const onUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFiles(() => e.target.files)
      if (props.onUpload) {
         props.onUpload(e.target.files || new FileList());
      }
   }
   return (
      <div className={`button-container ${styles.ButtonContainer} ${props.className && props.className}`}>
         <button className={`button ${style}`} onClick={onClick} style={{ width: props.width }}>
            {props.children}
         </button>
         {props.onUpload &&
            <input
               ref={fileInputRef}
               className="file-input"
               type="file"
               onChange={onUpload}
            />
         }
      </div>

   );
};

export default Button;