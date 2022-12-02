import React from 'react';
import { useDataContext } from '../../../../../contexts/data/useDataContext';
import Card from '../../../../globals/Card/Card';
import Checkbox from '../../../../globals/Checkbox/Checkbox';
import RecruitmentNeedForm from '../../../jobs/RecruitmentNeedForm/RecruitmentNeedForm';
import styles from './RecruitmentNeedsStep.module.scss';

interface RecruitmentNeedsStepProps {
}
const RecruitmentNeedsStep = (props: RecruitmentNeedsStepProps) => {
   const dataContext = useDataContext();
   const job = dataContext.data.jobs[0];
   return (
      <div className={`${styles.RecruitmentNeedsStepContainer}`}>
         <Card>
         <h2>Métier A</h2>
            <RecruitmentNeedForm  job={job} />
         {/* <Checkbox
            name=""
         /> */}
         </Card>
      </div>
   );
};

export default RecruitmentNeedsStep;