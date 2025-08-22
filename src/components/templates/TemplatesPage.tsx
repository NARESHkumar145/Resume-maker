import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useResume } from '../contexts/ResumeContext';
import TemplateSelector from '../components/Templates/TemplateSelector';

const TemplatesPage: React.FC = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useResume();

  const handleTemplateSelect = (templateId: string) => {
    dispatch({ type: 'SET_TEMPLATE', payload: templateId });
  };

  const handleUseTemplate = () => {
    navigate('/builder');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-12">
        <TemplateSelector
          selectedTemplate={state.selectedTemplate}
          onTemplateSelect={handleTemplateSelect}
        />
        
        {state.selectedTemplate && (
          <div className="text-center mt-8">
            <button
              onClick={handleUseTemplate}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
            >
              Use This Template
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplatesPage;