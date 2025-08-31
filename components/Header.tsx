"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCompanyInfo } from '@/lib/env';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();
  const companyInfo = useCompanyInfo();
  
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo}>
          {companyInfo.name}
        </Link>
        
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <Link 
                href="/" 
                className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={`${styles.navLink} ${pathname === '/about' ? styles.active : ''}`}
              >
                Über uns
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className={`${styles.navLink} ${pathname === '/contact' ? styles.active : ''}`}
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
