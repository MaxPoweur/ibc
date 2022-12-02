import React from 'react';
import { CompanyType } from '../../../../../defs/types';
import Button from '../../../../globals/Button/Button';
import Card from '../../../../globals/Card/Card';
import TextInput from '../../../../globals/TextInput/TextInput';
import styles from './ContactsTab.module.scss';

interface ContactsTabProps {
   company: CompanyType;
}
const ContactsTab = (props: ContactsTabProps) => {
   const contacts = props.company.contacts;
   return (
      <div className={`${styles.ContactsTabContainer}`}>
         <Card>
            <div className="form">
               <h3>Coordonnées</h3>
               <TextInput
                  name="company"
                  label="Entreprise"
                  defaultValue={props.company.name}
               />
               <TextInput
                  name="siret"
                  label="SIRET"
                  defaultValue={props.company.siret}
               />
               <TextInput
                  name="naf"
                  label="Naf732"
                  defaultValue={props.company.naf}
               />
               <TextInput
                  name="address"
                  label="Adresse"
                  defaultValue={props.company.address}
               />
               <TextInput
                  name="location"
                  label="CP - Ville"
                  defaultValue={`${props.company.zipCode} - ${props.company.city}`}
               />
            </div>
            <Button>Modifier</Button>
         </Card>
         <Card>
            <div className="form">
               <h3>Contacts</h3>
               {contacts.map((contact, index) =>
                  <TextInput
                     key={index}
                     name={`contact-${index}`}
                     label={`Contact ${index+1}`}
                     defaultValue={`${contact.firstname} ${contact.lastname}, ${contact.function}`}
                     disabled
                  />
               )}
            </div>
            <Button>Nouveau contact</Button>
         </Card>
      </div>
   );
};

export default ContactsTab;