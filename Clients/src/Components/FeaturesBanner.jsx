import React from 'react';
import FeaturesBannerCard from '../Components/FeatureBannerCard'; // Corrected import path
import biodegradable from '../assets/biodegradable.png';
import nonToxic from '../assets/non-toxic.png';
import ecoFriendly from '../assets/eco-friendly.jpg';
import doorStepImg from '../assets/door_step_logo.png';

const FeaturesBanner = () => {
  return (
    <>
      <div className='methodology my-6'>
    
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-6 place-items-center my-8 shadow-lg p-2 border">
          <FeaturesBannerCard img={biodegradable} />
          <FeaturesBannerCard img={nonToxic} />
          <FeaturesBannerCard img={ecoFriendly} />
          <FeaturesBannerCard img={doorStepImg} />
        </div>
      </div>
    </>
  );
};

export default FeaturesBanner;
