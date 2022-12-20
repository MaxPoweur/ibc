import { Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import styles from './SelectInput.module.scss';

interface SelectOptionType {
   label: string;
   value: string|number;
}
interface SelectInputProps {
   options: SelectOptionType[];
   name?: string;
   label?: string;
   placeholder?: string;
   mandatory?: boolean;
   multiple?: boolean;
   creatable?: boolean;
   onChange?: (value: string|number|undefined) => void;
}
const SelectInput = (props: SelectInputProps) => {
   const [options, setOptions] = useState<SelectOptionType[]>([]);
   const [selectInputValue, setSelectInputValue] = useState<string|number|undefined>(undefined);
   const [searchInputValue, setSearchInputValue] = useState<string>('');
   const mandatory = props.mandatory ?? false;
   const multiple = props.multiple ?? false;
   const creatable = props.creatable ?? false;
   useEffect(() => {
      if(props.options) {
         setOptions(props.options);
      }
   }, [props.options]);
   const onSearch = (value: string) => {
      setSearchInputValue(value);
   };
   const onInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
         setOptions(current => [ {
            label: searchInputValue,
            value: searchInputValue
         }, ...current]);
         setSelectInputValue(() => searchInputValue);
      }
   }
   const onChange = (value: string|number|undefined) => {
      setSelectInputValue(() => value);
      if(props.onChange) {
         props.onChange(value);
      }
   };
   return (
      <div className={`input-container select-input-container ${styles.SelectInputContainer}`} style={{marginTop: props.label ? '20px' : 'initial'}}>
         {props.label &&
            <label htmlFor={props.name}>{props.label} {mandatory && <span className="red">*</span>}</label>
         }
         <Select
            className="select-input"
            suffixIcon={<AiOutlineSearch className="suffix" />}
            placeholder={props.placeholder}
            options={options}
            mode={multiple ? 'multiple' : undefined}
            onSearch={onSearch}
            showSearch={creatable}
            showArrow
            maxTagCount={multiple ? undefined : 2}
            onInputKeyDown={onInput}
            value={selectInputValue}
            onChange={onChange}
            notFoundContent='[ENTRÉE] pour créer'
         />
      </div>
   );
};

export default SelectInput;