import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { GrEdit } from 'react-icons/gr';
import Card from '../Card/Card';
import {useState} from 'react';
import { GoTriangleDown } from 'react-icons/go';
import styles from './ItemsTabs.module.scss';

export interface ItemTab {
   itemsCount: number;
   title: string;
   subtitle?: string;
   content: React.ReactNode;
}
interface ItemsTabsProps {
   currentTabIndex: number;
   tabs: ItemTab[];
   onTabClick: (index: number) => void;
}

const ItemsTabs = (props: ItemsTabsProps) => {
   const tab = props.tabs[props.currentTabIndex];
   const [isActive, setIsActive] = useState(true);

   const handleClick = event => {
     // 👇️ toggle isActive state variable
     setIsActive(current => !current);
   };
   return (
      <div className={`${styles.ItemsTabsContainer}`}>
         <div className="tabs">
            {props.tabs.map((tab, index) => <Card key={index} className={`tab ${props.currentTabIndex === index ? 'active' : ''}`} onClick={() => props.onTabClick(index)}>
               <div className="items-count">{tab.itemsCount}</div>
               <h4 className="title">{tab.title}</h4>
               {tab.subtitle &&
                  <span className="subtitle">{tab.subtitle}</span>
               }
               {props.currentTabIndex === index &&
                  <GrEdit className="edit-icon" color="white" />
               }
            </Card>)}
         </div>
         <div className={`responsive-tabs ${isActive ? 'closed' : 'open'}`} onClick={handleClick}>
            {props.tabs.map((tab, index) => <Card key={index} className={`tab ${props.currentTabIndex === index ? 'active' : ''}`} onClick={() => props.onTabClick(index)}>
               <div className="items-count">{tab.itemsCount}</div>
               <div className="items-bloc">
                  <h4 className="title">{tab.title}</h4>
                  {tab.subtitle &&
                     <span className="subtitle">{tab.subtitle}</span>
                  }
               </div>
               <div className="user-arrow">
                  <span><GoTriangleDown size={15} /></span>
               </div>
            </Card>)}
         </div>
         <div className="tab-content">
            {tab.content}
         </div>
      </div>
   );
};

export default ItemsTabs;