import { useState } from 'react';
import styles from './TextInput.module.scss';

export interface TextInputProps {
   name?: string;
   label?: string;
   placeholder?: string;
   defaultValue?: string;
   className?: string;
   onChange?: (value: string) => void;
   disabled?: boolean;
   mandatory?: boolean;
   suffix?: React.ReactNode;
   backgroundColor?: string;
   labelBackgroundColor?: string;
}
const TextInput = (props: TextInputProps) => {
   const [value, setValue] = useState(props.defaultValue || '');
   const mandatory = props.mandatory ?? false;
   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      if (props.onChange) {
         props.onChange(e.target.value);
      }
   };
   return (
      <div className={`input-container text-input-container ${styles.textInputContainer} ${props.className ? props.className : ''}`} style={{marginTop: props.label ? '20px' : 'initial'}}>
         {props.label &&
            <label htmlFor={props.name}>{props.label} {mandatory && <span className="red">*</span>}</label>
         }
         <div className="text-input">
            <input
               type="text"
               name={props.name}
               placeholder={props.placeholder}
               onChange={onChange}
               value={value}
               disabled={props.disabled === true}
            />
            {props.suffix &&
               <div className="suffix-container">
                  {props.suffix}
               </div>
            }
         </div>
      </div>
   );
}

export default TextInput;