import React, { useEffect } from 'react';
import styles from './Checkbox.module.scss';

interface CheckboxProps {
   name: string;
   label: string;
   onChange?: (value: boolean) => void;
   defaultValue?: boolean;
   value?: boolean;
   className?: string;
   id?: string;
}
const Checkbox = (props: CheckboxProps) => {
   const [checked, setChecked] = React.useState<boolean>(props.defaultValue || props.value || false);
   useEffect(() => {
      if (props.value) {
         setChecked(props.value);
      }
   }, [props.value]);
   const onChange = (checked: boolean) => {
      setChecked(checked);
      props.onChange && props.onChange(checked);
   }
   return (
      <div className={`input-container checkbox-container ${styles.CheckboxContainer} ${props.className ? props.className : ''} ${checked ? 'checked' : 'unchecked'}`}>
         <div className="checkbox-input" >
            <input
               key={Math.random()}
               type="checkbox"
               id={props.id ?? props.name}
               name={props.name}
               checked={checked}
               onChange={e => onChange(e.target.checked)}
            />
            <label htmlFor={props.id ?? props.name}>{props.label}</label>
         </div>
      </div>
   );
};

export default Checkbox;