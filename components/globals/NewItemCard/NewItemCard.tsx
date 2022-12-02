import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import styles from './NewItemCard.module.scss';

interface NewItemCardProps {
   onClick?: () => void;
}
const NewItemCard = (props: NewItemCardProps) => {
   return (
      <div className={`new-item-card-container ${styles.NewItemCardContainer}`} onClick={props.onClick}>
         <div className="new-item-card card">
            <div className="icon-container">
               <AiOutlinePlus className="icon" />
            </div>
         </div>
      </div>
   );
};

export default NewItemCard;