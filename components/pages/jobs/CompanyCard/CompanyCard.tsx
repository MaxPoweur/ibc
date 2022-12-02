import Image from 'next/image';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsBookmarkStarFill } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import { IoMdSchool } from 'react-icons/io';
import { CompanyType } from '../../../../defs/types';
import Card from '../../../globals/Card/Card';
import styles from './CompanyCard.module.scss';

interface CompanyCardProps {
   companies: CompanyType;
   onClose?: () => void;
   onClick?: () => void;
}
const CompanyCard = (props: CompanyCardProps) => {
   return (
      <div className={`${styles.CompanyCardContainer}`} onClick={props.onClick}>
         <Card className={`${props.onClick && 'clickable'}`}>
            <h4>{props.companies.name}</h4>
            <span className="description">
               {/* {props.companies.description} */}
               Lorem ipsum dolor sit amet.
            </span>
            <span className="last-visit">
               {/* {props.companies.createdAtDelay} */}
               Moins de 6 mois
            </span>
         </Card>
      </div>
   );
};

export default CompanyCard;