import { AiOutlineSearch } from 'react-icons/ai';
import TextInput, { TextInputProps } from '../TextInput/TextInput';
import styles from './SearchInput.module.scss';

interface SearchInputProps extends TextInputProps {}
const SearchInput = (props: SearchInputProps) => {
   return <div className={`${styles.searchInputContainer} ${props.className ? props.className : ''}`} >
      <TextInput
         suffix={<AiOutlineSearch className="suffix" />}
         {...props}
      />
   </div>
}

export default SearchInput;