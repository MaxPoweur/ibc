import React, { useState } from 'react';
import Button, { ButtonStyle } from '../../../../globals/Button/Button';
import Card from '../../../../globals/Card/Card';
import RadioBoxes from '../../../../globals/RadioBoxes/RadioBoxes';
import TextInput from '../../../../globals/TextInput/TextInput';
import Upload from '../../../../globals/Upload/Upload';
import styles from './CompanyStep.module.scss';
import BottomPopup from '../../../../globals/BottomPopup/BottomPopup';
import NewContactPopup from '../../../contacts/NewContactPopup/NewContactPopup';

interface CompanyStepProps {
}
const CompanyStep = (props: CompanyStepProps) => {
   const [isPopupOpen, setIsPopupOpen] = useState(false);
   return (
      <div className={`${styles.CompanyStepContainer}`}>
         <p className="mandatory">
            <span className="red">*</span> Mentions Obligatoires
         </p>
         <div className="cards">
            <Card>
               <h3>Entreprise visitée</h3>
               <TextInput
                  name="companyName"
                  label="Raison sociale"
                  mandatory
               />
               <TextInput
                  name="sphinxId"
                  label="ID Sphinx"
               />
            </Card>
            <Card>
               <h3>Contacts au sein de l'entreprise</h3>
               <TextInput
                  name="contact"
                  label="Contact"
                  defaultValue="Jean Dupont"
                  disabled
               />
               <Button onClick={() => setIsPopupOpen(true)}>Nouveau contact</Button>
            </Card>
            <Card>
               <h3>Visite</h3>
               <TextInput
                  name="date"
                  label="Date"
                  mandatory
               />
               <TextInput
                  name="object"
                  label="Objet"
               />
               <TextInput
                  name="duration"
                  label="Durée"
               />
               <TextInput
                  name="nextVisitDate"
                  label="Date de la prochaine visite"
               />
            </Card>
            <Card>
               <h3>Compte-rendu</h3>
               <Upload
                  name="summary"
                  label="Saisie libre"
               />
               {/* <Button>Parcourir</Button> */}
            </Card>
         </div>
         {isPopupOpen &&
            <NewContactPopup onClose={() => setIsPopupOpen(false)} />
         }
      </div>
   );
};

export default CompanyStep;