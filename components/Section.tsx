import { ReactNode } from 'react';
import styles from './Section.module.css';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ title, subtitle, children, className = '' }: SectionProps) {
  return (
    <section className={`${styles.section} ${className}`}>
      <div className="container">
        {(title || subtitle) && (
          <div className={styles.header}>
            {title && <h2 className={styles.title}>{title}</h2>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
        )}
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </section>
  );
}
