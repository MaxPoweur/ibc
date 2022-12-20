import React, { useEffect } from 'react';
import Button, { ButtonStyle } from '../Button/Button';
import styles from './Steps.module.scss';

export interface Step {
   name: string;
   content: React.ReactNode;
}
interface StepsProps {
   index: number;
   steps: Step[];
   onEnd?: () => void;
}
const Steps = (props: StepsProps) => {
   const [currentIndex, setCurrentIndex] = React.useState(0);
   useEffect(() => {
      if (props.index) {
         setCurrentIndex(() => props.index);
      }
   }, [props.index]);
   // watch currentIndex 
   useEffect(() => {
      window.scrollTo({
         top: 0,
         behavior: "smooth"
     });
   }, [currentIndex]);
   return (
      <div className={`${styles.StepsContainer}`}>
         <div className="steps">
            {props.steps.map((step, index) => <div
               key={index}
               className={`step ${index < currentIndex ? 'done' : index === currentIndex ? 'active' : 'to-do'}`}
               onClick={() => setCurrentIndex(index)}
            >
               <div className="step-number">{index + 1}</div>
               <div className="step-name">{step.name}</div>
            </div>)}
         </div>
         <div className="step-content">
            {props.steps[currentIndex].content}
         </div>
         <div className="navigation">
            {currentIndex > 0 &&
               <Button style={ButtonStyle.OUTLINE} className="previous" onClick={() => setCurrentIndex(currentIndex => currentIndex - 1)}>Précédent</Button>
            }
            {currentIndex < (props.steps.length-1) ?
               <Button className="next" onClick={() => setCurrentIndex(currentIndex => currentIndex + 1)} style={ButtonStyle.PRIMARY}>Suivant</Button>
               : props.onEnd &&
                  <Button className="next" onClick={props.onEnd}>Terminer</Button>
            }
         </div>
      </div>
   );
};

export default Steps;