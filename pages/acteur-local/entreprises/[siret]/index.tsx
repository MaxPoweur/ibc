import styles from './company.module.scss';
import { useRouter } from "next/router";
import _ from 'lodash';
import { useDataContext } from '../../../../contexts/data/useDataContext';
import ItemsTabs, { ItemTab } from '../../../../components/globals/Tabs/ItemsTabs';
import { useState } from 'react';
import ContactsTab from '../../../../components/pages/company/tabs/contacts/ContactsTab';
import VisitsTab from '../../../../components/pages/company/tabs/visits/VisitsTab';
import RecruitmentNeedsTab from '../../../../components/pages/company/tabs/recruitment-needs/RecruitmentNeedsTab';
import JobsTab from '../../../../components/pages/company/tabs/jobs/JobsTab';
import SkillsTab from '../../../../components/pages/company/tabs/skills/SkillsTab';
import LanguagesTab from '../../../../components/pages/company/tabs/languages/LanguagesTab';

const Company = () => {
   const dataContext = useDataContext();
   const router = useRouter()
   const { siret } = router.query;
   const company = _.find(dataContext.data.companies, company => company.siret == siret);
   const [currentTabIndex, setCurrentTabIndex] = useState(0);
   if (!company) {
      return null;
   }
   const tabs: ItemTab[] = [
      {
         itemsCount: 3,
         title: 'Contacts',
         subtitle: 'Fiche entreprise',
         content: <ContactsTab company={company} />
      },
      {
         itemsCount: 5,
         title: 'Visites',
         subtitle: 'Moins de 6 mois',
         content: <VisitsTab company={company} />
      },
      {
         itemsCount: 6,
         title: 'Besoins en recrutement',
         content: <RecruitmentNeedsTab company={company} />
      },
      {
         itemsCount: 36,
         title: 'Métiers',
         content: <JobsTab company={company} />
      },
      {
         itemsCount: 248,
         title: 'Compétences',
         content: <SkillsTab company={company} />
      },
      {
         itemsCount: 46,
         title: 'Langues et conditions de travail',
         content: <LanguagesTab company={company} />
      },
   ];
   return <div className={`${styles.CompanyContainer}`}>
      <div className="header">
         <span>Fiche entreprise</span>
         <h2>{company.name}</h2>
      </div>
      <ItemsTabs currentTabIndex={currentTabIndex} tabs={tabs} onTabClick={index => setCurrentTabIndex(index)} />
   </div>
}
export default Company;