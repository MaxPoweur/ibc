import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Button from '../../components/globals/Button/Button';
import Card from '../../components/globals/Card/Card';
import Checkbox from '../../components/globals/Checkbox/Checkbox';
import { useDataContext } from '../../contexts/data/useDataContext';
import { UserTypeEnum } from '../../defs/types';
import styles from './register.module.scss';

enum RegistrationType {
   SIGNIN = "SIGNIN",
   SIGNUP = "SIGNUP",
}
interface SigninData {
   email: string;
   password: string;
}
interface SignupData extends SigninData {
   isCompany: boolean;
   siret: string;
   lastname: string;
   firstname: string;
   phone: string;
   passwordConfirmation: string;
}
const Registration = () => {
   const router = useRouter()
   const dataContext = useDataContext();
   const [registrationType, setRegistrationType] = useState<null | RegistrationType>(null);
   const [signupErrors, setSignupErrors] = useState<string[]>([]);
   const [signinErrors, setSigninErrors] = useState<string[]>([]);
   const defaultSigninData = {
      email: "",
      password: "",
   };
   const defaultSignupData = {
      email: "",
      password: "",
      isCompany: false,
      siret: "",
      lastname: "",
      firstname: "",
      phone: "",
      passwordConfirmation: "",
   };
   const [signinData, setSigninData] = useState<SigninData>(defaultSigninData);
   const [signupData, setSignupData] = useState<SignupData>(defaultSignupData);

   const onSignin = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const submitErrors: string[] = [];
      if (signinData.email.length === 0) {
         submitErrors.push('email');
      }
      if (signinData.password.length === 0) {
         submitErrors.push('password');
      }
      dataContext.setData(() => {
         return {
            ...dataContext.data,
            user: {
               type: UserTypeEnum.LOCAL_ACTOR,
               firstname: 'Sophie',
               lastname: 'Stikker',
            },
         }
      });
      setSigninErrors(() => []);
      router.push('/');
   };
   const onSignup = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const submitErrors: string[] = [];
      if (signupData.isCompany && signupData.siret.length === 0) {
         submitErrors.push('siret');
      }
      if (signupData.lastname.length === 0) {
         submitErrors.push('lastname');
      }
      if (signupData.firstname.length === 0) {
         submitErrors.push('firstname');
      }
      if (signupData.email.length === 0) {
         submitErrors.push('email');
      }
      if (signupData.phone.length === 0) {
         submitErrors.push('phone');
      }
      if (signupData.password.length === 0) {
         submitErrors.push('password');
      }
      if (signupData.passwordConfirmation.length === 0 || signupData.passwordConfirmation !== signupData.password) {
         submitErrors.push('password-confirmation');
      }
      const type = signupData.isCompany ? UserTypeEnum.MANAGER : UserTypeEnum.EMPLOYEE;
      dataContext.setData(() => {
         return {
            ...dataContext.data,
            user: {
               type,
               name: signupData.firstname + ' ' + signupData.lastname,
               firstname: signupData.firstname,
               lastname: signupData.lastname,
            },
         }
      });
      setSignupErrors(() => []);
      router.push('/');
   };
   return (
      <div className={`${styles.registrationContainer}`}>
         <div className="header">
            <div className="title">
               <h1>Connexion / Inscription</h1>
            </div>
            <div className="description">
               <p>Lorem ipsum dolor sit amer, consetetur sadipscing elitr, sed diam nomumy eirmod tempor invidunt ut labore et dolore magna.</p>
            </div>
         </div>
         <div className="main">
            {registrationType === RegistrationType.SIGNIN ?
               <Card className="signin-on">
                  <div className="title">
                     <h3>Se connecter</h3>
                  </div>
                  <form onSubmit={onSignin}>
                     <div className={`input ${signinErrors.includes('email') ? 'error' : ''}`}>
                        <label htmlFor="email">Adresse e-mail</label>
                        <input
                           type="text"
                           name="email"
                           onChange={e => setSigninData({...signinData, email: e.target.value}  )}
                        />
                     </div>
                     <div className={`input ${signinErrors.includes('password') ? 'error' : ''}`}>
                        <label htmlFor="password">Mot de passe</label>
                        <input
                           type="password"
                           name="password"
                           onChange={e => setSigninData({...signinData, password: e.target.value}  )}
                        />
                     </div>
                     <div className="forgot">
                        <span>Mot de passe oublié ?</span>
                     </div>
                     <div className="question">
                        <span>Vous n'avez pas encore de compte ? <strong onClick={() => setRegistrationType(RegistrationType.SIGNUP)}>Inscrivez-vous</strong></span>
                        {/* ça marche pas */}
                     </div>
                     <div className="submit">
                        <Button>Se connecter</Button>
                     </div>
                  </form>
               </Card>
               :
               <Card className={`signup-off ${registrationType === RegistrationType.SIGNUP ? 'inactive' : ''}`} onClick={() => setRegistrationType(RegistrationType.SIGNIN)}>
                  <span>J'ai déja un compte</span>
                  <h2>Connexion</h2>
               </Card>
            }
            {registrationType === RegistrationType.SIGNUP ?
               <Card className="signup-on">
                  <div className="title">
                     <h3>S'inscrire</h3>
                  </div>
                  <form onSubmit={onSignup}>
                     <Checkbox
                        name="company"
                        onChange={(value) => setSignupData({...signupData, isCompany: value})}
                        label="Je suis une entreprise"
                     />
                     {signupData.isCompany &&
                        <div className={`input ${signupErrors.includes('siret') ? 'error' : ''}`}>
                           <label htmlFor="siret">SIRET</label>
                           <input
                              type="text"
                              name="siret"
                              onChange={e => setSignupData({...signupData, siret: e.target.value}  )}
                           />
                        </div>
                     }
                     <div className={`input ${signupErrors.includes('lastname') ? 'error' : ''}`}>
                        <label htmlFor="lastnname">Nom</label>
                        <input
                           type="text"
                           name="lastname"
                           onChange={e => setSignupData({...signupData, lastname: e.target.value}  )}
                        />
                     </div>
                     <div className={`input ${signupErrors.includes('firstname') ? 'error' : ''}`}>
                        <label htmlFor="firstname">Prénom</label>
                        <input
                           type="text"
                           name="firstname"
                           onChange={e => setSignupData({...signupData, firstname: e.target.value}  )}
                        />
                     </div>
                     <div className={`input ${signupErrors.includes('email') ? 'error' : ''}`}>
                        <label htmlFor="email">Adresse e-mail</label>
                        <input
                           type="text"
                           name="email"
                           onChange={e => setSignupData({...signupData, email: e.target.value}  )}
                        />
                     </div>
                     <div className={`input ${signupErrors.includes('phone') ? 'error' : ''}`}>
                        <label htmlFor="phone">Téléphone</label>
                        <input
                           type="text"
                           name="phone"
                           onChange={e => setSignupData({...signupData, phone: e.target.value}  )}
                        />
                     </div>
                     <div className={`input ${signupErrors.includes('password') ? 'error' : ''}`}>
                        <label htmlFor="password">Mot de passe</label>
                        <input
                           type="password"
                           name="password"
                           onChange={e => setSignupData({...signupData, password: e.target.value}  )}
                        />
                     </div>
                     <div className={`input ${signupErrors.includes('password-confirmation') ? 'error' : ''}`}>
                        <label htmlFor="password-confirmation">Confirmation mot de passe</label>
                        <input
                           type="password"
                           name="password-confirmation"
                           onChange={e => setSignupData({...signupData, passwordConfirmation: e.target.value}  )}
                        />
                     </div>
                     <div className="question">
                        <span>Vous avez déjà un compte ? <strong onClick={() => setRegistrationType(RegistrationType.SIGNIN)}>Connectez-vous</strong></span>
                     </div>
                     <div className="submit">
                        <Button>S'inscrire</Button>
                     </div>
                  </form>
               </Card>
               :
               <Card className={`signup-off ${registrationType === RegistrationType.SIGNIN ? 'inactive' : ''}`} onClick={() => setRegistrationType(RegistrationType.SIGNUP)}>
                  <span>Je n'ai pas de compte</span>
                  <h2>Inscription</h2>
               </Card>
            }
         </div>
      </div>
   );
};

export default Registration;