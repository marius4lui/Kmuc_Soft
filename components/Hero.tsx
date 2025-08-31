"use client";

import { useCompanyInfo } from '@/lib/env';
import styles from './Hero.module.css';

interface HeroProps {
  ctaText?: string;
  ctaLink?: string;
}

export default function Hero({ ctaText = "Kontakt aufnehmen", ctaLink = "/contact" }: HeroProps) {
  const companyInfo = useCompanyInfo();

  return (
    <div className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <h1>{companyInfo.name}</h1>
          <p className={styles.tagline}>{companyInfo.tagline}</p>
          
          <div className={styles.cta}>
            <a href={ctaLink} className="button">
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
