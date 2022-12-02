import { CompanyType } from '../../../../../defs/types';
import Checkbox from '../../../../globals/Checkbox/Checkbox';
import CheckboxGroup from '../../../../globals/CheckboxGroup/CheckboxGroup';
import Button from '../../../../globals/Button/Button';
import SearchInput from '../../../../globals/SearchInput/SearchInput';
import { useEffect, useState } from 'react';
import RightPopup from '../../../../globals/RightPopup/RightPopup';
import { AiOutlineSearch } from 'react-icons/ai';
import GraphCard from '../../../dataviz/GraphCard/GraphCard';
import styles from './JobsTab.module.scss';

interface JobsTabProps {
   company: CompanyType;
}
const JobsTab = (props: JobsTabProps) => {
   const [isPopupOpen, setIsPopupOpen] = useState(false);
   return (
      <div className={`${styles.JobsTabContainer}`}>
         <div className="two-cols">
            <div className="page-left">
               <h2 className="title">Recherche</h2>
               <SearchInput className="search-input-container" />
               <h2 className="title">Filtres</h2>
               <CheckboxGroup
                  name="jobs"
                  checkboxes={[
                     { label: 'Métier A', value: 'jobA', defaultValue: true },
                     { label: 'Métier B', value: 'jobB' },
                     { label: 'Métier C', value: 'jobC', defaultValue: true },
                     { label: 'Métier D', value: 'jobD' },
                  ]}
                  enableGroupFilter={true}
               />
            </div>
            <div className="page-right">
               <GraphCard
                  title="Répartition des métiers de l'entreprise"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  source="Lorem ipsum dolor sit amet"
                  lastUpdate="25/09/2022"
                  headerHeight="90px"
                  mainHeight="300px"
               />
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
                  <CheckboxGroup
                     name="responsive-jobs"
                     checkboxes={[
                        { label: 'Métier A', value: 'jobA', defaultValue: true },
                        { label: 'Métier B', value: 'jobB' },
                        { label: 'Métier C', value: 'jobC', defaultValue: true },
                        { label: 'Métier D', value: 'jobD' },
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

export default JobsTab;