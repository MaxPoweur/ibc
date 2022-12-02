import { Select } from 'antd';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import styles from './SelectInput.module.scss';

interface SelectOptionType {
   label: string;
   value: string|number;
}
interface SelectInputProps {
   name?: string;
   label?: string;
   placeholder?: string;
   mandatory?: boolean;
   options: SelectOptionType[];
   multiple?: boolean;
}
const SelectInput = (props: SelectInputProps) => {
   const mandatory = props.mandatory ?? false;
   const multiple = props.multiple ?? false;
   return (
      <div className={`input-container select-input-container ${styles.SelectInputContainer}`} style={{marginTop: props.label ? '20px' : 'initial'}}>
         {props.label &&
            <label htmlFor={props.name}>{props.label} {mandatory && <span className="red">*</span>}</label>
         }
         <Select
            className="select-input"
            suffixIcon={<AiOutlineSearch className="suffix" />}
            placeholder={props.placeholder}
            options={props.options}
            mode={multiple ? 'multiple' : undefined}
            showArrow
         />
      </div>
   );
};

export default SelectInput;