import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Headers/Header'; // Assuming you have a Header component
import Footer from '../Components/Footer'; // Assuming you have a Footer component

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* *** यह Outlet सबसे ज़रूरी है! ***
        यह वह जगह है जहाँ 'jewelry/hidden-potential-seed-jewelry' 
        का कंटेंट (<HiddenPotentialSeedJewelry />) रेंडर होगा।
      */}
      <main className="flex-grow">
        <Outlet /> 
      </main>
      
      <Footer />
    </div>
  );
};

export default AppLayout;