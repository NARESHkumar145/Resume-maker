import React from 'react';
import { ResumeData } from '../../../types/resume';
import { Mail, Phone, MapPin, Globe, Linkedin } from 'lucide-react';

interface ModernTemplateProps {
  data: ResumeData;
}

const ModernTemplate: React.FC<ModernTemplateProps> = ({ data }) => {
  const { contactInfo, experience = [], education = [], skills = [] } = data;

  // Helper function to safely render arrays
  const renderList = (items: string[] | undefined) => {
    if (!items || items.length === 0) return null;
    return (
      <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="bg-white p-8 min-h-full">
      {/* Header */}
      <div className="border-b-2 border-blue-600 pb-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {contactInfo?.fullName || 'Your Name'}
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
          {contactInfo?.email && (
            <div className="flex items-center">
              <Mail size={14} className="mr-1" />
              {contactInfo.email}
            </div>
          )}
          {contactInfo?.phone && (
            <div className="flex items-center">
              <Phone size={14} className="mr-1" />
              {contactInfo.phone}
            </div>
          )}
          {contactInfo?.location && (
            <div className="flex items-center">
              <MapPin size={14} className="mr-1" />
              {contactInfo.location}
            </div>
          )}
          {contactInfo?.linkedIn && (
            <div className="flex items-center">
              <Linkedin size={14} className="mr-1" />
              <a 
                href={contactInfo.linkedIn} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                LinkedIn
              </a>
            </div>
          )}
          {contactInfo?.website && (
            <div className="flex items-center">
              <Globe size={14} className="mr-1" />
              <a 
                href={contactInfo.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                Portfolio
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      {contactInfo?.summary && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-blue-600 mb-4">
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">{contactInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-blue-600 mb-4">
            Work Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.id || `exp-${Math.random()}`}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">{exp.position || 'Position'}</h3>
                    <p className="text-blue-600 font-medium">{exp.company || 'Company'}</p>
                  </div>
                  <div className="text-right text-sm text-gray-600">
                    {exp.location && <p>{exp.location}</p>}
                    <p>
                      {exp.startDate || 'Start'} - {exp.current ? 'Present' : (exp.endDate || 'End')}
                    </p>
                  </div>
                </div>
                {renderList(exp.description)}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-blue-600 mb-4">
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id || `edu-${Math.random()}`} className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {edu.degree || 'Degree'} {edu.field && `in ${edu.field}`}
                  </h3>
                  <p className="text-blue-600">{edu.institution || 'Institution'}</p>
                  {edu.honors && (
                    <p className="text-sm text-gray-600">{edu.honors}</p>
                  )}
                </div>
                <div className="text-right text-sm text-gray-600">
                  <p>
                    {edu.startDate || 'Start'} - {edu.endDate || 'End'}
                  </p>
                  {edu.gpa && <p>GPA: {edu.gpa}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-blue-600 mb-4">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['Technical', 'Soft', 'Language', 'Certification'].map((category) => {
              const categorySkills = skills.filter((skill) => skill.category === category);
              if (categorySkills.length === 0) return null;
              
              return (
                <div key={category}>
                  <h3 className="font-semibold text-gray-900 mb-2">{category}</h3>
                  <div className="space-y-1">
                    {categorySkills.map((skill) => (
                      <div key={skill.id || `skill-${Math.random()}`} className="flex justify-between items-center">
                        <span className="text-gray-700">{skill.name || 'Skill'}</span>
                        <span className="text-xs text-gray-500">{skill.level || 'Beginner'}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ModernTemplate;