import React, { useEffect } from 'react';
import Layout from '../../layout';
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import NewsSection from '../../components/NewsSection/NewsSection';
import VideoSection from '../../components/VideoSection/VideoSection';
import { initScrollAnimations, cleanupScrollTriggers } from '../../utils/gsapAnimations';
import './Home.scss';

const Home = () => {
  useEffect(() => {
    // Initialize scroll animations
    initScrollAnimations();

    return () => {
      // Cleanup scroll triggers on unmount
      cleanupScrollTriggers();
    };
  }, []);

  return (
    <Layout>
      <div className="home-page">
        <HeroSlider />
        <NewsSection />
        <VideoSection />
      </div>
    </Layout>
  );
};

export default Home;

