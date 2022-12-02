import { useState } from 'react';
import styles from './Textarea.module.scss';

interface TextareaProps {
   name: string;
   label: string;
   placeholder?: string;
   defaultValue?: string;
   className?: string;
   disabled?: boolean;
   rows?: number;
   onChange?: (value: string) => void;
   onClick?: () => void;
}
const Textarea = (props: TextareaProps) => {
   const [value, setValue] = useState(props.defaultValue || '');

   const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value;
      setValue(value);
      if (props.onChange) {
         props.onChange(value);
      }
   };
   return (
      <div className={`input-container textarea-container ${styles.TextareaContainer} ${props.className && props.className}`} onClick={props.onClick}>
         <div className="textarea">
            <label htmlFor={props.name}>{props.label}</label>
            <textarea
               name={props.name}
               placeholder={props.placeholder}
               onChange={onChange}
               value={value}
               rows={props.rows ?? 6}
               disabled={props.disabled===true}
            />
         </div>
      </div>
   );
}

export default Textarea;