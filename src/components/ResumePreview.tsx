import React from 'react';
import { Download, Eye, Share } from 'lucide-react';
import { ResumeData } from '../../types/resume';
import ModernTemplate from './templates/ModernTemplate';

interface ResumePreviewProps {
  resumeData: ResumeData | null;
  template: string;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ resumeData, template }) => {
  const handleDownload = async (format: 'pdf' | 'docx') => {
    try {
      // Mock download functionality - in real app, this would call an API
      console.log(`Downloading resume as ${format.toUpperCase()}`);
      
      // Simulate download process
      const link = document.createElement('a');
      link.href = '#'; // In real app, this would be the file URL
      link.download = `resume.${format}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Show success message (you might want to use a toast library)
      alert(`Resume downloaded as ${format.toUpperCase()}`);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again.');
    }
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'My Resume',
          text: 'Check out my resume',
          url: window.location.href,
        });
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.error('Share failed:', error);
      alert('Share failed. Please try again.');
    }
  };

  const renderTemplate = () => {
    if (!resumeData) {
      return (
        <div className="bg-white h-full flex items-center justify-center text-gray-500">
          <div className="text-center">
            <Eye className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Resume preview will appear here</p>
            <p className="text-sm mt-2">Start filling out your information to see the preview</p>
          </div>
        </div>
      );
    }

    // For now, all templates use ModernTemplate
    // In a real app, you'd have different template components
    switch (template) {
      case 'modern':
      case 'classic':
      case 'creative':
      case 'minimal':
      case 'tech':
      case 'academic':
      default:
        return <ModernTemplate data={resumeData} />;
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Preview Header */}
      <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
        <h3 className="font-semibold text-gray-900">Live Preview</h3>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handleDownload('pdf')}
            disabled={!resumeData}
            className="flex items-center px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            title="Download as PDF"
          >
            <Download size={16} className="mr-1" />
            PDF
          </button>
          
          <button
            onClick={() => handleDownload('docx')}
            disabled={!resumeData}
            className="flex items-center px-3 py-2 bg-gray-600 text-white text-sm rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            title="Download as Word document"
          >
            <Download size={16} className="mr-1" />
            Word
          </button>
          
          <button 
            onClick={handleShare}
            disabled={!resumeData}
            className="flex items-center px-3 py-2 bg-gray-200 text-gray-700 text-sm rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            title="Share resume"
          >
            <Share size={16} className="mr-1" />
            Share
          </button>
        </div>
      </div>

      {/* Preview Content */}
      <div className="flex-1 p-6 bg-gray-100 overflow-auto">
        <div className="max-w-2xl mx-auto bg-white shadow-lg min-h-full">
          {renderTemplate()}
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;