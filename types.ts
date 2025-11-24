import React from 'react';

export type Language = 'fr' | 'en' | 'es' | 'de' | 'jp' | 'cn';

export interface LocalizedString {
    fr: string;
    en: string;
    es: string;
    de: string;
    jp: string;
    cn: string;
    [key: string]: string;
}

export interface Project {
  id: number;
  title: string;
  description: LocalizedString;
  tags: string[];
  imageUrl: string;
  link: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'frontend' | 'backend' | 'tools';
  logo: string;
}

export interface EducationDetails {
  modules: string[];
  skillsAcquired: string[];
  achievements: string[];
}

export interface EducationItem {
  id: number;
  degree: LocalizedString;
  institution: string;
  period: string;
  description: LocalizedString;
  details?: EducationDetails; // Keeping details simple for now, or could be localized too
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ElementType;
}

export interface Invention {
  id: string;
  title: string;
  type: 'Hardware' | 'Software' | 'Concept';
  description: LocalizedString;
  status: 'Prototype' | 'Alpha' | 'Beta' | 'Active';
  image: string;
  techStack: string[];
  features: LocalizedString[];
}