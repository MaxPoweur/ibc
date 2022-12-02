import { AiFillStar } from 'react-icons/ai';
import BottomPopup from '../../../globals/BottomPopup/BottomPopup';
import Button from '../../../globals/Button/Button';
import Checkbox from '../../../globals/Checkbox/Checkbox';
import RadioBoxes from '../../../globals/RadioBoxes/RadioBoxes';
import Textarea from '../../../globals/Textarea/Textarea';
import styles from './EditSkillPopup.module.scss'

interface EditSkillPopupProps {
   className?: string;
   label: string;
   onClose?: () => void;
}
const EditSkillPopup = (props: EditSkillPopupProps) => {
   return (
      <div className={`${styles.EditSkillPopupContainer}`}>
         <BottomPopup className="edit-skill-popup" onClose={props.onClose}>
            <h2>{props.label}</h2>
            <b>Comment jugez-vous cette compétence ?</b>
            <RadioBoxes
               name="score"
               options={[
                  {
                     label: <div className="option-container">
                        Utile
                        <div className="stars-container">
                           <AiFillStar className={`icon`} />
                           <AiFillStar className={`icon disabled`} />
                        </div>
                     </div>,
                     value: 1,
                  },
                  {
                     label: <div className="option-container">
                        Indispensable
                        <div className="stars-container">
                           <AiFillStar className={`icon`} />
                           <AiFillStar className={`icon`} />
                        </div>
                     </div>,
                     value: 2,
                  },
               ]}
               defaultValue={1}
            />
            <Textarea
               name="comment"
               label="Commentaire (facultatif)"
            />
            <Checkbox
               name="toTrain"
               label="Souhait de formation"
            />
            <Button  onClick={props.onClose}>Ajouter</Button>
         </BottomPopup>
      </div>
   );
};

export default EditSkillPopup;