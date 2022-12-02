import React from 'react';
import { JobType } from '../../../../defs/types';
import Checkbox from '../../../globals/Checkbox/Checkbox';
import Textarea from '../../../globals/Textarea/Textarea';
import TextInput from '../../../globals/TextInput/TextInput';
import styles from './RecruitmentNeedForm.module.scss';

interface RecruitmentNeedFormProps {
   job: JobType;
}
const RecruitmentNeedForm = (props: RecruitmentNeedFormProps) => {
   return (
      <div className={`${styles.RecruitmentNeedFormContainer}`}>
         <Checkbox
            name="keyPosition"
            label="Métier clé de l'entreprise"
            defaultValue={props.job.keyPosition}
         />
         <Checkbox
            name="needRecruitment"
            label="Besoin en recrutement"
            defaultValue={props.job.needRecruitment}
         />
         <div className="two-items">
            <TextInput
               className="text-input-container"
               name="vacantPositions"
               label="Nbr de postes"
               defaultValue={props.job.vacantPositions.toString()}
            />
            <TextInput
               className="text-input-container"
               name="limitDate"
               label="Échéance"
               defaultValue={props.job.limitDate}
            />
         </div>
         <TextInput
            name="contract"
            label="Contrat"
            defaultValue={props.job.contract}
         />
         <TextInput
            name="type"
            label="Type"
            defaultValue={props.job.type}
         />
         <Checkbox
            name="hasRecruitementIssue"
            label="Problématique de recrutement"
            defaultValue={props.job.hasRecruitementIssue}
         />
         <TextInput
            name="recruitementIssue"
            label="Problématique de recrutement"
            defaultValue={props.job.recruitementIssue}
         />
         <Textarea
            name="comment"
            label="Commentaire"
            defaultValue={props.job.comment}
         />
      </div>
   );
};

export default RecruitmentNeedForm;