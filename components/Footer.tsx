"use client";

import { useCompanyInfo } from '@/lib/env';
import styles from './Footer.module.css';

export default function Footer() {
  const companyInfo = useCompanyInfo();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.companyInfo}>
            <h3>{companyInfo.name}</h3>
            <p>{companyInfo.address}</p>
          </div>
          
          <div className={styles.contact}>
            <p>
              <a href={`mailto:${companyInfo.email}`}>
                {companyInfo.email}
              </a>
            </p>
            <p>
              <a href={`tel:${companyInfo.phone}`}>
                {companyInfo.phone}
              </a>
            </p>
          </div>
          
          <div className={styles.social}>
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
        
        <div className={styles.copyright}>
          <p>&copy; {currentYear} {companyInfo.name}. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
