import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { JobType, VisitType } from '../../../../defs/types';
import Button from '../../../globals/Button/Button';
import NewItemCard from '../../../globals/NewItemCard/NewItemCard';
import Pagination from '../../../globals/Pagination/Pagination';
import RightPopup from '../../../globals/RightPopup/RightPopup';
import VisitCard from '../VisitCard/VisitCard';
import styles from './VisitsPages.module.scss';
import JobsStep from '../steps/JobsStep/JobsStep';
import RecruitmentNeedForm from '../../jobs/RecruitmentNeedForm/RecruitmentNeedForm';

interface VisitsPagesProps {
   items: VisitType[];
   itemsPerPage?: number;
}
const VisitsPages = (props: VisitsPagesProps) => {
   const router = useRouter();
   const items = props.items;
   const [currentItems, setCurrentItems] = useState<VisitType[]>([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [currentJob, setCurrentJob] = useState<null | JobType>(null);
   const nbItemsPerPage = props.itemsPerPage ?? 11;
   useEffect(() => {
      if (items) {
         const newItems = items.slice((currentPage - 1) * nbItemsPerPage, (currentPage - 1) * nbItemsPerPage + nbItemsPerPage);
         setCurrentItems(newItems);
      }
   }, [items, nbItemsPerPage, currentPage]);
   return (
      <div className={`${styles.VisitsPagesContainer}`}>

         <div className="visits">
            <NewItemCard onClick={() => router.push('/acteur-local/nouvelle-visite')} />
            {currentItems.map((item, index) =>
               <VisitCard
                  key={index}
                  onClick={() => router.push(`/acteur-local/visites/${item.id}`)}
                  visit={item}
               />
            )}
         </div>
         <Pagination current={currentPage} total={items.length} pageSize={nbItemsPerPage} hideOnSinglePage={true} onChange={page => setCurrentPage(page)} />
         {currentJob &&
            <RightPopup className="right-popup" onClose={() => setCurrentJob(null)}>
               <h3 className="title">{currentJob.name}</h3>
               <RecruitmentNeedForm job={currentJob} />
               <span className="last-visit">
                  Mise à jour lors de la visite du <strong>25/09/2022</strong>
               </span>
            </RightPopup>
         }
      </div>
   );
};

export default VisitsPages;