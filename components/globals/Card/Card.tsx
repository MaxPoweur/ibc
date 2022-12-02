import styles from './Card.module.scss';

interface CardProps {
   className?: string;
   onClick?: () => void;
   children: React.ReactNode;
   additionalProps?: any;
}

const Card = ({className, onClick, children, additionalProps}: CardProps) => {
   return <div className={`card ${styles.card} ${className}`} onClick={onClick} {...additionalProps}>
      {children}
   </div>
}

export default Card;