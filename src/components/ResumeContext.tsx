import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { ResumeData, ContactInfo, Experience, Education, Skill } from '../types/resume';

interface ResumeState {
  currentResume: ResumeData | null;
  resumes: ResumeData[];
  currentStep: number;
  selectedTemplate: string;
}

type ResumeAction =
  | { type: 'SET_CONTACT_INFO'; payload: ContactInfo }
  | { type: 'ADD_EXPERIENCE'; payload: Experience }
  | { type: 'UPDATE_EXPERIENCE'; payload: { id: string; data: Partial<Experience> } }
  | { type: 'DELETE_EXPERIENCE'; payload: string }
  | { type: 'ADD_EDUCATION'; payload: Education }
  | { type: 'UPDATE_EDUCATION'; payload: { id: string; data: Partial<Education> } }
  | { type: 'DELETE_EDUCATION'; payload: string }
  | { type: 'ADD_SKILL'; payload: Skill }
  | { type: 'UPDATE_SKILL'; payload: { id: string; data: Partial<Skill> } }
  | { type: 'DELETE_SKILL'; payload: string }
  | { type: 'SET_STEP'; payload: number }
  | { type: 'SET_TEMPLATE'; payload: string }
  | { type: 'LOAD_RESUME'; payload: ResumeData }
  | { type: 'CREATE_NEW_RESUME' }
  | { type: 'SAVE_RESUME' };

const initialState: ResumeState = {
  currentResume: null,
  resumes: [],
  currentStep: 1,
  selectedTemplate: 'modern',
};

const resumeReducer = (state: ResumeState, action: ResumeAction): ResumeState => {
  switch (action.type) {
    case 'SET_CONTACT_INFO':
      if (!state.currentResume) return state;
      return {
        ...state,
        currentResume: {
          ...state.currentResume,
          contactInfo: action.payload,
        },
      };
    case 'ADD_EXPERIENCE':
      if (!state.currentResume) return state;
      return {
        ...state,
        currentResume: {
          ...state.currentResume,
          experience: [...state.currentResume.experience, action.payload],
        },
      };
    case 'SET_STEP':
      return { ...state, currentStep: action.payload };
    case 'SET_TEMPLATE':
      return { ...state, selectedTemplate: action.payload };
    case 'CREATE_NEW_RESUME':
      const newResume: ResumeData = {
        id: Date.now().toString(),
        contactInfo: {
          fullName: '',
          email: '',
          phone: '',
          location: '',
          summary: '',
        },
        experience: [],
        education: [],
        skills: [],
        template: state.selectedTemplate,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      return { ...state, currentResume: newResume };
    default:
      return state;
  }
};

const ResumeContext = createContext<{
  state: ResumeState;
  dispatch: React.Dispatch<ResumeAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const ResumeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(resumeReducer, initialState);

  return (
    <ResumeContext.Provider value={{ state, dispatch }}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
};