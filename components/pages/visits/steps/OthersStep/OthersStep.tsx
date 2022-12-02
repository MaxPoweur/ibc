import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { useDataContext } from '../../../../../contexts/data/useDataContext';
import { SkillType, WorkingConditionType } from '../../../../../defs/types';
import BadgeCount from '../../../../globals/BadgeCount/BadgeCount';
import BottomPopup from '../../../../globals/BottomPopup/BottomPopup';
import Button from '../../../../globals/Button/Button';
import Checkbox from '../../../../globals/Checkbox/Checkbox';
import RadioBoxes from '../../../../globals/RadioBoxes/RadioBoxes';
import SearchInput from '../../../../globals/SearchInput/SearchInput';
import SelectInput from '../../../../globals/SelectInput/SelectInput';
import CardsSlider from '../../../../globals/Slider/Slider';
import Textarea from '../../../../globals/Textarea/Textarea';
import SkillCard from '../../../jobs/SkillCard/SkillCard';
import WorkingConditionCard from '../../../jobs/WorkingConditionCard/WorkingConditionCard';
import styles from './OthersStep.module.scss';

interface OthersStepProps {
}
const OthersStep = (props: OthersStepProps) => {
   const dataContext = useDataContext();
   const [showAddLanguagePopup, setShowAddLanguagePopup] = useState(false);
   const [showAddWorkingConditionPopup, setShowAddWorkingConditionPopup] = useState(false);
   const job = dataContext.data.jobs[0];
   const languages = job.activities.map(activity => activity.languages).reduce((previous, current) => {
      return previous.concat(current);
   }, []);
   const workingConditions = job.activities.map(activity => activity.workingConditions).reduce((previous, current) => {
      return previous.concat(current);
   }, []);
   return (
      <div className={`${styles.OthersStepContainer}`}>
         <h1 className="title-container">
            {job.name}
         </h1>
         <div className="cards-slider-container">
            <div className="header">
               <div className="title-container">
                  <h2>Langues</h2>
                  <BadgeCount>{languages.length}</BadgeCount>
               </div>
               <div className="right">
                  <SearchInput />
               </div>
            </div>
            <CardsSlider<SkillType>
               breakpoints="yes"
               items={languages.sort((a, b) => b.score - a.score)}
               card={item => <SkillCard skill={item} />}
               onCreate={() => setShowAddLanguagePopup(true)}
            />
         </div>
         <div className="cards-slider-container">
            <div className="header">
               <div className="title-container">
                  <h2>Conditions de travail</h2>
                  <BadgeCount>{workingConditions.length}</BadgeCount>
               </div>
               <div className="right">
                  <SearchInput />
               </div>
            </div>
            <CardsSlider<WorkingConditionType>
               breakpoints="yes"
               items={workingConditions}
               card={item => <WorkingConditionCard workingCondition={item} />}
               onCreate={() => setShowAddWorkingConditionPopup(true)}
            />
         </div>
         {showAddLanguagePopup ?
            <BottomPopup onClose={() => setShowAddLanguagePopup(false)}>
               <h2>Ajouter une langue</h2>
               <b>Comment jugez-vous cette compétence ?</b>
               <SelectInput
                  name="language"
                  label="Langue"
                  options={[
                     { label: 'Français', value: 'fr' },
                     { label: 'Anglais', value: 'en' },
                     { label: 'Espagnol', value: 'es' },
                     { label: 'Allemand', value: 'de' },
                  ]}
               />
               <Checkbox
                  name="willLearn"
                  label="Je souhaite l'acquérir"
                  defaultValue={true}
               />
               <b>Pour ce métier, cette langue est :</b>
               <RadioBoxes
                  name="score"
                  options={[
                     {
                        label: <div className="option-container">
                           Utile
                           <div className="stars-container">
                              <AiFillStar className={`icon`} />
                              <AiFillStar className={`icon disabled`} />
                           </div>
                        </div>,
                        value: 1,
                     },
                     {
                        label: <div className="option-container">
                           Indispensable
                           <div className="stars-container">
                              <AiFillStar className={`icon`} />
                              <AiFillStar className={`icon`} />
                           </div>
                        </div>,
                        value: 2,
                     },
                  ]}
                  defaultValue={1}
               />
               <Button onClick={() => setShowAddLanguagePopup(false)}>Ajouter</Button>
            </BottomPopup>
            : showAddWorkingConditionPopup &&

            <BottomPopup onClose={() => setShowAddWorkingConditionPopup(false)}>
               <h2>Ajouter une condition de travail</h2>
               <b>Quelle condition de travail souhaitez-vous ajouter ?</b>
               <SelectInput
                  name="workingConditions"
                  label="Condition"
                  options={[
                     { label: 'Condition A', value: 0 },
                     { label: 'Condition B', value: 1 },
                     { label: 'Condition C', value: 2 },
                     { label: 'Condition D', value: 3 },
                  ]}
               />
               <Textarea
                  name="description"
                  label="Description (facultatif)"
               />
               <Button onClick={() => setShowAddWorkingConditionPopup(false)}>Ajouter</Button>
            </BottomPopup>
         }
      </div>
   );
};

export default OthersStep;