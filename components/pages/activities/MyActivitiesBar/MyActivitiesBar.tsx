import React, { useState } from 'react';
import { BiPlusCircle } from 'react-icons/bi';
import BadgeCount from '../../../globals/BadgeCount/BadgeCount';
import Button from '../../../globals/Button/Button';
import RightPopup from '../../../globals/RightPopup/RightPopup';
import SelectInput from '../../../globals/SelectInput/SelectInput';
import TextInput from '../../../globals/TextInput/TextInput';
import styles from './MyActivitiesBar.module.scss';

interface MyActivitiesBarProps {

}
const MyActivitiesBar = (props: MyActivitiesBarProps) => {
   const [isPopupOpen, setIsPopupOpen] = useState(false);
   return (
      <div className={`${styles.MyActivitiesBarContainer}`}>
         <div className="activities-block">
            <div className="left">
               <div className="title">
                  <h2>Mes Activités</h2>
                  <BadgeCount>
                     15
                  </BadgeCount>
               </div>
               <div className="description">
                  <span>Sélectionnez ou recherchez une activité pour afficher ci-après ses compétences métiers et <u>soft skills</u> associés.</span>
               </div>
            </div>
            <div className="right">
               <div className="select-box">
                  <SelectInput
                     name="language"
                     placeholder="Toutes mes activités"
                     options={[
                        { label: 'Activité A', value: 'a' },
                        { label: 'Activité B', value: 'b' },
                        { label: 'Activité C', value: 'c' },
                     ]}
                  />
               </div>
               <Button className="add-button" onClick={() => setIsPopupOpen(true)}>
                  <BiPlusCircle size={20} color='#fff' />
                  <span>Ajouter une activité</span>
               </Button>
            </div>
         </div>
         {isPopupOpen &&
            <RightPopup onClose={() => setIsPopupOpen(false)}>
               <h2>Ajouter une activité</h2>
               <br />
               <TextInput
                  label="Activité"
                  name="activity"
               />
               <br /><br />
               <Button onClick={() => setIsPopupOpen(false)}>Enregistrer</Button>
            </RightPopup>
         }
      </div>
   );
};

export default MyActivitiesBar;