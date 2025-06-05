
import React from 'react';
import Spline from '@splinetool/react-spline';

const PowerCTA = () => {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center bg-black text-white relative">
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/ub4hfBbpneSau4jJ/scene.splinecode" />
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">
          Hit the power button
        </h1>
      </div>
    </section>
  );
};

export default PowerCTA;
