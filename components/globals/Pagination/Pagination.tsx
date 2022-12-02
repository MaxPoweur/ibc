import { PaginationProps } from 'antd/lib/pagination';
import { Pagination as AntdPagination } from 'antd';
import styles from './Pagination.module.scss';

const Pagination = (props: PaginationProps) => {
   return <AntdPagination className={`${styles.paginationContainer}`} showQuickJumper={false} {...props} />
}

export default Pagination;