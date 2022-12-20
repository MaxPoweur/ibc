import { useState, useEffect } from "react";
import { CompanyType, EmployeeType, JobType, UserType, UserTypeEnum, VisitType, ActivityType, SkillType, WorkingConditionType } from '../../defs/types';

interface DataType {
   user: null | UserType;
   companies: CompanyType[];
   visits: VisitType[];
   employees: EmployeeType[];
   jobs: JobType[];
}

const generateHardSkills = (count: number) => {
   let items: SkillType[] = [];
   for (let i = 0; i < count; i++) {
      items.push({
         id: Math.floor(Math.random() * 1000000),
         enabled: Math.random() < 0.5,
         label: 'Compétence ' + String.fromCharCode(65 + Math.floor(Math.random() * 26)),
         score: Math.floor(Math.random() * (3 + 1) - 1) as any,
         toTrain: Math.random() < 0.5,
         isBookmark: Math.random() < 0.5,
      });
   }
   return items;
}
const generateSoftkills = (count: number) => {
   let items: SkillType[] = [];
   for (let i = 0; i < count; i++) {
      items.push({
         id: Math.floor(Math.random() * 1000000),
         enabled: Math.random() < 0.5,
         label: 'Soft skill ' + String.fromCharCode(65 + Math.floor(Math.random() * 26)),
         score: Math.floor(Math.random() * (3 + 1) - 1) as any,
         toTrain: Math.random() < 0.5,
         isBookmark: Math.random() < 0.5,
      });
   }
   return items;
}
const generateLanguages = (count: number) => {
   let items: SkillType[] = [];
   for (let i = 0; i < count; i++) {
      items.push({
         id: Math.floor(Math.random() * 1000000),
         enabled: Math.random() < 0.5,
         label: 'Langue ' + String.fromCharCode(65 + Math.floor(Math.random() * 26)),
         score: Math.floor(Math.random() * (3 + 1) - 1) as any,
         toTrain: Math.random() < 0.5,
         isBookmark: false,
      });
   }
   return items;
}
const generateWorkingConditions = (count: number) => {
   let items: WorkingConditionType[] = [];
   for (let i = 0; i < count; i++) {
      items.push({
         id: Math.floor(Math.random() * 1000000),
         enabled: Math.random() < 0.5,
         label: 'Condition ' + String.fromCharCode(65 + Math.floor(Math.random() * 26)),
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      });
   }
   return items;
}
const companies: CompanyType[] = Array(72).fill({
   name: 'Entreprise',
   createdAtDelay: 'Moins de 6 mois',
   siret: '12345678900012',
   naf: '10.52Z',
   address: '10, Rue de la Libération',
   zipCode: '45000',
   city: 'Orléans',
   contacts: [
      {
         firstname: 'Camille',
         lastname: 'Honette',
         function: 'Resp. des ventes',
         phone: '02 38 12 34 56',
         email: 'camille.honnette@a-team.fr'
      },
      {
         firstname: 'Elie',
         lastname: 'Cauptere',
         function: 'Dir. Marketing',
         phone: '02 38 12 34 56',
         email: 'elie.cauptere@a-team.fr'
      },
   ],
   fields: [
      'Lorem Ipsum',
      'Dolor Sit Amet',
      'Consectetur Adipiscing Elit',
      'Sed Do Eiusmod Tempor Incididunt',
   ]
}).map((company, index) => {
   return { ...company, name: company.name + ' ' + (index + 1), siret: company.siret + (index + 11) };
});
const activities: ActivityType[] = Array(2).fill({
   id: 1,
   name: 'Activité',
   hardSkills: [],
   softSkills: [],
   languages: [],
   workingConditions: []
}).map((activity, index) => {
   return {
      ...activity,
      id: Math.floor(Math.random() * 1000000),
      name: activity.name + ' ' + (index + 1),
      hardSkills: generateHardSkills(2),
      softSkills: generateSoftkills(2),
      languages: generateLanguages(2),
      workingConditions: generateWorkingConditions(2),
   };
});
const jobs: JobType[] = Array(72).fill({
   name: 'Métier',
   keyPosition: false,
   vacantPositions: 1,
   needRecruitment: true,
   limitDate: '21/12/2022',
   contract: 'Contrat à durée indéterminée (CDI)',
   type: 'Création de poste',
   hasRecruitementIssue: true,
   recruitementIssue: 'Recrutement en cours',
   comment: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam voluptua.',
   activities
}).map((job, index) => {
   return { ...job, keyPosition: index % 3 == 0, name: job.name + ' ' + (index + 1), vacantPositions: Math.floor(Math.random() * 15) };
});
const employees: EmployeeType[] = Array(72).fill({
   firstname: 'Sarah',
   lastname: 'Kroch',
   job: 'Développeur',
   skillRelevance: 30,
});

const visits: VisitType[] = Array(72).fill({
   id: 0,
   name: 'Visite',
   date: '19/10/2022',
   delayFromDate: 'Moins de 6 mois',
   object: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
   duration: '2 heures 45 minutes',
   nextDate: '16 septembre 2023',
   summary: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, natus. Iure culpa et quia veniam blanditiis fuga illum eius temporibus! Eum quibusdam totam.',
   files: 5,
}).map((visit, index) => {
   return {
      ...visit,
      id: Math.floor(Math.random() * 1000000),
      name: visit.name + ' ' + (index + 1),
      company: companies[index],
      job: jobs[index]
   };
});

export const defaultData: DataType = {
   user: {
      firstname: 'Sophie',
      lastname: 'Stikker',
      type: UserTypeEnum.MANAGER,
   },
   companies,
   visits,
   employees,
   jobs,
   // user: null // logged out
};

export type UseData = {
   data: DataType,
   setData: React.Dispatch<React.SetStateAction<DataType>>
};

export const useData = (newValue: DataType): UseData => {
   const [data, setData] = useState<DataType>(defaultData);
   useEffect(() => {
      setData(newValue);
   }, [newValue]);

   return { data, setData };
};
