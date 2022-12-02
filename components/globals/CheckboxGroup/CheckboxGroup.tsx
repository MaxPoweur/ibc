import React, { useEffect } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import styles from './CheckboxGroup.module.scss';

export type CheckboxValue = string | number;
interface CheckboxGroupProps {
   name: string;
   checkboxes: {
      label: string;
      value: CheckboxValue;
      defaultValue?: boolean;
   }[];
   onChange?: (values: CheckboxValue[], value?: CheckboxValue, checked?: boolean) => void;
   enableGroupFilter?: boolean;
}
enum GroupFilterEnum {
   NONE = 'NONE',
   ALL = 'ALL',
   NEUTRAL = 'NEUTRAL'
}
const CheckboxGroup = (props: CheckboxGroupProps) => {
   const [selectedCheckboxes, setSelectedCheckboxes] = React.useState<null|CheckboxValue[]>(null);
   const [groupFilter, setGroupFilter] = React.useState<GroupFilterEnum>(GroupFilterEnum.NEUTRAL);
   const enableGroupFilter = props.enableGroupFilter || false;
   useEffect(() => {
      if (props.checkboxes) {
         const selectedCheckboxes = props.checkboxes.filter(checkbox => checkbox.defaultValue).map(checkbox => checkbox.value);
         setSelectedCheckboxes(selectedCheckboxes);
      }
   }, []);
   useEffect(() => {
      if (selectedCheckboxes) {
         if (selectedCheckboxes.length === props.checkboxes.length) {
            setGroupFilter(GroupFilterEnum.ALL);
         } else if (selectedCheckboxes.length === 0) {
            setGroupFilter(GroupFilterEnum.NONE);
         } else {
            setGroupFilter(GroupFilterEnum.NEUTRAL);
         }
      }
   }, [props.checkboxes, selectedCheckboxes]);
   if(!props.checkboxes || !selectedCheckboxes) {
      return null;
   }
   const onEditGroupFilter = (value: boolean) => {
      setGroupFilter(() => value ? GroupFilterEnum.ALL : GroupFilterEnum.NONE);
      let newSelectedCheckboxes: CheckboxValue[] = [];
      if(value) {
         newSelectedCheckboxes = props.checkboxes.map(checkbox => checkbox.value);
      } else {
         newSelectedCheckboxes = [];
      }
      setSelectedCheckboxes(newSelectedCheckboxes);
      props.onChange && props.onChange(newSelectedCheckboxes);
   }
   const onChange = (value: CheckboxValue, checked: boolean) => {
      let newSelectedCheckboxes = [...selectedCheckboxes];
      if (checked) {
         newSelectedCheckboxes.push(value);
      } else {
         newSelectedCheckboxes = newSelectedCheckboxes.filter(checkbox => checkbox !== value);
      }
      setSelectedCheckboxes(newSelectedCheckboxes);
      props.onChange && props.onChange(newSelectedCheckboxes, value, checked);
   };
   console.log('filter', groupFilter)
   return (
      <div className={`${styles.CheckboxGroupContainer}`}>
         <div className="input-container checkbox-group-input">
            {enableGroupFilter &&
               <Checkbox
                  key={Math.random()}
                  label={`Aucun / Tous (${props.checkboxes.length})`}
                  className={`${groupFilter === GroupFilterEnum.NEUTRAL ? 'neutral' : ''}`}
                  id={`${props.name}-group-filter`}
                  name={props.name}
                  onChange={onEditGroupFilter}
                  value={groupFilter === GroupFilterEnum.ALL}
               />
            }
            {props.checkboxes.map((checkbox, index) =>
               <Checkbox
                  key={Math.random()}
                  label={checkbox.label}
                  id={`${props.name}-${index}`}
                  name={props.name}
                  onChange={checked => onChange(checkbox.value, checked)}
                  defaultValue={selectedCheckboxes.includes(checkbox.value)}
               />
            )}
         </div>
      </div>
   );
};

export default CheckboxGroup;