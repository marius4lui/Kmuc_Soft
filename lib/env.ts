import { z } from 'zod';

// Schema for environment variables with optional values
const envSchema = z.object({
  COMPANY_NAME: z.string().default("Acme GmbH"),
  COMPANY_CONTENT: z.string().default("Wir bauen hochwertige Lösungen für moderne Unternehmen."),
  COMPANY_PHONE: z.string().default("+49 30 123456"),
  COMPANY_EMAIL: z.string().default("kontakt@acme.de"),
  COMPANY_TAGLINE: z.string().default("Innovativ. Nutzerzentriert. Nachhaltig."),
  COMPANY_ADDRESS: z.string().default("Beispielstraße 12, 10115 Berlin"),
});

// Schema for public environment variables (for client-side)
const publicEnvSchema = z.object({
  NEXT_PUBLIC_COMPANY_NAME: z.string().default("Acme GmbH"),
  NEXT_PUBLIC_COMPANY_CONTENT: z.string().default("Wir bauen hochwertige Lösungen für moderne Unternehmen."),
  NEXT_PUBLIC_COMPANY_PHONE: z.string().default("+49 30 123456"),
  NEXT_PUBLIC_COMPANY_EMAIL: z.string().default("kontakt@acme.de"),
  NEXT_PUBLIC_COMPANY_TAGLINE: z.string().default("Innovativ. Nutzerzentriert. Nachhaltig."),
  NEXT_PUBLIC_COMPANY_ADDRESS: z.string().default("Beispielstraße 12, 10115 Berlin"),
});

// Server-side environment check
function validateEnv() {
  try {
    // Use safeParse instead of parse to handle errors gracefully
    const result = envSchema.safeParse(process.env);
    
    if (!result.success) {
      console.warn('⚠️ Some environment variables are missing or invalid, using defaults:', 
        result.error.flatten().fieldErrors);
      
      // Return default values from the schema
      return envSchema.parse({});
    }
    
    return result.data;
  } catch (error) {
    console.error('❌ Error parsing environment variables:', error);
    // Return default values instead of throwing
    return envSchema.parse({});
  }
}

// Client-side public environment check
function validatePublicEnv() {
  const publicEnvData = {
    NEXT_PUBLIC_COMPANY_NAME: process.env.NEXT_PUBLIC_COMPANY_NAME,
    NEXT_PUBLIC_COMPANY_CONTENT: process.env.NEXT_PUBLIC_COMPANY_CONTENT,
    NEXT_PUBLIC_COMPANY_PHONE: process.env.NEXT_PUBLIC_COMPANY_PHONE,
    NEXT_PUBLIC_COMPANY_EMAIL: process.env.NEXT_PUBLIC_COMPANY_EMAIL,
    NEXT_PUBLIC_COMPANY_TAGLINE: process.env.NEXT_PUBLIC_COMPANY_TAGLINE,
    NEXT_PUBLIC_COMPANY_ADDRESS: process.env.NEXT_PUBLIC_COMPANY_ADDRESS,
  };
  
  try {
    // Use safeParse for public env as well
    const result = publicEnvSchema.safeParse(publicEnvData);
    
    if (!result.success) {
      console.warn('⚠️ Some public environment variables are missing or invalid, using defaults:', 
        result.error.flatten().fieldErrors);
      
      // Mirror server variables to public if missing
      const env = validateEnv();
      return {
        NEXT_PUBLIC_COMPANY_NAME: process.env.NEXT_PUBLIC_COMPANY_NAME || env.COMPANY_NAME,
        NEXT_PUBLIC_COMPANY_CONTENT: process.env.NEXT_PUBLIC_COMPANY_CONTENT || env.COMPANY_CONTENT,
        NEXT_PUBLIC_COMPANY_PHONE: process.env.NEXT_PUBLIC_COMPANY_PHONE || env.COMPANY_PHONE,
        NEXT_PUBLIC_COMPANY_EMAIL: process.env.NEXT_PUBLIC_COMPANY_EMAIL || env.COMPANY_EMAIL,
        NEXT_PUBLIC_COMPANY_TAGLINE: process.env.NEXT_PUBLIC_COMPANY_TAGLINE || env.COMPANY_TAGLINE,
        NEXT_PUBLIC_COMPANY_ADDRESS: process.env.NEXT_PUBLIC_COMPANY_ADDRESS || env.COMPANY_ADDRESS,
      };
    }
    
    return result.data;
  } catch (error) {
    console.warn('⚠️ Error parsing public environment variables:', error);
    
    // Return defaults
    return publicEnvSchema.parse({});
  }
}

// Client-side hook for company information
export function useCompanyInfo() {
  const publicEnv = validatePublicEnv();
  
  return {
    name: publicEnv.NEXT_PUBLIC_COMPANY_NAME,
    content: publicEnv.NEXT_PUBLIC_COMPANY_CONTENT,
    phone: publicEnv.NEXT_PUBLIC_COMPANY_PHONE,
    email: publicEnv.NEXT_PUBLIC_COMPANY_EMAIL,
    tagline: publicEnv.NEXT_PUBLIC_COMPANY_TAGLINE,
    address: publicEnv.NEXT_PUBLIC_COMPANY_ADDRESS,
  };
}

// Export validated environment variables
export const env = validateEnv();
export const publicEnv = validatePublicEnv();
