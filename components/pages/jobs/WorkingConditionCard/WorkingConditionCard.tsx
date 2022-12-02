import React from 'react';
import { WorkingConditionType } from '../../../../defs/types';
import Card from '../../../globals/Card/Card';
import styles from './WorkingConditionCard.module.scss';

interface WorkingConditionCardProps {
   workingCondition: WorkingConditionType;
   onClick?: () => void;
}
const WorkingConditionCard = (props: WorkingConditionCardProps) => {
   return (
      <div className={`${styles.WorkingConditionCardContainer}`}>
         <Card className={`${props.onClick && 'clickable'}`}>
            <h4>{props.workingCondition.label}</h4>
            <span className="description">
               {props.workingCondition.description}
            </span>
         </Card>
      </div>
   );
};

export default WorkingConditionCard;