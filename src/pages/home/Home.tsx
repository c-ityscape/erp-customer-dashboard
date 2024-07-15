import React from 'react';

import './Home.scss';
import HeaderComponent from '../../components/HeaderComponent';
import ButtonBarComponent from '../../components/ButtonBarComponent';
import ChartComponent from '../../components/ChartComponent';
import ImageSliderComponent from '../../components/ImageSliderComponent';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <HeaderComponent />
      <ButtonBarComponent />
      <div className="row">
        <ChartComponent />
        <ImageSliderComponent />
      </div>
    </div>
  );
};

export default Home;
