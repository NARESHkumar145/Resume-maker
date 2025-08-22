export interface ContactInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedIn?: string;
  website?: string;
  summary: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string[];
  location: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  honors?: string;
}

export interface Skill {
  id: string;
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  category: 'Technical' | 'Soft' | 'Language' | 'Certification';
}

export interface ResumeData {
  id: string;
  contactInfo: ContactInfo;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  template: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AIAnalysis {
  score: number;
  suggestions: {
    type: 'improvement' | 'warning' | 'success';
    section: string;
    message: string;
    impact: 'high' | 'medium' | 'low';
  }[];
  atsScore: number;
  keywordDensity: { [key: string]: number };
}

export interface JobMatch {
  id: string;
  title: string;
  company: string;
  location: string;
  matchScore: number;
  description: string;
  requirements: string[];
  salary?: string;
  url: string;
}