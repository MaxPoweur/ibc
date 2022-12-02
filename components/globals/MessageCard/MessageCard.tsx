import { GrFormClose } from 'react-icons/gr';
import React, { useState } from 'react';
import styles from './MessageCard.module.scss';
import Button, { ButtonStyle } from '../Button/Button';

interface MessageCardProps {
   title: string;
   children: React.ReactNode;
   button?: React.ReactNode;
   onButtonClick?: () => void;
}

const MessageCard = (props: MessageCardProps) => {
   const { title, children } = props;
   const [visible, setVisible] = useState(true);
   return (
      <div className={`${styles.messageCardContainer}`}>
         <div className={`message-card ${visible ? 'visible' : 'invisible'}`}>
            <div className={`message-popup-closer`} onClick={()=> setVisible(false)}><GrFormClose size={"25px"}  /></div>
            <div className="message-popup">
               <div className="left">
                  <h3 className="title">{title}</h3>
                  <div className="description">
                     {children}
                  </div>
               </div>
               <div className="right">
                  {
                     props.button && <Button onClick={props.onButtonClick} style={ButtonStyle.PRIMARY}>{props.button}</Button>
                  }
               </div>
            </div>
         </div>
      </div>
   );
};

export default MessageCard;