
import React from 'react';
import Spline from '@splinetool/react-spline';

const PowerCTA = () => {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center bg-black text-white relative">
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/ub4hfBbpneSau4jJ/scene.splinecode" />
      </div>
      <div className="relative z-10 text-center px-4">
        {/* Heading removed as requested */}
      </div>
    </section>
  );
};

export default PowerCTA;
