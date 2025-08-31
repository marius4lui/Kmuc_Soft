import { ReactNode } from 'react';
import styles from './Card.module.css';

interface CardProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}

export default function Card({ title, icon, children }: CardProps) {
  return (
    <div className={styles.card}>
      {icon && <div className={styles.iconContainer}>{icon}</div>}
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}
