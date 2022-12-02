import React, { useEffect, useState } from 'react';
import { GrClose } from 'react-icons/gr';
import styles from './RightPopup.module.scss';

interface RightPopupProps {
   children: React.ReactNode
   className?: string;
   onClose?: () => void;
}

const RightPopup = (props: RightPopupProps) => {
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
   return <div className={`${styles.RightPopupContainer}`}>
      <div className={`right-popup-container ${props.className && props.className} ${closed ? ' closed' : ''}`}>
      {props.children}
      <div className="close-icon-container" onClick={onClose}>
         <GrClose className="icon" />
      </div>
      </div>
   </div>
};

export default RightPopup;