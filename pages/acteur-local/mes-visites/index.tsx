import BadgeCount from '../../../components/globals/BadgeCount/BadgeCount';
import SearchInput from '../../../components/globals/SearchInput/SearchInput';
import VisitsPages from '../../../components/pages/visits/VisitsPages/VisitsPages';
import { useDataContext } from '../../../contexts/data/useDataContext';
import styles from './my-visits.module.scss';

const MyVisits = () => {
   const dataContext = useDataContext();
   const items = dataContext.data.visits;
   return <div className={styles.myVisits}>
      <div className="header">
         <div className="title-container">
            <h1>Mes visites</h1>
            <BadgeCount className="visits-count"><span>{items.length}</span></BadgeCount>
         </div>
         <SearchInput />
      </div>
      <VisitsPages items={items}/>
   </div>
}

export default MyVisits;