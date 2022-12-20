import React from 'react';
import { GrClose } from 'react-icons/gr';
import { WorkingConditionType } from '../../../../defs/types';
import Card from '../../../globals/Card/Card';
import styles from './WorkingConditionCard.module.scss';

interface WorkingConditionCardProps {
   workingCondition: WorkingConditionType;
   onClick?: () => void;
   onClose?: () => void;
}
const WorkingConditionCard = (props: WorkingConditionCardProps) => {
   return (
      <div className={`${styles.WorkingConditionCardContainer}`}>
         <Card className={`${props.onClick && 'clickable'}`}>
            <h4>{props.workingCondition.label}</h4>
            <span className="description">
               {props.workingCondition.description}
            </span>
            <div className={`close-icon-container`}>
               <GrClose className="icon" onClick={props.onClose} />
            </div>
         </Card>
      </div>
   );
};

export default WorkingConditionCard;