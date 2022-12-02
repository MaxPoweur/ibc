import { useRouter } from 'next/router';
import Steps, { Step } from '../../../components/globals/Steps/Steps';
import CompanyStep from '../../../components/pages/visits/steps/CompanyStep/CompanyStep';
import JobsStep from '../../../components/pages/visits/steps/JobsStep/JobsStep';
import OthersStep from '../../../components/pages/visits/steps/OthersStep/OthersStep';
import RecruitmentNeedsStep from '../../../components/pages/visits/steps/RecruitmentNeedsStep/RecruitmentNeedsStep';
import SkillsStep from '../../../components/pages/visits/steps/SkillsStep/SkillsStep';
import styles from './new-visit.module.scss';

const NewVisit = () => {
   const router = useRouter()
   const steps: Step[] = [
      {
         name: 'Entreprise',
         content: <CompanyStep />
      },
      {
         name: 'Métiers',
         content: <JobsStep />
      },
      {
         name: 'Besoins en recrutement',
         content: <RecruitmentNeedsStep />
      },
      {
         name: 'Compétences',
         content: <SkillsStep />
      },
      {
         name: 'Autres',
         content: <OthersStep />
      },
   ];
   return <div className={styles.NewVisitContainer}>
      <Steps
         index={0}
         steps={steps}
         onEnd={() => router.push('/acteur-local/mon-espace')}
      />
   </div>
}

export default NewVisit;