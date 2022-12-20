import { BsHouseDoor } from 'react-icons/bs';
import { GoTriangleDown } from 'react-icons/go';
import Image from 'next/image';
import { useDataContext } from '../contexts/data/useDataContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { UserTypeEnum } from '../defs/types';
import BadgeCount from '../components/globals/BadgeCount/BadgeCount';
import { BiMenu } from 'react-icons/bi';
import { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { FiLogOut } from 'react-icons/fi';
import { Tooltip } from 'antd';

const Topbar = () => {
   const dataContext = useDataContext();
   const router = useRouter();
   const { user } = dataContext.data;
   const loggedIn = user != null;
   const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);

   const toggleResponsiveMenu = () => {
      setShowResponsiveMenu(showResponsiveMenu => !showResponsiveMenu)
   }

   return (
      <div className="topbar">
         <div className="topbar-main">
            <div className="topbar-left">
               <Image
                  src="/images/topbar/ibc-logo.svg"
                  alt="identification des besoins en compétences des entreprises"
                  width="200px"
                  height="50px"
               />
            </div>
            <div className="topbar-center">
               <div className="logo-center hide-responsive">
                  <Image
                     src="/images/topbar/ministery-logo.svg"
                     alt="ministère du travail, de l'emploi et de l'insertion"
                     width="90px"
                     height="50px"
                  />
               </div>
               <div className="logo-center hide-responsive">
                  <Image
                     src="/images/topbar/invest-logo.svg"
                     alt="investir dans vos compétences"
                     width="140px"
                     height="50px"
                  />
               </div>
               <div className="logo-center">
                  <Image
                     src="/images/topbar/gip-logo.svg"
                     alt="gip alfa centre-val de loire"
                     width="60px"
                     height="50px"
                  />
               </div>
            </div>
            <div className="topbar-right">
               {loggedIn && user ?
                  <div className={`topbar-right-connected hide-responsive ${router.pathname == '/mon-compte' ? 'active' : ''}`}>
                     <Link href="/mon-compte">
                        <div className="user-container">
                           <div className="user-connected">
                              <span>Bonjour,</span>
                              <span className="user-name">{user.lastname} {user.firstname}</span>
                           </div>
                           <div className="user-img">
                              <Image
                                 src="/images/topbar/user-icon.svg"
                                 alt="logo user"
                                 width="50px"
                                 height="50px"
                              />
                              <BadgeCount className='badge-count' backgroundColor="#de171a">
                                 3
                              </BadgeCount>
                           </div>
                        </div>
                     </Link>
                     {/* <span><GoTriangleDown size={15} /></span> */}
                     <Tooltip title="Déconnexion">
                        <FiLogOut size={24} style={{ marginLeft: 30, marginRight: 20 }} onClick={() => {
                           dataContext.setData(() => {
                              return { ...dataContext.data, user: null };
                           });
                           router.push('/');
                        }} />
                     </Tooltip>
                  </div>
                  : <Link href="/enregistrement" className="hide-responsive">
                     <span className="topbar-right-signin hide-responsive">S'inscrire / se connecter</span>
                  </Link>
               }
               <div className="responsive-menu-icon" onClick={toggleResponsiveMenu}>
                  <BiMenu />
               </div>
            </div>
         </div>
         <div className="topbar-bottom hide-responsive">
            {user && loggedIn ?
               <div className="topbar-bottom-menu">
                  <Link href="/">
                     <div className={`menu-item ${router.pathname == '/' ? 'active' : ''}`}>
                        <span><BsHouseDoor size={20} /></span>
                     </div>
                  </Link>

                  {(user.type == UserTypeEnum.EMPLOYEE) ?
                     <>
                        <Link href="/entreprise/salarie/mon-espace">
                           <div className={`menu-item ${router.pathname == '/entreprise/salarie/mon-espace' ? 'active' : ''}`}><span>Mon espace</span></div>
                        </Link>
                        <Link href="/entreprise/salarie/mon-diagnostic">
                           <div className={`menu-item ${router.pathname == '/entreprise/salarie/mon-diagnostic' ? 'active' : ''}`}><span>Mon diagnostic</span></div>
                        </Link>
                        <Link href="/entreprise/salarie/ma-carriere">
                           <div className={`menu-item ${router.pathname == '/entreprise/salarie/ma-carriere' ? 'active' : ''}`}><span>Mon suivi de carrière</span></div>
                        </Link>
                     </>
                     :
                     (user.type == UserTypeEnum.MANAGER) ?
                        <>
                           <Link href="/entreprise/manager/mon-espace">
                              <div className={`menu-item ${router.pathname == '/entreprise/manager/mon-espace' ? 'active' : ''}`}><span>Mon espace</span></div>
                           </Link>
                           <Link href="/entreprise/manager/mes-salaries">
                              <div className={`menu-item ${router.pathname == '/entreprise/manager/mes-salaries' ? 'active' : ''}`}><span>Mes salariés</span></div>
                           </Link>
                           <Link href="/entreprise/manager/mon-diagnostic">
                              <div className={`menu-item ${router.pathname == '/entreprise/manager/mon-diagnostic' ? 'active' : ''}`}><span>Mon diagnostic</span></div>
                           </Link>
                        </>
                        :
                        <>
                           <Link href="/acteur-local/mon-espace">
                              <div className={`menu-item ${router.pathname == '/acteur-local/mon-espace' ? 'active' : ''}`}><span>Mon espace</span></div>
                           </Link>
                           <Link href="/acteur-local/nouvelle-visite">
                              <div className={`menu-item ${router.pathname == '/acteur-local/nouvelle-visite' ? 'active' : ''}`}><span>Nouvelle visite</span></div>
                           </Link>
                           <Link href="/acteur-local/mes-visites">
                              <div className={`menu-item ${router.pathname == '/acteur-local/mes-visites' ? 'active' : ''}`}><span>Mes visites</span></div>
                           </Link>
                           <Link href="/acteur-local/entreprises">
                              <div className={`menu-item ${router.pathname == '/acteur-local/entreprises' ? 'active' : ''}`}><span>Entreprises</span></div>
                           </Link>
                           <Link href="/acteur-local/mes-adresses">
                              <div className={`menu-item ${router.pathname == '/acteur-local/mes-adresses' ? 'active' : ''}`}><span>Carnet d'adresses</span></div>
                           </Link>
                        </>
                  }
               </div>
               : <span>Observatoire des compétences attendues et particulières aux territoires de la Région Centre Val de Loire</span>}
         </div>

         <div className={`responsive-menu ${showResponsiveMenu ? 'active' : ''}`}
         >
            <div className='title'>
               Menu
               <div className="close-icon" onClick={toggleResponsiveMenu}>
                  <GrClose size={"20px"} />
               </div>
            </div>
            {user && loggedIn ?
               <div className="bottom-menu">
                  <Link href="/">
                     <div className={`menu-item ${router.pathname == '/' ? 'active' : ''}`} onClick={toggleResponsiveMenu}>
                        <span>Accueil</span>
                     </div>
                  </Link>

                  {(user.type == UserTypeEnum.EMPLOYEE) ?
                     <>
                        <Link href="/entreprise/salarie/mon-espace">
                           <div className={`menu-item ${router.pathname == '/entreprise/salarie/mon-espace' ? 'active' : ''}`} onClick={toggleResponsiveMenu}><span>Mon espace</span></div>
                        </Link>
                        <Link href="/entreprise/salarie/mon-diagnostic">
                           <div className={`menu-item ${router.pathname == '/entreprise/salarie/mon-diagnostic' ? 'active' : ''}`} onClick={toggleResponsiveMenu}><span>Mon diagnostic</span></div>
                        </Link>
                        <Link href="/entreprise/salarie/ma-carriere">
                           <div className={`menu-item ${router.pathname == '/entreprise/salarie/ma-carriere' ? 'active' : ''}`} onClick={toggleResponsiveMenu}><span>Mon suivi de carrière</span></div>
                        </Link>
                     </>
                     :
                     (user.type == UserTypeEnum.MANAGER) ?
                        <>
                           <Link href="/entreprise/manager/mon-espace">
                              <div className={`menu-item ${router.pathname == '/entreprise/manager/mon-espace' ? 'active' : ''}`} onClick={toggleResponsiveMenu}><span>Mon espace</span></div>
                           </Link>
                           <Link href="/entreprise/manager/mes-salaries">
                              <div className={`menu-item ${router.pathname == '/entreprise/manager/mes-salaries' ? 'active' : ''}`} onClick={toggleResponsiveMenu}><span>Mes salariés</span></div>
                           </Link>
                           <Link href="/entreprise/manager/mon-diagnostic">
                              <div className={`menu-item ${router.pathname == '/entreprise/manager/mon-diagnostic' ? 'active' : ''}`} onClick={toggleResponsiveMenu}><span>Mon diagnostic</span></div>
                           </Link>
                        </>
                        :
                        <>
                           <Link href="/acteur-local/mon-espace">
                              <div className={`menu-item ${router.pathname == '/acteur-local/mon-espace' ? 'active' : ''}`} onClick={toggleResponsiveMenu}><span>Mon espace</span></div>
                           </Link>
                           <Link href="/acteur-local/nouvelle-visite">
                              <div className={`menu-item ${router.pathname == '/acteur-local/nouvelle-visite' ? 'active' : ''}`} onClick={toggleResponsiveMenu}><span>Nouvelle visite</span></div>
                           </Link>
                           <Link href="/acteur-local/mes-visites">
                              <div className={`menu-item ${router.pathname == '/acteur-local/mes-visites' ? 'active' : ''}`} onClick={toggleResponsiveMenu}><span>Mes visites</span></div>
                           </Link>
                           <Link href="/acteur-local/entreprises">
                              <div className={`menu-item ${router.pathname == '/acteur-local/entreprises' ? 'active' : ''}`} onClick={toggleResponsiveMenu}><span>Entreprises</span></div>
                           </Link>
                           <Link href="/acteur-local/mes-adresses">
                              <div className={`menu-item ${router.pathname == '/acteur-local/mes-adresses' ? 'active' : ''}`} onClick={toggleResponsiveMenu}><span>Carnet d'adresses</span></div>
                           </Link>
                        </>
                  }
                  <div className={`menu-item`} onClick={() => {
                     dataContext.setData(() => {
                        return { ...dataContext.data, user: null };
                     });
                     toggleResponsiveMenu();
                     router.push('/');
                  }}>
                     <FiLogOut style={{ marginRight: 10 }} /> Me déconnecter
                  </div>
               </div>
               : <span className='no-menu-text'>Observatoire des compétences attendues et particulières aux territoires de la Région Centre Val de Loire</span>}
            {loggedIn && user ?
               <Link href="/mon-compte">
                  <div className={`bottombar bottombar-connected ${router.pathname == '/mon-compte' ? 'active' : ''}`} onClick={toggleResponsiveMenu}>
                     <div className="user-connected">
                        <span>Bonjour,</span>
                        <span className="user-name">{user.lastname} {user.firstname}</span>
                     </div>
                     <div className="user-img">
                        <Image
                           src="/images/topbar/user-icon.svg"
                           alt="logo user"
                           width="50px"
                           height="50px"
                        />
                        <BadgeCount className='badge-count' backgroundColor="#de171a">
                           3
                        </BadgeCount>
                     </div>
                     <div className="user-arrow">
                        <span><GoTriangleDown size={15} /></span>
                     </div>
                  </div>
               </Link>
               : <Link href="/enregistrement">
                  <span className="bottombar bottombar-signin hide-responsive" onClick={toggleResponsiveMenu}>S'inscrire / se connecter</span>
               </Link>
            }
         </div>
         <div className={`blur-background ${showResponsiveMenu ? 'active' : ''}`} onClick={toggleResponsiveMenu}></div>
      </div>
   );
};

export default Topbar;
