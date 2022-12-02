import React from 'react';
import styles from './Gauge.module.scss';

interface GaugeProps {
   level: number;
}

const Gauge = (props: GaugeProps) => {
   return (
      <div className={`${styles.gaugeContainer} gauge-container`}>
         <div className="gauge">
            <div className="filled" style={{width: `${props.level}%`}}>
            </div>
         </div>
      </div>

   );
};

export default Gauge;