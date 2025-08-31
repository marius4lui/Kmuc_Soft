import { Metadata } from 'next';
import Section from '@/components/Section';
import styles from './page.module.css';
import { env } from '@/lib/env';

export const metadata: Metadata = {
  title: 'Über uns',
  description: `Erfahren Sie mehr über ${env.COMPANY_NAME} und unsere Mission.`,
};

export default function AboutPage() {
  // Google Maps URL mit Adresse generieren
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(env.COMPANY_ADDRESS)}`;
  
  return (
    <>
      <Section 
        title="Über uns"
        subtitle={`Lernen Sie ${env.COMPANY_NAME} kennen`}
      >
        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              {env.COMPANY_CONTENT}
            </p>
            <p>
              Mit jahrelanger Erfahrung in der Branche haben wir uns darauf spezialisiert, 
              innovative Lösungen zu entwickeln, die genau auf die Bedürfnisse unserer Kunden 
              zugeschnitten sind. Unser Team besteht aus leidenschaftlichen Experten, 
              die stets nach der bestmöglichen Lösung streben.
            </p>
            <p>
              Unsere Werte:
            </p>
            <ul>
              <li>Qualität steht an erster Stelle</li>
              <li>Transparente Kommunikation</li>
              <li>Nachhaltige Partnerschaften</li>
              <li>Kontinuierliche Innovation</li>
            </ul>
          </div>
          
          <div className={`${styles.address} soft-panel`}>
            <h3>Besuchen Sie uns</h3>
            <p>{env.COMPANY_ADDRESS}</p>
            <p>
              <a 
                href={mapsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="button"
              >
                Google Maps öffnen
              </a>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
