import React from 'react';
import { Brain, Target, FileText, Download, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Enhancement',
      description: 'Get intelligent suggestions to improve your resume content and increase your chances of getting hired.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Target,
      title: 'ATS Optimization',
      description: 'Ensure your resume passes through Applicant Tracking Systems with our advanced compatibility checker.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FileText,
      title: 'Professional Templates',
      description: 'Choose from multiple industry-specific templates designed by HR professionals.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Download,
      title: 'Export Options',
      description: 'Download your resume in PDF, Word, or other formats with perfect formatting.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Zap,
      title: 'Real-time Preview',
      description: 'See your changes instantly with our live preview feature as you build your resume.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Your data is encrypted and secure. We never share your personal information.',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features to Land Your Dream Job
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive suite of tools ensures your resume stands out from the crowd
            and gets noticed by hiring managers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;