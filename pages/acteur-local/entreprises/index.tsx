import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Button from '../../../components/globals/Button/Button';
import { AiOutlineSearch } from 'react-icons/ai';
import Card from '../../../components/globals/Card/Card';
import Pagination from '../../../components/globals/Pagination/Pagination';
import RightPopup from '../../../components/globals/RightPopup/RightPopup';
import TextInput from '../../../components/globals/TextInput/TextInput';
import { useDataContext } from '../../../contexts/data/useDataContext';
import { CompanyType } from '../../../defs/types';
import styles from './companies.module.scss';

const Companies = () => {
   const dataContext = useDataContext();
   const items = dataContext.data.companies;
   const router = useRouter()
   const [currentItems, setCurrentItems] = useState<CompanyType[]>([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [isPopupOpen, setIsPopupOpen] = useState(false);
   const nbItemsPerPage = 6;
   useEffect(() => {
      if (items) {
         const newItems = items.slice((currentPage - 1) * nbItemsPerPage, (currentPage - 1) * nbItemsPerPage + nbItemsPerPage);
         setCurrentItems(newItems);
      }
   }, [items, currentPage]);
   return <div className={`${styles.companiesContainer}`}>
      <div className="page-left">
         <div className="search">
            <div className="title">
               <h2>Recherche</h2>
            </div>
            <TextInput
               label="Entreprise"
               name="company"
            />
            <TextInput
               label="SIRET"
               name="siret"
            />
            <TextInput
               label="Naf732"
               name="naf"
            />
            <TextInput
               label="Territoire"
               name="territory"
               placeholder="Zone d'emploi, département ou région"
            />
            <div className="buttons">
               <Button>Rechercher</Button>
            </div>
         </div>
      </div>
      <div className="page-right">
         <div className="header">
            <h4>Retrouvez les XX XXX entreprises de la région Centre-Val de Loire</h4>
            <p>et identifiez leurs besoins en compétences recensés lors des visites des acteurs locaux</p>
         </div>
         <h3>Dernières fiches entreprises mises à jour</h3>
         <div className="items">
            {currentItems.map((item, index) => <Card key={index} onClick={() => router.push(`/acteur-local/entreprises/${item.siret}`)}>
               <span className="date-delay">{item.createdAtDelay}</span>
               <h3 className="company-name">{item.name}</h3>
               <p>
                  <span style={{ marginRight: "5px" }}>SIRET</span> {item.siret}
               </p>
               <p>
                  <span style={{ marginRight: "5px" }}>NAF732</span> {item.naf}
               </p>
               <p>
                  <span>{item.zipCode}</span> - {item.city}
               </p>
            </Card>
            )}
         </div>
         <Pagination current={currentPage} total={items.length} pageSize={nbItemsPerPage} hideOnSinglePage={true} onChange={page => setCurrentPage(page)} />
      </div>
      <Button className="search-icon" onClick={() => setIsPopupOpen(true)}>
            <AiOutlineSearch />
      </Button>
      {isPopupOpen &&
         <RightPopup onClose={() => setIsPopupOpen(false)}>
            <div className="search">
               <div className="title">
                  <h2>Recherche</h2>
               </div>
               <TextInput
                  label="Entreprise"
                  name="company"
               />
               <TextInput
                  label="SIRET"
                  name="siret"
               />
               <TextInput
                  label="Naf732"
                  name="naf"
               />
               <TextInput
                  label="Territoire"
                  name="territory"
                  placeholder="Zone d'emploi, département ou région"
               />
               <div className="buttons">
                  <Button>Rechercher</Button>
               </div>
            </div>
         </RightPopup>
      }
   </div>
}

export default Companies;