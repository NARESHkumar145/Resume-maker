import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import FeaturesSection from '../components/Home/FeaturesSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
    </div>
  );
};

export default HomePage;