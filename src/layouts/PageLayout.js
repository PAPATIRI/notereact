import React from 'react';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';

export default function PageLayout(props) {
  const { children } = props;

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
