import React, { useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useResume } from '../contexts/ResumeContext';
import ProgressIndicator from '../components/Builder/ProgressIndicator';
import ContactInfoStep from '../components/Builder/ContactInfoStep';
import ResumePreview from '../components/Preview/ResumePreview';

const BuilderPage: React.FC = () => {
  const { state, dispatch } = useResume();
  const steps = ['Contact Info', 'Experience', 'Education', 'Skills'];

  useEffect(() => {
    if (!state.currentResume) {
      dispatch({ type: 'CREATE_NEW_RESUME' });
    }
  }, [state.currentResume, dispatch]);

  const handleNext = () => {
    if (state.currentStep < steps.length) {
      dispatch({ type: 'SET_STEP', payload: state.currentStep + 1 });
    }
  };

  const handlePrevious = () => {
    if (state.currentStep > 1) {
      dispatch({ type: 'SET_STEP', payload: state.currentStep - 1 });
    }
  };

  const renderCurrentStep = () => {
    switch (state.currentStep) {
      case 1:
        return <ContactInfoStep />;
      case 2:
        return <div className="text-center py-20">Experience Step (Coming Soon)</div>;
      case 3:
        return <div className="text-center py-20">Education Step (Coming Soon)</div>;
      case 4:
        return <div className="text-center py-20">Skills Step (Coming Soon)</div>;
      default:
        return <ContactInfoStep />;
    }
  };

  const canProceed = () => {
    if (!state.currentResume) return false;
    
    switch (state.currentStep) {
      case 1:
        const { contactInfo } = state.currentResume;
        return contactInfo.fullName && contactInfo.email && contactInfo.phone && contactInfo.location;
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ProgressIndicator
        currentStep={state.currentStep}
        totalSteps={steps.length}
        steps={steps}
      />
      
      <div className="flex h-[calc(100vh-140px)]">
        {/* Form Section */}
        <div className="flex-1 overflow-auto">
          <div className="py-8">
            {renderCurrentStep()}
            
            {/* Navigation Buttons */}
            <div className="max-w-2xl mx-auto px-6 mt-8">
              <div className="flex justify-between">
                <button
                  onClick={handlePrevious}
                  disabled={state.currentStep === 1}
                  className="flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft size={20} className="mr-1" />
                  Previous
                </button>
                
                <button
                  onClick={handleNext}
                  disabled={state.currentStep === steps.length || !canProceed()}
                  className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next
                  <ChevronRight size={20} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Section */}
        <div className="w-1/2 border-l border-gray-200 bg-white">
          <ResumePreview
            resumeData={state.currentResume}
            template={state.selectedTemplate}
          />
        </div>
      </div>
    </div>
  );
};

export default BuilderPage;