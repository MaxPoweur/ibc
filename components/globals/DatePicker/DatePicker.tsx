import { useEffect, useState } from 'react';
import styles from './DatePicker.module.scss';
import moment, { MomentInput } from 'moment';
import { DatePicker as AntdDatePicker } from 'antd';

export interface DatePickerProps {
   name?: string;
   label?: string;
   defaultStartValue?: string;
   defaultEndValue?: string;
   className?: string;
   disabled?: boolean;
   mandatory?: boolean;
   backgroundColor?: string;
   labelBackgroundColor?: string;
   onChange?: (start: string, end: string) => void;
}


const DatePicker = (props: DatePickerProps) => {
   const mandatory = props.mandatory ?? false;
   const { RangePicker } = AntdDatePicker;
   const [startDate, setStartDate] = useState(props.defaultStartValue || '');
   const [endDate, setEndDate] = useState(props.defaultEndValue || '');

   useEffect(() => {
      if (props.onChange) {
         props.onChange(startDate, endDate);
      }
   }, [props, startDate, endDate])
   const formatSearchedPeriod = (momentDate: MomentInput[]) => {
      if(momentDate == null) {
         setStartDate("");
         setEndDate("");
         return
      }
      const startDate = momentDate[0]
      const endDate = momentDate[1]
      const formattedstartDate = moment(startDate).format('YYYY-MM-DD');
      const formattedendDate = moment(endDate).format('YYYY-MM-DD');
      setStartDate(formattedstartDate);
      setEndDate(formattedendDate);
   }
   return (
      <div className={`input-container text-input-container ${styles.textInputContainer} ${props.className ? props.className : ''}`} style={{ marginTop: props.label ? '20px' : 'initial' }}>
         {props.label &&
            <label htmlFor={props.name}>{props.label} {mandatory && <span className="red">*</span>}</label>
         }
         <div className="date-input-container">
            <RangePicker className="date-input" onFocus={(e) => e.target.readOnly = true} placeholder={["Début", "Fin"]} onChange={(value) => formatSearchedPeriod(value)} />
         </div>
      </div>
   );
}

export default DatePicker;