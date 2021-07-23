import React from 'react';
import Footer from '../components/ui/footer';
import { desktopFooter, mobileFooter } from './mockData';

export default () => {
  return <Footer desktopFooter={desktopFooter} mobileFooter={mobileFooter} />;
};
