import { useEffect, useState } from 'react';
import { IoMdPersonAdd } from 'react-icons/io';
import { FiChevronRight } from 'react-icons/fi';
import { HiUsers } from 'react-icons/hi';
import styles from './my-employees.module.scss';
import Pagination from '../../../../components/globals/Pagination/Pagination';
import TextInput from '../../../../components/globals/TextInput/TextInput';
import Button from '../../../../components/globals/Button/Button';
import { AiOutlineSearch } from 'react-icons/ai';
import { EmployeeType } from '../../../../defs/types';
import { useDataContext } from '../../../../contexts/data/useDataContext';
import Gauge from '../../../../components/globals/Gauge/Gauge';
import RightPopup from '../../../../components/globals/RightPopup/RightPopup';
import { CgProfile } from 'react-icons/cg';
import DatePicker from '../../../../components/globals/DatePicker/DatePicker';
import SelectInput from '../../../../components/globals/SelectInput/SelectInput';

const MyEmployees = () => {
   const dataContext = useDataContext();
   const items = dataContext.data.employees;

   const [searchedEmployee, setSearchedEmployee] = useState('');
   const [searchedJob, setSearchedJob] = useState('');
   const [searchedSkill, setSearchedSkill] = useState('');
   const [searchedPeriod, setSearchedPeriod] = useState('');

   const [isPopupOpen, setIsPopupOpen] = useState(false);
   const [isNewEmployeePopupOpen, setIsNewEmployeePopupOpen] = useState(false);

   const useWindowSize = () => {
      const [windowSize, setWindowSize] = useState<number | null>(null);
      const handleResize = () => {
         if (window && window.innerWidth) {
            setWindowSize(window.innerWidth);
         }
      }
      useEffect(() => {
         if (window) {
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
         }
      }, []);
      return windowSize;
   }
   const size = useWindowSize();
   const [currentItem, setCurrentItem] = useState<EmployeeType | null>(null);
   const [currentItems, setCurrentItems] = useState<EmployeeType[]>([]);
   const [currentPage, setCurrentPage] = useState(1);
   const nbItemsPerPage = 8;
   useEffect(() => {
      if (items) {
         const newItems = items.slice((currentPage - 1) * nbItemsPerPage, (currentPage - 1) * nbItemsPerPage + nbItemsPerPage);
         setCurrentItems(newItems);
      }
   }, [currentPage, items]);
   useEffect(() => {
      if (currentItem) {
         setIsPopupOpen(false);
         setIsNewEmployeePopupOpen(false);
      }
   }, [currentItem]);
   useEffect(() => {
      if (isPopupOpen) {
         setCurrentItem(null);
         setIsNewEmployeePopupOpen(false);
      }
   }, [isPopupOpen]);
   useEffect(() => {
      if (isNewEmployeePopupOpen) {
         setCurrentItem(null);
         setIsPopupOpen(false);
      }
   }, [isNewEmployeePopupOpen]);
   return (
      <div className={`${styles.myEmployeesContainer}`}>
         {currentItem &&
            <RightPopup className="employee-popup" onClose={() => setCurrentItem(null)}>
               <div className="employee-sheet-title">
                  <h1>Fiche salarié</h1>
               </div>
               <div className="photo-profile">
                  <CgProfile size={"150px"} />
               </div>
               <div className="employee-name">
                  {currentItem.firstname} {currentItem.lastname}
               </div>
               <div className="employee-job">
                  {currentItem.job}
               </div>
               <ul className="employee-data">
                  <li>Activités</li>
                  <li>Compétences</li>
                  <li>Soft skills</li>
                  <li>Historique (de poste, de formation/certif)</li>
                  <li>Actions sur fiche (suppression, mdoficiation, ...)</li>
               </ul>
            </RightPopup>
         }
         <div className="page-left">
            {size >= 1290 ? (
               <div className="set-buttons">
                  <Button onClick={() => setIsNewEmployeePopupOpen(() => true)}>
                     <span><i><IoMdPersonAdd size={20} /></i>Ajouter un salarié</span>
                  </Button>
                  <Button onUpload={files => console.log('file', files[0])}>
                     <span><i><HiUsers size={20} /></i>Import CSV</span>
                  </Button>
               </div>
            ) : (
               null
            )}
            <div className="search">
               <div className="title">
                  <h2>Recherche</h2>
               </div>
               <TextInput
                  label="Salarié"
                  name="employee"
                  placeholder="Nom, Prénom"
                  onChange={(value) => setSearchedEmployee(value)}
               />
               <TextInput
                  label="Métier"
                  name="job"
                  placeholder="Libellé métier, ROME ou FAP"
                  onChange={(value) => setSearchedJob(value)}
               />
               <TextInput
                  label="Compétence"
                  name="skill"
                  placeholder="Compétence métier ou soft skill"
                  onChange={(value) => setSearchedSkill(value)}
               />
               <DatePicker
                  label="Période"
                  name="period"
               />
               <div className="buttons">
                  <Button>Consulter</Button>
               </div>
            </div>
         </div>
         <div className="page-right">
            <div className="header">
               <h3>Votre entreprise compte X salariés</h3>
               <p>Sélectionez un salarié dans la liste ci-dessus pour accéder à sa fiche individuelle ou effectuez une recherche par métier / compétence.</p>
            </div>
            {size <= 1290 ? (
               <div className="set-buttons">
                  <Button onClick={() => setIsNewEmployeePopupOpen(() => true)}>
                     <span><i><IoMdPersonAdd size={20} /></i>Ajouter un salarié</span>
                  </Button>
                  <Button>
                     <span><i><HiUsers size={20} /></i>Import CSV</span>
                  </Button>
               </div>
            ) : (
               null
            )}
            <div className="main">
               <div className="header">
                  <div className="column-name">Nom</div>
                  <div className="column-name">Prénom</div>
                  <div className="column-name">Métier</div>
                  <div className="column-name">Compétences / Pertinence</div>
               </div>
               <div className="rows">
                  {currentItems.map((item, index) => (
                     <div key={index} className="row" onClick={() => setCurrentItem(item)}>
                        <div className="column">{item.firstname}</div>
                        <div className="column">{item.lastname}</div>
                        <div className="column">{item.job}</div>
                        <div className="column"><span>{item.skillRelevance}%</span><Gauge level={item.skillRelevance} /><i><FiChevronRight /></i></div>
                     </div>
                  ))}
               </div>
               <Pagination current={currentPage} total={items.length} pageSize={nbItemsPerPage} hideOnSinglePage={true} onChange={page => setCurrentPage(page)} />
            </div>
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
                     label="Salarié"
                     name="employee"
                     placeholder="Nom, Prénom"
                     onChange={(value) => setSearchedEmployee(value)}
                  />
                  <TextInput
                     label="Métier"
                     name="job"
                     placeholder="Libellé métier, ROME ou FAP"
                     onChange={(value) => setSearchedJob(value)}
                  />
                  <TextInput
                     label="Compétence"
                     name="skill"
                     placeholder="Compétence métier ou soft skill"
                     onChange={(value) => setSearchedSkill(value)}
                  />
                  <DatePicker
                     label="Période"
                     name="period"
                  />
                  <div className="buttons">
                     <Button>Consulter</Button>
                  </div>
               </div>
            </RightPopup>
         }
         {isNewEmployeePopupOpen &&
            <RightPopup onClose={() => setIsNewEmployeePopupOpen(false)}>
               <h2>Ajouter un salarié</h2>
               <br />
               <TextInput
                  label="Nom"
                  name="lastname"
               />
               <TextInput
                  label="Prénom"
                  name="firstname"
               />
               <SelectInput
                  name="skills"
                  label="Compétences"
                  options={[
                     { label: 'Compétence A', value: 'a' },
                     { label: 'Compétence B', value: 'b' },
                     { label: 'Compétence C', value: 'c' },
                  ]}
                  creatable
               />
               <br /><br />
               <Button onClick={() => setIsNewEmployeePopupOpen(false)}>Enregistrer</Button>
            </RightPopup>
         }
      </div>
   );
};

export default MyEmployees;