import React from 'react';
import styles from './BadgeCount.module.scss';

interface BadgeCountProps {
   children: React.ReactNode;
   className?: string;
   backgroundColor?: string;
}

const BadgeCount = (props: BadgeCountProps) => {
   return (
      <div className={`${styles.badgeCount} ${props.className}`} style={{backgroundColor: props.backgroundColor ? props.backgroundColor : 'black'}}>
         {props.children}
      </div>
   );
};

export default BadgeCount;