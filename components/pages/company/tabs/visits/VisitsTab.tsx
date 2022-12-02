import { useDataContext } from '../../../../../contexts/data/useDataContext';
import { CompanyType } from '../../../../../defs/types';
import SearchInput from '../../../../globals/SearchInput/SearchInput';
import VisitsPages from '../../../visits/VisitsPages/VisitsPages';
import styles from './VisitsTab.module.scss';

interface VisitsTabProps {
   company: CompanyType;
}
const VisitsTab = (props: VisitsTabProps) => {
   const dataContext = useDataContext();
   const items = dataContext.data.visits;
   return (
      <div className={`${styles.VisitsTabContainer}`}>
         <SearchInput className="search-input-container" />
         <VisitsPages items={items} itemsPerPage={8} />
      </div>
   );
};

export default VisitsTab;