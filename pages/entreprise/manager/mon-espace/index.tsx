import React, { useState } from 'react';
import { FiInfo } from 'react-icons/fi';
import Button from '../../../../components/globals/Button/Button';
import { AiOutlineSearch } from 'react-icons/ai';
import TextInput from '../../../../components/globals/TextInput/TextInput';
import RightPopup from '../../../../components/globals/RightPopup/RightPopup';
import GraphCard from '../../../../components/pages/dataviz/GraphCard/GraphCard';
import styles from './my-space.module.scss';

const MySpace = () => {
   const [isPopupOpen, setIsPopupOpen] = useState(false);
   const [searchedEmployee, setSearchedEmployee] = useState('');
   const [searchedJob, setSearchedJob] = useState('');
   const [searchedSkill, setSearchedSkill] = useState('');

   return (
      <div className={`${styles.mySpaceContainer}`}>
         <div className="page-left">
            <div className="search">
               <div className="title">
                  <h2>Accès rapide</h2>
                  <span>Que souhaitez-vous consulter ?</span>
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
               <div className="buttons">
                  <Button>Consulter</Button>
               </div>
            </div>
         </div>
         <div className="page-right">
            <div className="header">
               <h3>Dans votre entreprise</h3>
               <p>X salariés exercent Y métiers et possèdent Z compétences.</p>
            </div>
            <div className="graphs">
               <div className="row">
                  <GraphCard
                     title="Titre indicateur régional"
                     description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                     source="Lorem ipsum dolor sit amet"
                     lastUpdate="25/09/2022"
                  />
                  <GraphCard
                     title="Titre indicateur régional"
                     description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                     source="Lorem ipsum dolor sit amet"
                     lastUpdate="25/09/2022"
                  />
               </div>
               <div className="row">
                  <GraphCard
                     title="Titre indicateur régional"
                     description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                     source="Lorem ipsum dolor sit amet"
                     lastUpdate="25/09/2022"
                  />
               </div>
            </div>
         </div>
         <Button className="search-icon" onClick={() => setIsPopupOpen(true)}>
            <AiOutlineSearch />
         </Button>
         {isPopupOpen &&
               <RightPopup onClose={() => setIsPopupOpen(false)}>
                  <div className="search">
                     <div className="title">
                        <h2>Accès rapide</h2>
                        <span>Que souhaitez-vous consulter ?</span>
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
                     <div className="buttons">
                        <Button>Consulter</Button>
                     </div>
                  </div>
               </RightPopup>
            }         
      </div>
   );
};

export default MySpace;