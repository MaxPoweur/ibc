import React, { useState } from 'react';
import { useDataContext } from '../../../../../contexts/data/useDataContext';
import Card from '../../../../globals/Card/Card';
import SearchInput from '../../../../globals/SearchInput/SearchInput';
import SelectInput from '../../../../globals/SelectInput/SelectInput';
import Tags, { TagType } from '../../../../globals/Tags/Tags';
import styles from './JobsStep.module.scss';

interface JobsStepProps {
}
const JobsStep = (props: JobsStepProps) => {
   const dataContext = useDataContext();
   const [tags, setTags] = useState<TagType[]>([
      { label: 'Activité A' },
      { label: 'Activité B' },
   ]);
   const job = dataContext.data.jobs[0];
   const activities = job.activities;
   return (
      <div className={`${styles.JobsStepContainer}`}>
         <p className="mandatory">
            <span className="red">*</span> Mentions Obligatoires
         </p>
         <Card>
            <h3>Métier ciblé lors de la visite</h3>
            <SearchInput
               label="Métier"
               mandatory
               defaultValue="Métier A"
            />
            <SelectInput
               label="Activité(s) liée(s)"
               options={activities.map((activity, index) => ({ label: activity.name, value: index }))}
               mandatory
               multiple
            />
         </Card>
      </div>
   );
};

export default JobsStep;