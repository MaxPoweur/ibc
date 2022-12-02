import styles from './my-account.module.scss';

import Card from "../../components/globals/Card/Card";
import CheckboxGroup from '../../components/globals/CheckboxGroup/CheckboxGroup';
import Image from 'next/image';
import { FaPencilAlt } from 'react-icons/fa';
import BadgeCount from '../../components/globals/BadgeCount/BadgeCount';
import { FiDownload } from 'react-icons/fi';
import { BsFileEarmarkPdfFill } from 'react-icons/bs';
import { BiTrash } from 'react-icons/bi';
import { AiFillFileExcel, AiFillFileText, AiFillFileWord } from 'react-icons/ai';
import Button from '../../components/globals/Button/Button';

const MyAccount = () => {
   const files = [
      {
         name: 'Export_fichiers.csv',
         date: '22/11/2022',
         type: 'pdf',
         state: 'Fichier téléchargé',
         disabled: 0
      },
      {
         name: 'Export_fichiers.csv',
         date: '22/11/2022',
         type: 'word',
         state: 'Fichier téléchargé',
         disabled: 0
      },
      {
         name: 'Export_fichiers.csv',
         date: '22/11/2022',
         type: 'excel',
         state: 'Fichier téléchargé',
         disabled: 1
      },
      {
         name: 'Export_fichiers.csv',
         date: '22/11/2022',
         type: 'pdf',
         state: 'Fichier téléchargé',
         disabled: 1
      },
   ]
   return <div className={styles.myAccount}>
      <div className="header">
         <h3>Mon compte</h3>
         <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
      </div>
      <div className="content">
         <div className="left">
            <div className="profile">
               <div className="title">
                  <h3>Mon Profil</h3>
               </div>
               <Card>
                  <div className="title">NOM Prénom</div>
                  <div className="subtitle">Responsable de formation</div>
                  <div className="image">
                     <Image
                        src="/images/topbar/user-icon.svg"
                        alt="logo user"
                        width="110px"
                        height="110px"
                     />
                  </div>
                  <Button className="edit-icon" width='35'>
                     <FaPencilAlt />
                  </Button>
               </Card>
            </div>
            <div className="structure">
               <div className="title">
                  <h3>Ma Structure</h3>
               </div>
               <Card>
                  <div className="structure-informations">
                     <div className="structure-name">Structure</div>
                     <div className="structure-type">Type de structure</div>
                     <div className="intervention">Champ d'intervention</div>
                     <div className="intervention address">10, Rue de la République, 45100 Orléans</div>
                  </div>
                  <CheckboxGroup
                     name="structure-checkbox"
                     checkboxes={[
                        { label: 'Visite d\'entreprise', value: 0, defaultValue: false },
                        { label: 'Acteur régional', value: 1, defaultValue: true },
                     ]}
                     enableGroupFilter={false}
                  />
                  <Button className="edit-icon" width='35'>
                     <FaPencilAlt />
                  </Button>
               </Card>
            </div>
         </div>
         <div className="right">
            <div className="notifications">
               <div className="title">
                  <h3>Mes Notifications</h3>
                  <BadgeCount backgroundColor="#de171a">
                     3
                  </BadgeCount>
               </div>
               <Card>
                  {files.map((file, index) =>
                     <div key={index} className={`row ${file.disabled && 'disabled'}`}>
                        {file.type == 'pdf' &&
                           <div className="icon pdf">
                              <BsFileEarmarkPdfFill />
                           </div>
                        }
                        {file.type == 'word' &&
                           <div className="icon word">
                              <AiFillFileWord />
                           </div>
                        }
                        {file.type == 'excel' &&
                           <div className="icon excel">
                              <AiFillFileExcel />
                           </div>
                        }
                        {file.type != 'excel' && file.type != 'word' && file.type != 'pdf' &&
                           <div className="icon random">
                              <AiFillFileText />
                           </div>
                        }
                        <div className="informations">
                           <div className="date">22/11/2022</div>
                           <div className="state">Fichier téléchargé</div>
                           <div className="name">Export_fichiers.csv <span className='size'>(1.5 Mo)</span></div>
                        </div>
                        <div className="action download">
                           <FiDownload />
                        </div>
                        <div className="action delete">
                           <BiTrash />
                        </div>
                     </div>
                  )}
               </Card>
            </div>
         </div>
      </div>
   </div>
}

export default MyAccount;