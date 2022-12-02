import { BiPlusCircle } from 'react-icons/bi';
import BadgeCount from '../../../../components/globals/BadgeCount/BadgeCount';
import MessageCard from '../../../../components/globals/MessageCard/MessageCard';
import styles from './my-space.module.scss';

import { useEffect, useState } from 'react';
import CardsSlider from '../../../../components/globals/Slider/Slider';
import SkillCard from '../../../../components/pages/jobs/SkillCard/SkillCard';
import { useDataContext } from '../../../../contexts/data/useDataContext';
import { SkillType } from '../../../../defs/types';
import Button, { ButtonStyle } from '../../../../components/globals/Button/Button';
import SelectInput from '../../../../components/globals/SelectInput/SelectInput';
import BottomPopup from '../../../../components/globals/BottomPopup/BottomPopup';
import RadioBoxes from '../../../../components/globals/RadioBoxes/RadioBoxes';
import { AiFillStar } from 'react-icons/ai';
import Textarea from '../../../../components/globals/Textarea/Textarea';
import Checkbox from '../../../../components/globals/Checkbox/Checkbox';


function MySpace() {
   const dataContext = useDataContext();
   const [skillTypeToCreate, setSkillTypeToCreate] = useState<null | 'hard' | 'soft'>(null);
   const [enabledHardSkills, setEnabledHardSkills] = useState<SkillType[]>([]);
   const [enabledSoftSkills, setEnabledSoftSkills] = useState<SkillType[]>([]);
   const job = dataContext.data.jobs[0];

   useEffect(() => {
      const hardSkills = job.activities.map(activity => activity.hardSkills).reduce((previous, current) => {
         return previous.concat(current);
      }, []);
      const softSkills = job.activities.map(activity => activity.softSkills).reduce((previous, current) => {
         return previous.concat(current);
      }, []);
      setEnabledHardSkills(hardSkills.filter(skill => skill.enabled));
      setEnabledSoftSkills(softSkills.filter(skill => skill.enabled));
   }, [job.activities]);

   return <div className={styles.mySpace}>
      <MessageCard title="Sophie,">
         <span>Votre entretien annuel approche ! il est temps de mettre à jour vos activités et compétences, en ajoutant ou modifiant le caractère d'importance de celles déjà renseignées.</span>
      </MessageCard>
      <div className="activities-block">
         <div className="left">
            <div className="title">
               <h2>Mes Activités</h2>
               <BadgeCount>
                  15
               </BadgeCount>
            </div>
            <div className="description">
               <span>Sélectionnez ou recherchez une activité pour afficher ci-après ses compétences métiers et <u>soft skills</u> associés.</span>
            </div>
         </div>
         <div className="right">
            <div className="select-box">
               <SelectInput
                  name="language"
                  placeholder="Toutes mes activités"
                  options={[
                     { label: 'Activité A', value: 'a' },
                     { label: 'Activité B', value: 'b' },
                     { label: 'Activité C', value: 'c' },
                  ]}
               />
            </div>
            <Button className="add-button" style={ButtonStyle.REGULAR}>
               <BiPlusCircle size={20} color='#c7c7c7' />
               <span>Ajouter une activité</span>
            </Button>
         </div>
      </div>

      <div className="cards-slider-container">
         <div className="header">
            <div className="title-container">
               <h2>Mes compétences métiers <span className="light">(acquises ou souhaitées)</span></h2>
               <BadgeCount>
                  {enabledHardSkills.length}
               </BadgeCount>
            </div>
         </div>
         <CardsSlider<SkillType>
            breakpoints="yes"
            items={enabledHardSkills.sort((a, b) => Number(b.isBookmark) - Number(a.isBookmark))}
            card={item => <SkillCard skill={item} header={item.isBookmark ? undefined : 'Nouvelle compétence'} />}
            onCreate={() => setSkillTypeToCreate('hard')}
         />
      </div>
      <div className="cards-slider-container">
         <div className="header">
            <div className="title-container">
               <h2>Mes soft skills</h2>
               <BadgeCount>
                  3
               </BadgeCount>
            </div>
         </div>
         <CardsSlider<SkillType>
            breakpoints="yes"
            items={enabledSoftSkills.sort((a, b) => Number(b.isBookmark) - Number(a.isBookmark))}
            card={item => <SkillCard skill={item} />}
            onCreate={() => setSkillTypeToCreate('soft')}
         />
      </div>
      {skillTypeToCreate &&
         <BottomPopup className="add-skills-popup" onClose={() => setSkillTypeToCreate(null)}>
            <h2>Ajouter une compétence</h2>
            <h3>Quelle compétence souhaitez vous ajouter ?</h3>
            <div className="form-container">
               {skillTypeToCreate === 'hard' &&
                  <SelectInput
                     label="Compétence"
                     options={enabledHardSkills.map((skill, index) => ({ label: skill.label, value: index }))}
                  />
               }
               {skillTypeToCreate === 'soft' &&
                  <SelectInput
                     label="Compétence"
                     options={enabledSoftSkills.map((skill, index) => ({ label: skill.label, value: index }))}
                  />
               }
               <Checkbox
                  name="toTrain"
                  label="Souhait de formation"
               />
               <Textarea
                  name="comment"
                  label="Commentaire (facultatif)"
               />
               <p className="label" >Comment jugez-vous cette compétence ?</p>
               <RadioBoxes
                  name="score"
                  options={[
                     {
                        label: <div className="label-container">
                           Utile
                           <div className="stars-container">
                              <AiFillStar className={`icon`} />
                              <AiFillStar className={`icon disabled`} />
                           </div>
                        </div>,
                        value: 1,
                     },
                     {
                        label: <div className="label-container">
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
               <Button onClick={() => setSkillTypeToCreate(null)}>Ajouter</Button>
            </div>
         </BottomPopup>
      }
   </div>
}

export default MySpace;