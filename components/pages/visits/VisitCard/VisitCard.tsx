import React from 'react';
import { VisitType } from '../../../../defs/types';
import Card from '../../../globals/Card/Card';
import styles from './VisitCard.module.scss';

interface VisitCardProps {
   onClick?: () => void;
   visit: VisitType;
}
const VisitCard = (props: VisitCardProps) => {
   return (
      <div className={`${styles.VisitCardContainer} visit-card`}>
         <Card className={`visit-card ${props.onClick && 'clickable'}`} onClick={props.onClick}>
            <span className="date-delay">{props.visit.delayFromDate}</span>
            <h3 className="company-name">{props.visit.company.name}</h3>
            <p className="object">{props.visit.object}</p>
         </Card>
      </div>
   );
};

export default VisitCard;