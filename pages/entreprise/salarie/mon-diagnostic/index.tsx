import { useState } from 'react';
import Button from '../../../../components/globals/Button/Button';
import { AiOutlineSearch } from 'react-icons/ai';
import Checkbox from '../../../../components/globals/Checkbox/Checkbox';
import TextInput from '../../../../components/globals/TextInput/TextInput';
import RightPopup from '../../../../components/globals/RightPopup/RightPopup';
import GraphCard from '../../../../components/pages/dataviz/GraphCard/GraphCard';
import styles from './my-diagnostic.module.scss';

const MyDiagnostic = () => {
   const [diagnosticJob, setDiagnosticJob] = useState(false);
   const [diagnosticHardSkills, setDiagnosticHardSkills] = useState(false);
   const [diagnosticSoftSkills, setDiagnosticSoftSkills] = useState(false);

   const [comparedJob, setComparedJob] = useState('');
   const [comparedTerritory, setComparedTerritory] = useState('');

   const [isPopupOpen, setIsPopupOpen] = useState(false);

   return (
      <div className={styles.myDiagnostic}>
         <div className="page-left">
            <div className="search">
               <div className="title">
                  <h2>Recherche</h2>
                  <span>Que souhaitez-vous diagnostiquer ?</span>
               </div>
               <Checkbox
                  name="job"
                  onChange={(value) => setDiagnosticJob(value)}
                  label="Mon métier"
               />
               <Checkbox
                  name="hard-skills"
                  onChange={(value) => setDiagnosticHardSkills(value)}
                  label="Mes compétences métier"
               />
               <Checkbox
                  name="soft-skills"
                  onChange={(value) => setDiagnosticHardSkills(value)}
                  label="Mes soft skills"
               />

               <div className="buttons">
                  <Button>Diagnostiquer</Button>
               </div>
            </div>
            <div className="search">
               <span>Périmêtre de comparaison :</span>
               <TextInput
                  label="Métier (2 max.)"
                  name="job"
                  placeholder="Libellé métier, ROME ou FAP"
                  onChange={(value) => setComparedJob(value)}
               />
               <TextInput
                  label="Territoire (2 max.)"
                  name="territory"
                  placeholder="Zone d'emploi, département ou région"
                  onChange={(value) => setComparedTerritory(value)}
               />
               <div className="buttons">
                  <Button>Comparer</Button>
               </div>
            </div>
         </div>
         <div className="page-right">
            <div className="header">
               <h3>En Région Centre Val de Loire,</h3>
               <p>les personnes qui exercent votre métier déclarent posséder les compétences suivantes :</p>
            </div>
            <div className="graphs">
               <div className="row">
                  <GraphCard
                     title="Titre indicateur régional"
                     description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                     source="Lorem ipsum dolor sit amet"
                     lastUpdate="25/09/2022"
                     headerHeight="100px"
                     mainHeight="400px"
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
                  <h2>Recherche</h2>
                  <span>Que souhaitez-vous diagnostiquer ?</span>
               </div>
               <Checkbox
                  name="popup-job"
                  onChange={(value) => setDiagnosticJob(value)}
                  label="Mon métier"
               />
               <Checkbox
                  name="popup-hard-skills"
                  onChange={(value) => setDiagnosticHardSkills(value)}
                  label="Mes compétences métier"
               />
               <Checkbox
                  name="popup-soft-skills"
                  onChange={(value) => setDiagnosticHardSkills(value)}
                  label="Mes soft skills"
               />

               <div className="buttons">
                  <Button>Diagnostiquer</Button>
               </div>
            </div>
            <div className="search">
               <span>Périmêtre de comparaison :</span>
               <TextInput
                  label="Métier (2 max.)"
                  name="job"
                  placeholder="Libellé métier, ROME ou FAP"
                  onChange={(value) => setComparedJob(value)}
               />
               <TextInput
                  label="Territoire (2 max.)"
                  name="territory"
                  placeholder="Zone d'emploi, département ou région"
                  onChange={(value) => setComparedTerritory(value)}
               />
               <div className="buttons">
                  <Button>Comparer</Button>
               </div>
            </div>
            </RightPopup>
            }
      </div>
   );
};

export default MyDiagnostic;