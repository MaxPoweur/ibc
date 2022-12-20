import { useEffect, useState } from 'react';
import { AiFillStar, AiOutlineStop } from 'react-icons/ai';
import { BsArchive } from 'react-icons/bs';
import { IoMdSchool } from 'react-icons/io';
import { useDataContext } from '../../../../../contexts/data/useDataContext';
import { ActivityType, SkillType } from '../../../../../defs/types';
import BadgeCount from '../../../../globals/BadgeCount/BadgeCount';
import BottomPopup from '../../../../globals/BottomPopup/BottomPopup';
import Button, { ButtonStyle } from '../../../../globals/Button/Button';
import Checkbox from '../../../../globals/Checkbox/Checkbox';
import NewItemCard from '../../../../globals/NewItemCard/NewItemCard';
import SearchInput from '../../../../globals/SearchInput/SearchInput';
import CardsSlider from '../../../../globals/Slider/Slider';
import SkillCard from '../../../jobs/SkillCard/SkillCard';
import EditSkillPopup from '../../../skills/EditSkillPopup/EditSkillPopup';
import styles from './SkillsStep.module.scss';
import _ from 'lodash';
import SelectInput from '../../../../globals/SelectInput/SelectInput';
import { BiPlusCircle } from 'react-icons/bi';
import MyActivitiesBar from '../../../activities/MyActivitiesBar/MyActivitiesBar';

