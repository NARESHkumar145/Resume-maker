import React, { useState } from 'react';
import { Brain, Zap, AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { AIAnalysis } from '../../types/resume';

const AIEnhancement: React.FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<AIAnalysis | null>(null);
  const [uploadedText, setUploadedText] = useState('');

  const mockAnalysis: AIAnalysis = {
    score: 85,
    atsScore: 78,
    suggestions: [
      {
        type: 'improvement',
        section: 'Professional Summary',
        message: 'Add quantifiable achievements to strengthen your summary',
        impact: 'high',
      },
      {
        type: 'warning',
        section: 'Work Experience',
        message: 'Use more action verbs like "implemented", "optimized", "developed"',
        impact: 'medium',
      },
      {
        type: 'success',
        section: 'Skills',
        message: 'Good balance of technical and soft skills',
        impact: 'low',
      },
      {
        type: 'improvement',
        section: 'Keywords',
        message: 'Include more industry-specific keywords for better ATS compatibility',
        impact: 'high',
      },
    ],
    keywordDensity: {
      'JavaScript': 8,
      'React': 6,
      'Leadership': 4,
      'Project Management': 3,
      'Team Collaboration': 2,
    },
  };

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      setAnalysis(mockAnalysis);
      setIsAnalyzing(false);
    }, 3000);
  };

  const getSuggestionIcon = (type: string) => {
    switch (type) {
      case 'improvement':
        return <TrendingUp className="w-5 h-5 text-blue-500" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      default:
        return <Brain className="w-5 h-5 text-gray-500" />;
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high':
        return 'text-red-600 bg-red-50';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50';
      case 'low':
        return 'text-green-600 bg-green-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          AI Resume Enhancement
        </h2>
        <p className="text-lg text-gray-600">
          Get personalized suggestions to improve your resume and increase your chances of getting hired
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Brain className="w-6 h-6 text-blue-600 mr-2" />
            Upload Your Resume
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Paste your resume content or upload a file
              </label>
              <textarea
                value={uploadedText}
                onChange={(e) => setUploadedText(e.target.value)}
                className="w-full h-64 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Paste your resume content here..."
              />
            </div>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <input
                type="file"
                accept=".pdf,.doc,.docx,.txt"
                className="hidden"
                id="resume-upload"
              />
              <label
                htmlFor="resume-upload"
                className="cursor-pointer text-blue-600 hover:text-blue-700"
              >
                Click to upload file (PDF, DOC, DOCX, TXT)
              </label>
              <p className="text-sm text-gray-500 mt-1">
                Or drag and drop your file here
              </p>
            </div>
            
            <button
              onClick={handleAnalyze}
              disabled={!uploadedText.trim() || isAnalyzing}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isAnalyzing ? (
                <>
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                  Analyzing...
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5 mr-2" />
                  Analyze with AI
                </>
              )}
            </button>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Analysis Results
          </h3>
          
          {!analysis && !isAnalyzing && (
            <div className="text-center py-12 text-gray-500">
              <Brain className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Upload your resume to get AI-powered suggestions</p>
            </div>
          )}

          {isAnalyzing && (
            <div className="text-center py-12">
              <div className="animate-spin w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-gray-600">AI is analyzing your resume...</p>
              <p className="text-sm text-gray-500 mt-2">This may take a few moments</p>
            </div>
          )}

          {analysis && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Score Overview */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {analysis.score}%
                  </div>
                  <div className="text-sm text-gray-600">Overall Score</div>
                </div>
                <div className="bg-green-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    {analysis.atsScore}%
                  </div>
                  <div className="text-sm text-gray-600">ATS Compatible</div>
                </div>
              </div>

              {/* Suggestions */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Improvement Suggestions</h4>
                <div className="space-y-3">
                  {analysis.suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                    >
                      {getSuggestionIcon(suggestion.type)}
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium text-gray-900 text-sm">
                            {suggestion.section}
                          </span>
                          <span
                            className={`text-xs px-2 py-1 rounded-full font-medium ${getImpactColor(
                              suggestion.impact
                            )}`}
                          >
                            {suggestion.impact} impact
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{suggestion.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Keyword Analysis */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Keyword Density</h4>
                <div className="space-y-2">
                  {Object.entries(analysis.keywordDensity).map(([keyword, count]) => (
                    <div key={keyword} className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">{keyword}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 h-2 bg-gray-200 rounded-full">
                          <div
                            className="h-2 bg-blue-600 rounded-full"
                            style={{ width: `${Math.min(count * 10, 100)}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-500 w-6 text-right">{count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIEnhancement;