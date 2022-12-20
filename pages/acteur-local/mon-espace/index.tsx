
import BadgeCount from '../../../components/globals/BadgeCount/BadgeCount';
import MessageCard from '../../../components/globals/MessageCard/MessageCard';
import styles from './my-space.module.scss';

import { useState } from 'react';
import CardsSlider from '../../../components/globals/Slider/Slider';
import { useDataContext } from '../../../contexts/data/useDataContext';
import { CompanyType, VisitType } from '../../../defs/types';
import SearchInput from '../../../components/globals/SearchInput/SearchInput';
import VisitCard from '../../../components/pages/visits/VisitCard/VisitCard';
import { useRouter } from 'next/router';


function MySpace() {
   const router = useRouter();
   const dataContext = useDataContext();
   const items = dataContext.data.visits;
   const [showSkillPopup, setShowSkillPopup] = useState(false);

   const [activeCompanies, setActiveCompanies] = useState<CompanyType[]>([]);
   return <div className={styles.mySpace}>
      <MessageCard
         title="Dans le département du Loiret, X entreprises n'ont pas été visitées depuis plus de 6 mois."
         button="Découvrez-les"
      >
         <span>Depuis votre dernière connexion, 3 entreprises ont été visitées par des acteurs locaux.</span>
      </MessageCard>
      <hr />

      <div className="cards-slider-container">
         <div className="header">
            <div className="title-container">
               <h2>Mes visites</h2>
               <BadgeCount>
                  {items.length}
               </BadgeCount>
            </div>
            <SearchInput />
         </div>
         <CardsSlider<VisitType>
            breakpoints="yes"
            items={items}
            card={item => <VisitCard visit={item} onClick={() => router.push(`/acteur-local/visites/${item.id}`)} />}
            onCreate={() => router.push('/acteur-local/nouvelle-visite')}
         />
      </div>

      <hr />
      <div className="cards-slider-container">
         <div className="header">
            <div className="title-container">
               <h2>Les dernières entreprises visitées par les acteurs locaux</h2>
               <BadgeCount>
                  {items.length}
               </BadgeCount>
            </div>
            <SearchInput />
         </div>
         <CardsSlider<VisitType>
            breakpoints="yes"
            items={items}
            card={item => <VisitCard visit={item} onClick={() => router.push(`/acteur-local/visites/${item.id}`)} />}
         />
      </div>
   </div>
}

export default MySpace;