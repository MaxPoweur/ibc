import Link from 'next/link';
import { useState } from 'react';
import { GoTriangleDown } from 'react-icons/go';
import Button from '../components/globals/Button/Button';
import { AiOutlineSearch } from 'react-icons/ai';
import RightPopup from '../components/globals/RightPopup/RightPopup';
import DatePicker from '../components/globals/DatePicker/DatePicker';
import TextInput from '../components/globals/TextInput/TextInput';
import GraphCard from '../components/pages/dataviz/GraphCard/GraphCard';

import styles from './index.module.scss';
import { useDataContext } from '../contexts/data/useDataContext';

const Index = () => {
   const dataContext = useDataContext();
   const { user } = dataContext.data;
   const [searchedJob, setSearchedJob] = useState('');
   const [searchedTerritory, setSearchedTerritory] = useState('');
   const [searchedPeriodStartDate, setSearchedPeriodStartDate] = useState('');
   const [searchedPeriodEndDate, setSearchedPeriodEndDate] = useState('');
   const [showResponsiveThemes, setShowResponsiveThemes] = useState(false);
   const [isPopupOpen, setIsPopupOpen] = useState(false);
   const [isPopupOpen2, setIsPopupOpen2] = useState(false);
   const openResponsiveThemes = () => {
      setShowResponsiveThemes(showResponsiveThemes => !showResponsiveThemes)
   }

   return (
      <div className={`${styles.homeContainer}`}>
         <div className="page-left">
            <div className="search">
               <div className="title">
                  <h2>Recherche</h2>
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
                  onChange={(value) => setSearchedTerritory(value)}
               />
               <DatePicker
                  label="Période"
                  name="period"
               />
               <div className="buttons">
                  <Button>Comparer</Button>
                  <Button>Cumuler</Button>
               </div>
            </div>
            <div className="themes">
               <h2>Thématiques</h2>
               <span className="question">Quel filtre souhaitez-vous appliquer ?</span>
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
            <div className="header">
               <h3>La plateforme d'identification des besoins en compétences des entreprises de la région Centre Val de Loire</h3>
               <p>analyse plus de XXXX annonces issues de XXXX sites d'emploi.</p>
            </div>
            {!user &&
               <>
                  <div className="connexion-card">
                     <div className="left">
                        <h3 >Connectez-vous à votre espace&nbsp;!</h3>
                        <div className="description">
                           <span>Si vous souhaitez consulter et confronter vos indicateurs entreprises aux indicateurs territauriaux, merci de vous connecter à votre espace.</span>
                        </div>
                     </div>
                     <div className="right">
                        <Link href="/enregistrement">
                           <div>
                              <Button width='200px'>
                                 <span>Se connecter</span>
                              </Button>
                           </div>
                        </Link>
                        <div className="signup-question">
                           <div>Vous n'avez pas encore de compte&nbsp;? {' '}
                              <Link href="/enregistrement">
                                 <u className="registration-link"><strong>Inscription-vous</strong></u>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="sentence">
                     <span>Exemples d'indicateurs fourni par la plateforme&nbsp;:</span>
                  </div>
               </>
            }
            <div className="responsive-themes-container">
               <Button className="themes-responsive-button" onClick={() => setIsPopupOpen(true)}>
                  <span>Thématiques</span>
               </Button>
            </div>
            {isPopupOpen &&
               <RightPopup onClose={() => setIsPopupOpen(false)}>
                  <div className="themes">
                  <h2>Thématiques</h2>
                  <span className="question">Quel filtre souhaitez-vous appliquer ?</span>
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
                  <GraphCard className="cardContainer"
                     title="Titre indicateur régional"
                     description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                     source="Lorem ipsum dolor sit amet"
                     lastUpdate="25/09/2022"
                  />
                  <GraphCard className="cardContainer"
                     title="Titre indicateur régional"
                     description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                     source="Lorem ipsum dolor sit amet"
                     lastUpdate="25/09/2022"
                  />
               </div>
               <div className="row">
                  <GraphCard className="cardContainer"
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
                     onChange={(value) => setSearchedTerritory(value)}
                  />
                  <DatePicker
                     label="Période"
                     name="period"
                  />
                  <div className="buttons">
                     <Button>Comparer</Button>
                     <Button>Cumuler</Button>
                  </div>
               </div>
            </RightPopup>
            }
      </div>
   );
};

export default Index;