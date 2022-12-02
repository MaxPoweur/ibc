export interface ContactType {
   firstname: string;
   lastname: string;
   function: string;
   phone: string;
   email: string;
}
export interface CompanyType {
   name: string;
   description: string;
   createdAtDelay: string;
   siret: string;
   naf: string;
   zipCode: string;
   address: string;
   city: string;
   contacts: ContactType[];
   fields: string[];
}
export interface UserType {
   name: string,
   type: UserTypeEnum,
}
export interface VisitType {
   date: string;
   delayFromDate: string;
   object: string;
   duration: string;
   nextDate: string;
   summary: string;
   files: number;
   company: CompanyType;
}

export enum UserTypeEnum {
   MANAGER = "MANAGER",
   EMPLOYEE = "EMPLOYEE",
   LOCAL_ACTOR = "LOCAL_ACTOR",
}
export interface EmployeeType {
   firstname: string;
   lastname: string;
   job: string;
   skillRelevance: number;
}
export interface JobType {
   name: string;
   keyPosition: boolean;
   vacantPositions: number;
   needRecruitment: boolean;
   limitDate: string;
   contract: string;
   type: string;
   hasRecruitementIssue: boolean;
   recruitementIssue: string;
   comment: string;
   activities: ActivityType[];
}
export interface ActivityType {
   id: number;
   name: string;
   hardSkills: SkillType[];
   softSkills: SkillType[];
   languages: SkillType[];
   workingConditions: WorkingConditionType[];
}
export interface SkillType {
   id: number;
   enabled: boolean,
   label: string;
   score: -1 |0 | 1 | 2;
   toTrain: boolean;
   isBookmark: boolean;
}
export interface WorkingConditionType {
   id: number;
   enabled: boolean,
   label: string;
   description: string;
}