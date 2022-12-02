import React, { useEffect, useState } from 'react';
import { GrClose } from 'react-icons/gr';
import styles from './BottomPopup.module.scss';

interface BottomPopupProps {
   children: React.ReactNode
   className?: string;
   onClose?: () => void;
}
const BottomPopup = (props: BottomPopupProps) => {
   const [closed, setClosed] = useState(true);
   useEffect(() => {
      setClosed(false);
   }, []);
   const onClose = () => {
      setClosed(true);
      setTimeout(() => {
         props.onClose()
      }, 400);
   }
   return (
      <div className={`${styles.BottomPopupContainer} ${styles.RightPopupContainer}`}>
         <div className={`bottom-popup-container ${props.className && props.className} ${closed ? ' closed' : ''}`}>
            {props.children}
            <div className="close-icon-container" onClick={onClose}>
               <GrClose className="icon" />
            </div>
         </div>
      </div>
   );
};

export default BottomPopup;