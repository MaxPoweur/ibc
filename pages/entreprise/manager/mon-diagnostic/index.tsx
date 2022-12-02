import React, { useState } from 'react';
import Button from '../../../../components/globals/Button/Button';
import { AiOutlineSearch } from 'react-icons/ai';
import { GoTriangleDown } from 'react-icons/go';
import RightPopup from '../../../../components/globals/RightPopup/RightPopup';
import Checkbox from '../../../../components/globals/Checkbox/Checkbox';
import TextInput from '../../../../components/globals/TextInput/TextInput';
import GraphCard from '../../../../components/pages/dataviz/GraphCard/GraphCard';

import styles from './my-diagnostic.module.scss';

const MyDiagnostic = () => {
   const [searchedJob, setSearchedJob] = useState('');
   const [searchedSkill, setSearchedSkill] = useState('');
   const [searchSecondJob, setSearchSecondJob] = useState('');
   const [searchTerritory, setSearchTerritory] = useState('');
   const [searchApe, setSearchApe] = useState(false);
   const [isActive, setIsActive] = useState(false);
   const [isPopupOpen, setIsPopupOpen] = useState(false);
   const [isPopupOpen2, setIsPopupOpen2] = useState(false);
   const handleClick = event => {
      // 👇️ toggle isActive state variable
      setIsActive(current => !current);
    };
   return (
      <div className={`${styles.myDiagnosticContainer}`}>
         <div className="page-left">
            <div className="search">
               <div className="title">
                  <h2>Recherche</h2>
                  <span>Que souhaitez-vous consulter ?</span>
               </div>
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
               <div className="text">
                  <span>Périmètre de comparaison :</span>
               </div>
               <TextInput
                  label="Métier (2 max.)"
                  name="job"
                  placeholder="Libellé métier, ROME ou FAP"
                  onChange={(value) => setSearchedJob(value)}
               />
               <TextInput
                  label="Territoire (2 max.)"
                  name="territory"
                  placeholder="Zone d'emploi, département ou région"
                  onChange={(value) => setSearchTerritory(value)}
               />
               <Checkbox
                  name="ape"
                  label="Possèdant le même code APE"
               />
               <div className="buttons">
                  <Button>Diagnostiquer</Button>
               </div>
            </div>
            <div className="filters">
               <div className="header">
                  <h2 className="themes">Thématiques</h2>
                  <span className="question">Quel filtre souhaitez-vous appliquer ?</span>
               </div>
               <div className="main">
                  <div className="category">
                     <h3>Compétences métier</h3>
                     <span>Compétences les plus demandées</span>
                     <span>Détail des compétences</span>
                  </div>
                  <div className="category">
                     <h3>Formation et reconversion</h3>
                     <span>Formation</span>
                     <span>Reconversion</span>
                  </div>
                  <div className="category">
                     <h3>Diagnostic</h3>
                     <span>Carte d'identité</span>
                     <span>Salariés</span>
                  </div>
                  <div className="category">
                     <h3>Marché du travail</h3>
                     <span>Tension</span>
                     <span>Offres d'emploi</span>
                  </div>
               </div>
            </div>
         </div>
         <div className="page-right">
         <div className="responsive-themes-container">
            <Button className="themes-responsive-button" onClick={() => setIsPopupOpen(true)}>
               <span>Thématiques</span>
            </Button>
         </div>
         {isPopupOpen &&
               <RightPopup onClose={() => setIsPopupOpen(false)}>
                  <div className="filters">
                     <div className="header">
                        <h2 className="themes">Thématiques</h2>
                        <span className="question">Quel filtre souhaitez-vous appliquer ?</span>
                     </div>
                     <div className="main">
                        <div className="category">
                           <h3>Compétences métier</h3>
                           <span>Compétences les plus demandées</span>
                           <span>Détail des compétences</span>
                        </div>
                        <div className="category">
                           <h3>Formation et reconversion</h3>
                           <span>Formation</span>
                           <span>Reconversion</span>
                        </div>
                        <div className="category">
                           <h3>Diagnostic</h3>
                           <span>Carte d'identité</span>
                           <span>Salariés</span>
                        </div>
                        <div className="category">
                           <h3>Marché du travail</h3>
                           <span>Tension</span>
                           <span>Offres d'emploi</span>
                        </div>
                     </div>
                  </div>
               </RightPopup>
            }
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
         <Button className="search-icon" onClick={() => setIsPopupOpen2(true)}>
            <AiOutlineSearch />
         </Button>
         {isPopupOpen2 &&
            <RightPopup onClose={() => setIsPopupOpen2(false)}>
               <div className="search">
                  <div className="title">
                     <h2>Recherche</h2>
                     <span>Que souhaitez-vous consulter ?</span>
                  </div>
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
                  <div className="text">
                     <span>Périmètre de comparaison :</span>
                  </div>
                  <TextInput
                     label="Métier (2 max.)"
                     name="job"
                     placeholder="Libellé métier, ROME ou FAP"
                     onChange={(value) => setSearchedJob(value)}
                  />
                  <TextInput
                     label="Territoire (2 max.)"
                     name="territory"
                     placeholder="Zone d'emploi, département ou région"
                     onChange={(value) => setSearchTerritory(value)}
                  />
                  <Checkbox
                     name="ape"
                     label="Possèdant le même code APE"
                  />
                  <div className="buttons">
                     <Button>Diagnostiquer</Button>
                  </div>
               </div>
            </RightPopup>
            }
      </div>
   );
};

export default MyDiagnostic;