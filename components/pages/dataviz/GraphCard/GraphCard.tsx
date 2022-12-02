import { useState } from "react";
import { FiInfo } from "react-icons/fi";
import Card from "../../../globals/Card/Card";
import RightPopup from "../../../globals/RightPopup/RightPopup";
import TextInput from "../../../globals/TextInput/TextInput";
import styles from './GraphCard.module.scss';

interface GraphCardProps {
   title: string;
   description: string;
   source: string;
   lastUpdate: string;
   headerHeight?: string;
   mainHeight?: string;
   className?: string;
}

const GraphCard = (props: GraphCardProps) => {
   const { title, description, source, lastUpdate, headerHeight, mainHeight } = props;
   const [isPopupOpen, setIsPopupOpen] = useState(false);
   return <div className={`${styles.cardContainer} ${props.className ? props.className : ''}`}>
      <Card>
         <div className="card-header" style={{ height: headerHeight ?? '120px' }}>
            <h3 className="title">{title}</h3>
            <span className="description">{description}</span>
            <div className="info" onClick={() => setIsPopupOpen(true)}>
               <FiInfo size={"35px"} />
            </div>
         </div>
         <div className="card-main" style={{ height: mainHeight ?? '200px' }}>
            <div className="details">
               <span>Source : <strong>{source}</strong></span>
               <span>Dernière mise à jour : <strong>{lastUpdate}</strong></span>
            </div>
         </div>
      </Card>
      {isPopupOpen &&
         <RightPopup onClose={() => setIsPopupOpen(false)}>
            <h2>Titre indicateur</h2>

            <div className="content-block">
               <h3>Résumé</h3>
               <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
            </div>

            <div className="content-block">
               <h3>Détails</h3>
               <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
            </div>

            <div className="content-block">
               <h3>Comparaison</h3>
               <p>Sélectionner un territoire de comparaison :</p>
               <TextInput
                  name="territory"
                  label="Territoire"
                  placeholder="Zone d'emploi, département, région"
               />
            </div>

            <div className="content-block">
               <h3>Croisement données</h3>
               <p>Pour aller plus loin :</p>
               <p>En comparant <strong>Lorem</strong> vous comprendrez <strong>Ipsum</strong></p>
            </div>
         </RightPopup>
      }
   </div>
}
export default GraphCard;