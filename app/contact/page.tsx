"use client";

import { useState, FormEvent } from 'react';
import { useCompanyInfo } from '@/lib/env';
import Section from '@/components/Section';
import styles from './page.module.css';

export default function ContactPage() {
  const companyInfo = useCompanyInfo();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Bitte geben Sie Ihren Namen ein';
      valid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein';
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
      valid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Bitte geben Sie Ihre Nachricht ein';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus({
          success: false,
          message: data.error || 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  return (
    <>
      <Section 
        title="Kontakt"
        subtitle="Nehmen Sie Kontakt mit uns auf. Wir freuen uns auf Ihre Nachricht!"
      >
        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <div className={`${styles.infoCard} soft-panel`}>
              <h3>Kontaktdaten</h3>
              
              <div className={styles.infoItem}>
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <div>
                  <h4>Telefon</h4>
                  <a href={`tel:${companyInfo.phone}`}>{companyInfo.phone}</a>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <div>
                  <h4>E-Mail</h4>
                  <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <div>
                  <h4>Adresse</h4>
                  <p>{companyInfo.address}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit} className="soft-panel">
              <h3>Schreiben Sie uns</h3>
              
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  aria-invalid={!!errors.name}
                />
                {errors.name && <p className="error-message" id="name-error">{errors.name}</p>}
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">E-Mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="error-message" id="email-error">{errors.email}</p>}
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message">Nachricht</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  aria-invalid={!!errors.message}
                ></textarea>
                {errors.message && <p className="error-message" id="message-error">{errors.message}</p>}
              </div>
              
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
              </button>
              
              {submitStatus && (
                <div className={`${styles.submitStatus} ${submitStatus.success ? styles.success : styles.error}`}>
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}
