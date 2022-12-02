import { useEffect, useState } from 'react';
import Button from '../../../components/globals/Button/Button';
import { AiOutlineSearch } from 'react-icons/ai';
import Card from '../../../components/globals/Card/Card';
import Pagination from '../../../components/globals/Pagination/Pagination';
import RightPopup from '../../../components/globals/RightPopup/RightPopup';
import CardsSlider from '../../../components/globals/Slider/Slider';
import TextInput from '../../../components/globals/TextInput/TextInput';
import VisitCard from '../../../components/pages/visits/VisitCard/VisitCard';
import { useDataContext } from '../../../contexts/data/useDataContext';
import { CompanyType, VisitType } from '../../../defs/types';
import styles from './my-addresses.module.scss';

const MyAddresses = () => {
   const dataContext = useDataContext();
   const items = dataContext.data.companies;
   const visits = dataContext.data.visits;
   const [currentItem, setCurrentItem] = useState<null | CompanyType>(null);
   const [currentItems, setCurrentItems] = useState<CompanyType[]>([]);
   const [currentPage, setCurrentPage] = useState(1);
   const nbItemsPerPage = 6;
   const [isPopupOpen, setIsPopupOpen] = useState(false);
   useEffect(() => {
      if (items) {
         const newItems = items.slice((currentPage - 1) * nbItemsPerPage, (currentPage - 1) * nbItemsPerPage + nbItemsPerPage);
         setCurrentItems(newItems);
      }
   }, [items, currentPage]);
   return <div className={styles.MyAddressesContainer}>
      <div className="page-left">
         <div className="search">
            <div className="title">
               <h2>Recherche</h2>
            </div>
            <TextInput
               label="Structure"
               name="structure"
            />
            <TextInput
               label="Nom"
               name="lastname"
            />
            <TextInput
               label="Prénom"
               name="firstname"
            />
            <TextInput
               label="Territoire"
               name="territory"
            />
            <div className="buttons">
               <Button>Rechercher</Button>
            </div>
         </div>
      </div>
      <div className="page-right">
         <div className="header">
            <h3>Le projet « Identification des Besoins en Compétences des Entreprises » est financé dans le cadre du Pacte Régional d'Investissement dans les Compétences, initié par l'Etat, la Région et les partenaires sociaux.</h3>
            <p>A ce titre, vous trouverez dans ce carnet d’adresses l’ensemble des acteurs locaux qui interviennent auprès d’entreprises de Centre-Val de Loire.</p>
         </div>
         <div className="items">
            {currentItems.map((item, index) => <Card key={index} onClick={() => setCurrentItem(item)}>
               <h4 className="company-name">{item.name}</h4>
               <p>{item.contacts[0].lastname}</p>
               <p>{item.contacts[0].firstname}</p>
               <p>{item.zipCode} - {item.city}</p>
            </Card>
            )}
         </div>
         <Pagination current={currentPage} total={items.length} pageSize={nbItemsPerPage} hideOnSinglePage={true} onChange={page => setCurrentPage(page)} />
         {currentItem &&
            <RightPopup onClose={() => setCurrentItem(null)}>
               <h2>{currentItem.name}</h2>

               <div className="content-block">
                  <h3>Identité</h3>
                  <p>{currentItem.contacts[0].lastname} {currentItem.contacts[0].firstname}</p>
               </div>

               <div className="content-block">
                  <h3>Adresse mail</h3>
                  <p>{currentItem.contacts[0].email}</p>
               </div>

               <div className="content-block">
                  <h3>Téléphone</h3>
                  <p>{currentItem.contacts[0].phone}</p>
               </div>

               <div className="content-block">
                  <h3>Champs d'intervention</h3>
                  {currentItem.fields.map((field, index) => <p key={index}>- {field}</p>)}
               </div>

               <div className="content-block">
                  <h3>Territoire</h3>
                  <p>{currentItem.zipCode} - {currentItem.city}</p>
               </div>
               <br />
               <div className="visits-slider">
                  <h2>Visites</h2>
                  <CardsSlider<VisitType>
                     items={visits}
                     itemsPerView={1}
                     breakpoints="no"
                     card={item => <VisitCard
                        visit={item}
                     />}
                  />
               </div>
            </RightPopup>
         }
      </div>
      {isPopupOpen &&
         <RightPopup onClose={() => setIsPopupOpen(false)}>
            <div className="search">
               <div className="title">
                  <h2>Recherche</h2>
               </div>
               <TextInput
                  label="Structure"
                  name="structure"
               />
               <TextInput
                  label="Nom"
                  name="lastname"
               />
               <TextInput
                  label="Prénom"
                  name="firstname"
               />
               <TextInput
                  label="Territoire"
                  name="territory"
               />
               <div className="buttons">
                  <Button>Rechercher</Button>
               </div>
            </div>
         </RightPopup>
      }
      <Button className="search-icon" onClick={() => setIsPopupOpen(true)}>
         <AiOutlineSearch />
      </Button>
   </div >
}

export default MyAddresses;