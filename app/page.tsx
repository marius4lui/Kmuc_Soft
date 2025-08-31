import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import styles from './page.module.css';
import { env } from '@/lib/env';

export const metadata: Metadata = {
  title: env.COMPANY_NAME,
  description: env.COMPANY_CONTENT,
};

export default function Home() {
  return (
    <>
      <Hero />
      
      <Section 
        title="Über uns"
        subtitle={env.COMPANY_CONTENT}
      >
        <div className={styles.intro}>
          <p>
            Wir sind spezialisiert auf moderne, benutzerfreundliche digitale Lösungen, 
            die Ihren Geschäftserfolg vorantreiben. Mit einem Team aus erfahrenen
            Experten bieten wir maßgeschneiderte Konzepte für Ihre individuellen Anforderungen.
          </p>
        </div>
      </Section>
      
      <Section title="Unsere Leistungen">
        <div className={styles.features}>
          <div className={styles.feature}>
            <Card
              title="Webentwicklung"
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                  <line x1="12" y1="22" x2="12" y2="15.5"></line>
                  <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                </svg>
              }
            >
              <p>Moderne Webseiten und Web-Anwendungen mit Fokus auf Benutzerfreundlichkeit und Performance.</p>
            </Card>
          </div>
          
          <div className={styles.feature}>
            <Card
              title="Digitale Strategie"
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                  <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                </svg>
              }
            >
              <p>Entwicklung zukunftssicherer digitaler Strategien, die Ihr Unternehmen voranbringen.</p>
            </Card>
          </div>
          
          <div className={styles.feature}>
            <Card
              title="UX/UI Design"
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              }
            >
              <p>Nutzerorientierte Designkonzepte, die begeistern und Conversion-Raten steigern.</p>
            </Card>
          </div>
        </div>
        
        <div className={styles.cta}>
          <a href="/contact" className="button">Kontakt aufnehmen</a>
        </div>
      </Section>
    </>
  );
}
