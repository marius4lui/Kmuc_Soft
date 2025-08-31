import { NextResponse } from 'next/server';

// Validator für E-Mail-Adressen
const isValidEmail = (email: string) => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;
    
    // Validierung
    if (!name || !name.trim()) {
      return NextResponse.json(
        { error: "Name ist erforderlich" },
        { status: 400 }
      );
    }
    
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Eine gültige E-Mail-Adresse ist erforderlich" },
        { status: 400 }
      );
    }
    
    if (!message || !message.trim()) {
      return NextResponse.json(
        { error: "Nachricht ist erforderlich" },
        { status: 400 }
      );
    }
    
    // Hier würde in einem echten Projekt die E-Mail versendet oder
    // die Nachricht in einer Datenbank gespeichert werden
    console.log('Kontaktformular-Nachricht erhalten:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    });
    
    // Erfolgreiche Antwort
    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('Fehler bei der Verarbeitung des Kontaktformulars:', error);
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut." },
      { status: 500 }
    );
  }
}
