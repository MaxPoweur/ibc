import { useEffect, useState } from 'react';
import { GrTrophy } from 'react-icons/gr';
import { useDataContext } from '../../../../../contexts/data/useDataContext';
import { CompanyType, JobType } from '../../../../../defs/types';
import Card from '../../../../globals/Card/Card';
import RightPopup from '../../../../globals/RightPopup/RightPopup';
import SearchInput from '../../../../globals/SearchInput/SearchInput';
import RecruitmentNeedForm from '../../../jobs/RecruitmentNeedForm/RecruitmentNeedForm';
import styles from './RecruitmentNeedsTab.module.scss';

interface RecruitmentNeedsTabProps {
   company: CompanyType;
}
const RecruitmentNeedsTab = (props: RecruitmentNeedsTabProps) => {
   const dataContext = useDataContext();
   const items = dataContext.data.jobs;
   const [currentItem, setCurrentItem] = useState<null | JobType>(null);
   const [currentItems, setCurrentItems] = useState<JobType[]>([]);
   const [currentPage, setCurrentPage] = useState(1);
   const nbItemsPerPage = 11;
   useEffect(() => {
      if (items) {
         const newItems = items.slice((currentPage - 1) * nbItemsPerPage, (currentPage - 1) * nbItemsPerPage + nbItemsPerPage).sort((a, b) => Number(b.keyPosition) - Number(a.keyPosition));
         setCurrentItems(newItems);
      }
   }, [items, currentPage]);
   return (
      <div className={`${styles.RecruitmentNeedsTabContainer}`}>
         <SearchInput className="search-input-container" />
         <div className="jobs">
            {currentItems.map((job, index) => <Card key={index} onClick={() => setCurrentItem(job)}>
               {job.keyPosition &&
                  <div className="key-position-icon">
                     <GrTrophy />
                  </div>}
               <h4>{job.name}</h4>
               {job.vacantPositions === 1 ?
                  <span>{job.vacantPositions} poste vacant</span>
                  :
                  <span>{job.vacantPositions} postes vacants</span>
               }
            </Card>)}
         </div>
         {currentItem &&
            <RightPopup className="right-popup" onClose={() => setCurrentItem(null)}>
               <h3 className="title">{currentItem.name}</h3>
               <RecruitmentNeedForm job={currentItem} />
               <span className="last-visit">
                  Mise à jour lors de la visite du <strong>25/09/2022</strong>
               </span>
            </RightPopup>
         }
      </div>
   );
};

export default RecruitmentNeedsTab;