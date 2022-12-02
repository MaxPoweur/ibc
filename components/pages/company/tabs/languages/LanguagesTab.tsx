
import { CompanyType, SkillType, WorkingConditionType } from '../../../../../defs/types';
import BadgeCount from '../../../../globals/BadgeCount/BadgeCount';
import SearchInput from '../../../../globals/SearchInput/SearchInput';
import styles from './LanguagesTab.module.scss';

import { AiFillStar } from 'react-icons/ai';
import { IoMdSchool } from 'react-icons/io';
import CardsSlider from '../../../../globals/Slider/Slider';
import SkillCard from '../../../jobs/SkillCard/SkillCard';
import { useDataContext } from '../../../../../contexts/data/useDataContext';
import WorkingConditionCard from '../../../jobs/WorkingConditionCard/WorkingConditionCard';

interface LanguagesTabProps {
   company: CompanyType;
}

const LanguagesTab = (props: LanguagesTabProps) => {
   const dataContext = useDataContext();
   const job = dataContext.data.jobs[0];
   const languages = job.activities.map(activity => activity.languages).reduce((previous, current) => {
      return previous.concat(current);
   }, []);
   const workingConditions = job.activities.map(activity => activity.workingConditions).reduce((previous, current) => {
      return previous.concat(current);
   }, []);
   return (
      <div className={`${styles.LanguagesTabContainer}`}>
         <div className="cards-slider-container">
            <div className="header">
               <div className="title-container">
                  <h2>Langues</h2>
                  <BadgeCount>{languages.length}</BadgeCount>
               </div>
               <SearchInput />
            </div>
            <CardsSlider<SkillType>
               breakpoints="yes"
               items={languages.sort((a, b) => b.score - a.score)}
               card={item => <SkillCard skill={item} />}
            />
         </div>
         <div className="cards-slider-container">
            <div className="header">
               <div className="title-container">
                  <h2>Conditions de travail</h2>
                  <BadgeCount>{workingConditions.length}</BadgeCount>
               </div>
               <SearchInput />
            </div>
            <CardsSlider<WorkingConditionType>
               items={workingConditions}
               breakpoints="yes"
               card={item => <WorkingConditionCard workingCondition={item} />}
            />
         </div>
      </div>
   );
};

export default LanguagesTab;