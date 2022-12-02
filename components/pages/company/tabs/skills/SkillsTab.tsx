
import { CompanyType } from '../../../../../defs/types';
import CheckboxGroup from '../../../../globals/CheckboxGroup/CheckboxGroup';
import Button from '../../../../globals/Button/Button';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import SearchInput from '../../../../globals/SearchInput/SearchInput';
import RightPopup from '../../../../globals/RightPopup/RightPopup';
import GraphCard from '../../../dataviz/GraphCard/GraphCard';
import styles from './SkillsTab.module.scss';

interface SkillsTabProps {
   company: CompanyType;
}
const SkillsTab = (props: SkillsTabProps) => {
   const [isPopupOpen, setIsPopupOpen] = useState(false);
   return (
      <div className={`${styles.SkillsTabContainer}`}>
         <div className="two-cols">
            <div className="page-left">
               <h2 className="title">Recherche</h2>
               <SearchInput className="search-input-container" />
               <h2 className="title">Filtres</h2>
               <h4 className="subtitle">Importance</h4>
               <CheckboxGroup
                  name="importance"
                  checkboxes={[
                     { label: 'Obsolète', value: 0 },
                     { label: 'Non-pertinente', value: 1 },
                     { label: 'Utile', value: 2, defaultValue: true },
                     { label: 'Indispensable', value: 3 },
                  ]}
               />
               <br />
               <h4 className="subtitle">Compétences</h4>
               <CheckboxGroup
                  name="skills"
                  checkboxes={[
                     { label: 'Compétences métiers uniquement', value: 0 },
                     { label: 'Soft skills uniquement', value: 1, defaultValue: true },
                     { label: 'Compétence A', value: 2, defaultValue: true },
                     { label: 'Compétence B', value: 3, defaultValue: true },
                     { label: 'Compétence C', value: 4 },
                     { label: 'Compétence D', value: 5, defaultValue: true },
                     { label: 'Compétence E', value: 6, defaultValue: true },
                  ]}
                  enableGroupFilter={true}
               />
            </div>
            <div className="page-right">
               <div className="graphs">
                  <GraphCard
                     title="Répartition des compétences métier"
                     description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                     source="Lorem ipsum dolor sit amet"
                     lastUpdate="25/09/2022"
                     headerHeight="90px"
                     mainHeight="300px"
                  />
                  <GraphCard
                     title="Répartition des soft skills"
                     description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                     source="Lorem ipsum dolor sit amet"
                     lastUpdate="25/09/2022"
                     headerHeight="90px"
                     mainHeight="300px"
                  />
               </div>
            </div>
            <Button className="search-icon" onClick={() => setIsPopupOpen(true)}>
               <AiOutlineSearch />
            </Button>
         {isPopupOpen &&
            <RightPopup onClose={() => setIsPopupOpen(false)}>
               <div className="search">
                  <h2 className="title">Recherche</h2>
                  <SearchInput className="search-input-container" />
                  <h2 className="title">Filtres</h2>
                  <h4 className="subtitle">Importance</h4>
                  <CheckboxGroup
                     name="popup-importance"
                     checkboxes={[
                        { label: 'Obsolète', value: 0 },
                        { label: 'Non-pertinente', value: 1 },
                        { label: 'Utile', value: 2, defaultValue: true },
                        { label: 'Indispensable', value: 3 },
                     ]}
                  />
                  <br />
                  <h4 className="subtitle">Compétences</h4>
                  <CheckboxGroup
                     name="popup-skills"
                     checkboxes={[
                        { label: 'Compétences métiers uniquement', value: 0 },
                        { label: 'Soft skills uniquement', value: 1, defaultValue: true },
                        { label: 'Compétence A', value: 2, defaultValue: true },
                        { label: 'Compétence B', value: 3, defaultValue: true },
                        { label: 'Compétence C', value: 4 },
                        { label: 'Compétence D', value: 5, defaultValue: true },
                        { label: 'Compétence E', value: 6, defaultValue: true },
                     ]}
                     enableGroupFilter={true}
                  />
               </div>
            </RightPopup>
            }
         </div>
      </div>
   );
};

export default SkillsTab;