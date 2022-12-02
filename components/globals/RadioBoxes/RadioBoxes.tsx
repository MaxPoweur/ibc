import React, { useEffect, useState } from 'react';
import styles from './RadioBoxes.module.scss';
interface RadioBoxOption {
   label: string|React.ReactNode;
   value: string | number;
}
interface RadioBoxesProps {
   name: string;
   options: RadioBoxOption[];
   defaultValue?: string | number;
   onChange?: (value: string | number) => void;
   inline?: boolean;
}
const RadioBoxes = (props: RadioBoxesProps) => {
   const [value, setValue] = useState<string|number|null>(props.defaultValue || props.options[0].value);
   const onChange = (value: string|number) => {
      setValue(value);
      props.onChange && props.onChange(value);
   }
   const inline = props.inline ?? false;
   return (
      <div className={`input-container radio-boxes-container ${styles.RadioBoxesContainer}`}>
         <div className={`options ${inline && 'inline'}`}>
            {props.options.map((option, index) =>
               <div key={index} className={`option-container ${value === option.value && 'active'}`}>
                  <input
                     id={index.toString()}
                     className="option"
                     type="radio"
                     name={props.name}
                     checked={value === option.value}
                     onChange={() => onChange(option.value)}
                  />
                  <label htmlFor={index.toString()}>{option.label}</label>
               </div>
            )}
         </div>
      </div>
   );
};

export default RadioBoxes;