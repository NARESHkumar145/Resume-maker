import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface TemplateOption {
  id: string;
  name: string;
  preview: string;
  description: string;
  category: 'Modern' | 'Classic' | 'Creative' | 'Professional';
}

interface TemplateSelectorProps {
  selectedTemplate: string;
  onTemplateSelect: (templateId: string) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  selectedTemplate,
  onTemplateSelect,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const templates: TemplateOption[] = [
    {
      id: 'modern',
      name: 'Modern Professional',
      preview: '/templates/modern-preview.jpg',
      description: 'Clean, modern design with subtle colors',
      category: 'Modern',
    },
    {
      id: 'classic',
      name: 'Classic Executive',
      preview: '/templates/classic-preview.jpg',
      description: 'Traditional layout perfect for corporate roles',
      category: 'Classic',
    },
    {
      id: 'creative',
      name: 'Creative Designer',
      preview: '/templates/creative-preview.jpg',
      description: 'Bold design for creative professionals',
      category: 'Creative',
    },
    {
      id: 'minimal',
      name: 'Minimal Clean',
      preview: '/templates/minimal-preview.jpg',
      description: 'Simple, clean layout focusing on content',
      category: 'Professional',
    },
    {
      id: 'tech',
      name: 'Tech Professional',
      preview: '/templates/tech-preview.jpg',
      description: 'Modern layout designed for tech roles',
      category: 'Modern',
    },
    {
      id: 'academic',
      name: 'Academic Scholar',
      preview: '/templates/academic-preview.jpg',
      description: 'Formal design for academic positions',
      category: 'Classic',
    },
  ];

  const categories = ['All', 'Modern', 'Classic', 'Creative', 'Professional'];

  const filteredTemplates = selectedCategory === 'All' 
    ? templates 
    : templates.filter(template => template.category === selectedCategory);

  const handleTemplateSelect = (templateId: string) => {
    onTemplateSelect(templateId);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Template</h2>
        <p className="text-lg text-gray-600">
          Select a professional template that matches your industry and style
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((template) => (
          <motion.div
            key={template.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className={`relative cursor-pointer rounded-2xl overflow-hidden border-2 transition-all ${
              selectedTemplate === template.id
                ? 'border-blue-500 shadow-lg ring-2 ring-blue-200'
                : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
            }`}
            onClick={() => handleTemplateSelect(template.id)}
          >
            {/* Template Preview */}
            <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
              {/* Mock preview content */}
              <div className="text-center p-8 w-full">
                <div className="w-full h-32 bg-white rounded-lg shadow-sm mb-4 flex items-center justify-center">
                  <span className="text-gray-400 text-sm font-medium">
                    {template.name}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-300 rounded mx-auto"></div>
                  <div className="h-2 bg-gray-300 rounded w-3/4 mx-auto"></div>
                  <div className="h-2 bg-gray-300 rounded w-1/2 mx-auto"></div>
                  <div className="mt-4 space-y-1">
                    <div className="h-2 bg-gray-300 rounded"></div>
                    <div className="h-2 bg-gray-300 rounded w-4/5"></div>
                    <div className="h-2 bg-gray-300 rounded w-3/5"></div>
                  </div>
                </div>
              </div>

              {/* Selection indicator */}
              {selectedTemplate === template.id && (
                <div className="absolute top-3 left-3 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <Check size={16} className="text-white" />
                </div>
              )}
            </div>

            {/* Template Info */}
            <div className="p-4 bg-white">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {template.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {template.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Category Badge */}
            <div className="absolute top-3 right-3">
              <span className="bg-white/90 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-full text-gray-700">
                {template.category}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredTemplates.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No templates found for the selected category.</p>
        </div>
      )}
    </div>
  );
};

export default TemplateSelector;