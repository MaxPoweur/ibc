import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { VisitType } from '../../../../defs/types';
import Button from '../../../globals/Button/Button';
import Card from '../../../globals/Card/Card';
import NewItemCard from '../../../globals/NewItemCard/NewItemCard';
import Pagination from '../../../globals/Pagination/Pagination';
import RightPopup from '../../../globals/RightPopup/RightPopup';
import VisitCard from '../VisitCard/VisitCard';
import styles from './VisitsPages.module.scss';

interface VisitsPagesProps {
   items: VisitType[];
   itemsPerPage?: number;
}
const VisitsPages = (props: VisitsPagesProps) => {
   const router = useRouter();
   const items = props.items;
   const [currentItem, setCurrentItem] = useState<null | VisitType>(null);
   const [currentItems, setCurrentItems] = useState<VisitType[]>([]);
   const [currentPage, setCurrentPage] = useState(1);
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
                  onClick={() => setCurrentItem(item)}
                  visit={item}
               />
            )}
         </div>
         <Pagination current={currentPage} total={items.length} pageSize={nbItemsPerPage} hideOnSinglePage={true} onChange={page => setCurrentPage(page)} />
         {currentItem &&
            <RightPopup className="right-popup" onClose={() => setCurrentItem(null)}>
               <div className="header">
                  <h2>{currentItem.company.name}</h2>
                  <span>Visite du {currentItem.date}</span>
               </div>

               <div className="content-block">
                  <h3>Objet de la visite</h3>
                  <p>{currentItem.object}</p>
               </div>

               <div className="content-block">
                  <h3>Durée de la visite</h3>
                  <p>{currentItem.duration}</p>
               </div>

               <div className="content-block">
                  <h3>Contact</h3>
                  <span>{currentItem.company.contacts[0].firstname} {currentItem.company.contacts[0].lastname}</span>
                  <span>{currentItem.company.contacts[0].function}</span>
                  <span>{currentItem.company.contacts[0].phone}</span>
                  <span>{currentItem.company.contacts[0].email}</span>
               </div>

               <div className="content-block">
                  <h3>Prochaine visite</h3>
                  <p>{currentItem.nextDate}</p>
               </div>

               <div className="content-block">
                  <h3>Compte-rendu</h3>
                  <p>{currentItem.summary}</p>
               </div>
               <div className="linked-files">
                  {currentItem.files} fichiers associés
               </div>
               <div className="button-container">
                  <Button onClick={() => router.push(`/acteur-local/entreprises/${currentItem.company.siret}`)}>Voir la fiche</Button>
               </div>
            </RightPopup>
         }
      </div>
   );
};

export default VisitsPages;