import Image from 'next/image';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsBookmarkStarFill } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import { IoMdSchool } from 'react-icons/io';
import { SkillType } from '../../../../defs/types';
import Card from '../../../globals/Card/Card';
import styles from './SkillCard.module.scss';

interface SkillCardProps {
   skill: SkillType;
   header?: string;
   onClose?: () => void;
   onClick?: () => void;
}
const SkillCard = (props: SkillCardProps) => {
   return (
      <div className={`${styles.SkillCardContainer}`} onClick={props.onClick}>
         <Card className={`${props.onClick && 'clickable'}`}>
            <h4>{props.skill.label}</h4>
            <span className="description">
               {props.skill.score === -1 ?
                  'Obsolète' :
                  props.skill.score === 0 ?
                     'Non pertinente'
                     : props.skill.score === 1 ?
                        'Utile'
                        : props.skill.score === 2 ?
                           'Indispensable'
                           : ''}
            </span>
            <div className="stars">
               {props.skill.score > 0 &&
                  <>
                     {[...Array(props.skill.score)].map((x, index) =>
                        <AiFillStar key={index} className="star filled" />
                     )}
                     {[...Array(2 - props.skill.score)].map((x, index) =>
                        <AiFillStar key={index} className="star unfilled" />
                     )}
                  </>
               }
            </div>
            {props.skill.toTrain &&
               <div className="to-train">
                  <IoMdSchool />
               </div>
            }
            {props.skill.isBookmark ?
               <div className="is-bookmark">
                  <Image
                     src="/images/bookmark.svg"
                     alt="Skill bookmark"
                     width="26px"
                     height="45px"
                  />
               </div>
               :
               <div className={`close-icon-container ${props.header ? 'white' : ''}`}>
                  <GrClose className="icon" onClick={props.onClose} />
               </div>
            }
            {props.header &&
               <div className="header">
                  {props.header}
               </div>
            }
         </Card>
      </div>
   );
};

export default SkillCard;