interface SkillsStepProps {
}
const SkillsStep = (props: SkillsStepProps) => {
   const dataContext = useDataContext();
   const [displayAllHardSkills, setDisplayAllHardSkills] = useState(false);
   const [displayAllSoftSkills, setDisplayAllSoftSkills] = useState(false);
   const [showAddSkillsPopup, setShowAddSkillsPopup] = useState(false);
   const [skillToEdit, setSkillToEdit] = useState<null | SkillType>(null);
   const job = dataContext.data.jobs[0];
   const hardSkills = job.activities.map(activity => activity.hardSkills).reduce((previous, current) => {
      return previous.concat(current);
   }, []);
   const softSkills = job.activities.map(activity => activity.softSkills).reduce((previous, current) => {
      return previous.concat(current);
   }, []);
   const enabledHardSkills = hardSkills.filter(skill => skill.enabled);
   const enabledSoftSkills = softSkills.filter(skill => skill.enabled);
   const cardsPerView = 4;
   const onAddSkills = () => {
      setShowAddSkillsPopup(false);
   };
   return (
      <div className={`${styles.SkillsStepContainer}`}>
         <h1 className="title-container">
            {job.name}
         </h1>
         <MyActivitiesBar />
         <div className="cards-slider-container">
            <div className="header">
               <div className="title-container">
                  <h2>Compétences métiers</h2>
                  <BadgeCount>{enabledHardSkills.length}</BadgeCount>
               </div>
               <div className="right">
                  {enabledHardSkills.length >= cardsPerView &&
                     <Button onClick={() => setDisplayAllHardSkills(old => !old)}>
                        {displayAllHardSkills ?
                           'Réduire toutes les compétences'
                           :
                           'Afficher toutes les compétences'
                        }
                     </Button>
                  }
                  <SearchInput />
               </div>
            </div>
            {displayAllHardSkills ?
               <div className="skills">
                  <NewItemCard onClick={() => setShowAddSkillsPopup(true)} />
                  {enabledHardSkills.sort((a, b) => Number(b.isBookmark) - Number(a.isBookmark))
                     .map((item, index) => <SkillCard
                        key={index}
                        skill={item}
                        onClick={() => setSkillToEdit(item)}
                     />)}
               </div>
               :
               <CardsSlider<SkillType>
                  breakpoints='yes'
                  items={enabledHardSkills.sort((a, b) => Number(b.isBookmark) - Number(a.isBookmark))}
                  card={item => <SkillCard skill={item} onClick={() => setSkillToEdit(item)} />}
                  onCreate={() => setShowAddSkillsPopup(true)}
                  itemsPerView={cardsPerView}
               />
            }
         </div>
         <div className="cards-slider-container">
            <div className="header">
               <div className="title-container">
                  <h2>Soft skills</h2>
                  <BadgeCount>{enabledSoftSkills.length}</BadgeCount>
               </div>
               <div className="right">
                  {enabledSoftSkills.length >= cardsPerView &&
                     <Button onClick={() => setDisplayAllSoftSkills(old => !old)}>
                        {displayAllSoftSkills ?
                           'Réduire tous les soft skills'
                           :
                           'Afficher tous les soft skills'
                        }
                     </Button>
                  }
                  <SearchInput />
               </div>
            </div>
            {displayAllSoftSkills ?
               <div className="skills">
                  <NewItemCard onClick={() => setShowAddSkillsPopup(true)} />
                  {enabledSoftSkills.sort((a, b) => Number(b.isBookmark) - Number(a.isBookmark))
                     .map((item, index) => <SkillCard
                        key={index}
                        skill={item}
                        onClick={() => setSkillToEdit(item)}
                     />)}
               </div>
               :
               <CardsSlider<SkillType>
                  breakpoints='yes'
                  items={enabledSoftSkills.sort((a, b) => Number(b.isBookmark) - Number(a.isBookmark))}
                  card={item => <SkillCard skill={item} onClick={() => setSkillToEdit(item)} />}
                  onCreate={() => setShowAddSkillsPopup(true)}
                  itemsPerView={cardsPerView}
               />
            }
         </div>
         {skillToEdit &&
            <EditSkillPopup skill={skillToEdit} label={skillToEdit.label} onClose={() => setSkillToEdit(null)} />
         }
         {showAddSkillsPopup &&
            <BottomPopup className="add-skills-popup" onClose={() => setShowAddSkillsPopup(false)}>
               <div className="form-container">
                  <h2>Quelle compétence souhaitez-vous ajouter ?</h2>
                  <p>1.  Sélectionnez des compétences via le moteur de recherche ou dans la liste ci-dessous ;</p>
                  <p>2. Affectez un caractère d'importance à chacun.</p>
                  {/* <SelectInput
                     label="Compétence"
                     options={hardSkills.map((skill, index) => ({ label: skill.label, value: index }))}
                  /> */}
                  <br />
                  <div className="activities">
                     {job.activities.map((activity, index) => <ActivitySkills key={index} activity={activity} />)}
                  </div>
                  <Button onClick={onAddSkills}>Ajouter</Button>
               </div>
            </BottomPopup>
         }
      </div>
   );
};
interface ActivitySkillsProps {
   activity: ActivityType;
}
const ActivitySkills = (props: ActivitySkillsProps) => {
   const [skills, setSkills] = useState<SkillType[]>([]);
   const [skillsIdsToAdd, setSkillsIdsToAdd] = useState<number[]>([]);
   const { activity } = props;
   useEffect(() => {
      setSkills(() => activity.hardSkills.concat(activity.softSkills).filter(skill => !skill.enabled));
   }, [activity]);

   const onSkillCheck = (skillId: number, checked: boolean) => {
      if (checked) {
         setSkillsIdsToAdd(old => old.includes(skillId) ? old : [...old, skillId]);
      } else {
         setSkillsIdsToAdd(old => old.filter(id => id !== skillId));
      }
   };
   const updateSkill = (skill: SkillType, field: string, value: any) => {
      if (!isSkillEnabled(skill.id)) {
         return;
      }
      const newSkill = { ...skill, [field]: value };
      const newSkills = skills.map(item => item.id === newSkill.id ? newSkill : item);
      setSkills(() => newSkills);
   };
   const isSkillEnabled = (skillId: number) => {
      return skillsIdsToAdd.includes(skillId);
   }
   if (!skills || skills.length === 0) {
      return null;
   }
   return <div className="activity-container">
      <h3>{activity.name}</h3>
      <div className="rows">
         {skills.map((skill, index) => {
            const enabled = isSkillEnabled(skill.id);
            const score = enabled ? skill.score : 0;
            skill = {
               ...skill,
            };
            return <div className={`row ${enabled ? 'enabled' : 'disabled'}`} key={index}>
               <div className="left">
                  <Checkbox
                     label={`${skill.label}`}
                     name={`activity-skills-${activity.id}-${skill.id}`}
                     defaultValue={isSkillEnabled(skill.id)}
                     onChange={value => onSkillCheck(skill.id, value)}
                  />
               </div>
               <div className="right">
                  <span className="usefullness">
                     {score === -1 ?
                        'Obsolète' :
                        score === 0 ?
                           'Non pertinente'
                           : score === 1 ?
                              'Utile'
                              : score === 2 ?
                                 'Indispensable'
                                 : ''}
                  </span>
                  <BsArchive className={`icon ${score !== -1 && 'disabled'}`} onClick={() => updateSkill(skill, 'score', -1)} />
                  <AiOutlineStop className={`icon ${score !== 0 && 'disabled'}`} onClick={() => updateSkill(skill, 'score', 0)} />
                  {skill.score > 0 ?
                     <>
                        {[...Array(score)].map((x, index) =>
                           <AiFillStar key={index} className={`icon filled`} onClick={() => updateSkill(skill, 'score', index + 1)} />
                        )}
                        {[...Array(2 - score)].map((x, index) =>
                           <AiFillStar key={index} className={`icon disabled`} onClick={() => updateSkill(skill, 'score', score + index + 1)} />
                        )}
                     </>
                     :
                     <>
                        <AiFillStar className={`icon disabled`} onClick={() => updateSkill(skill, 'score', 1)} />
                        <AiFillStar className={`icon disabled`} onClick={() => updateSkill(skill, 'score', 2)} />
                     </>
                  }
                  <div className={`to-train ${(!skill.toTrain || !enabled) && 'disabled'}`}>
                     <IoMdSchool className={`icon`} onClick={() => updateSkill(skill, 'toTrain', !skill.toTrain)} />
                  </div>
               </div>
            </div>
         })}
      </div>
   </div>
};
export default SkillsStep;