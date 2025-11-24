import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_OWNER, PROJECTS, SKILLS, ABOUT_TEXT, EDUCATION } from '../constants';

// Initialize the Gemini client safe check
// In production (static hosting), process.env might be undefined or empty.
// We use a safe check to prevent the entire app from crashing with a white/black screen.
let ai: GoogleGenAI | null = null;

try {
    // FIX: Check typeof process first to avoid ReferenceError in browser environments
    // @ts-ignore
    if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
        // @ts-ignore
        ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    }
} catch (e) {
    console.warn("Gemini API Key not found or process undefined. AI Chat will be disabled.", e);
}

const SYSTEM_INSTRUCTION = `
Tu es l'assistant IA personnel pour le portfolio de ${PORTFOLIO_OWNER}.
Ton but est de répondre aux questions des visiteurs sur les compétences, les projets et l'expérience de ${PORTFOLIO_OWNER} de manière engageante, professionnelle et un peu futuriste.

Voici les données sur le portfolio :
À propos : "${ABOUT_TEXT}"

Parcours Scolaire (Education) :
${EDUCATION.map(e => `- ${e.degree} chez ${e.institution} (${e.period}). Détails: ${e.description}`).join('\n')}

Projets :
${PROJECTS.map(p => `- ${p.title}: ${p.description} (Technologies: ${p.tags.join(', ')})`).join('\n')}

Compétences :
${SKILLS.map(s => `- ${s.name} (${s.level}%)`).join('\n')}

Instructions de style :
- Sois concis et utile.
- Utilise un ton enthousiaste.
- Si on te demande un contact, suggère les liens sociaux en bas de page.
- Parle français.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!ai) {
      return "Désolé, la clé d'API n'est pas configurée. Je ne peux pas répondre pour le moment.";
  }
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });
    
    return response.text || "Désolé, je n'ai pas pu traiter cette information pour le moment.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Une erreur est survenue lors de la connexion à mon cerveau numérique. Veuillez réessayer plus tard.";
  }
};