import BottomPopup from '../../../globals/BottomPopup/BottomPopup';
import Button from '../../../globals/Button/Button';
import RadioBoxes from '../../../globals/RadioBoxes/RadioBoxes';
import TextInput from '../../../globals/TextInput/TextInput';
import styles from './NewContactPopup.module.scss';

interface NewContactPopupProps {
   onClose: () => void;
}
const NewContactPopup = (props: NewContactPopupProps) => {
   const { } = props;
   return (
      <div className={`${styles.NewContactPopupContainer}`}>
         <BottomPopup onClose={props.onClose}>
            <h3>Ajouter un contact</h3>
            <RadioBoxes
               name="gender"
               options={[
                  {
                     label: 'Madame',
                     value: 0,
                  },
                  {
                     label: 'Monsieur',
                     value: 1,
                  },
               ]}
               defaultValue={0}
               inline
            />
            <TextInput
               name="firstname"
               label="Prénom"
            />
            <TextInput
               name="lastname"
               label="Nom"
            />
            <TextInput
               name="function"
               label="Fonction"
            />
            <TextInput
               name="email"
               label="E-mail"
            />
            <TextInput
               name="phone"
               label="Téléphone"
            />
            <Button onClick={props.onClose}>Ajouter</Button>
         </BottomPopup>
      </div>
   );
};

export default NewContactPopup;