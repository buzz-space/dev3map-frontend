import React from 'react';
import AboutContainer from '~/containers/AboutContainer';
import MainLayout from '~/layout/MainLayout';

const AboutPage = () => {
  return (
    <MainLayout currentPage="about" backgroundAbout>
      <AboutContainer />
    </MainLayout>
  );
};

export default AboutPage;
