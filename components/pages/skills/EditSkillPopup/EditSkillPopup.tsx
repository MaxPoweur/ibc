import { AiFillStar, AiOutlineStop } from 'react-icons/ai';
import { BsArchive } from 'react-icons/bs';
import { SkillType } from '../../../../defs/types';
import BottomPopup from '../../../globals/BottomPopup/BottomPopup';
import Button from '../../../globals/Button/Button';
import Checkbox from '../../../globals/Checkbox/Checkbox';
import RadioBoxes from '../../../globals/RadioBoxes/RadioBoxes';
import Textarea from '../../../globals/Textarea/Textarea';
import styles from './EditSkillPopup.module.scss'

interface EditSkillPopupProps {
   skill: SkillType;
   className?: string;
   label: string;
   onClose?: () => void;
}
const EditSkillPopup = (props: EditSkillPopupProps) => {
   let options = [
      {
         label: <div className="option-container">
            Obsolète
            <BsArchive className={`icon`} />
         </div>,
         value: 0,
      },
      {
         label: <div className="option-container">
            Utile
            <div className="stars-container">
               <AiFillStar className={`icon`} />
               <AiFillStar className={`icon disabled`} />
            </div>
         </div>,
         value: 2,
      },
      {
         label: <div className="option-container">
            Indispensable
            <div className="stars-container">
               <AiFillStar className={`icon`} />
               <AiFillStar className={`icon`} />
            </div>
         </div>,
         value: 3,
      },
   ];
   if(props.skill.isBookmark) {
      options.splice(1, 0, {
         label: <div className="option-container">
            Non pertinente
            <AiOutlineStop className={`icon`} />
         </div>,
         value: 1,
      });
   }
   return (
      <div className={`${styles.EditSkillPopupContainer}`}>
         <BottomPopup className="edit-skill-popup" onClose={props.onClose}>
            <h2>{props.label}</h2>
            <b>Comment jugez-vous cette compétence ?</b>
            <RadioBoxes
               name="score"
               options={options}
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
            <Button onClick={props.onClose}>Ajouter</Button>
         </BottomPopup>
      </div>
   );
};

export default EditSkillPopup;