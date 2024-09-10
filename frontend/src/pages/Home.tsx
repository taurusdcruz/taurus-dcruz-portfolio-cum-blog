import React from 'react';
import Hologram from '../components/Hologram';
import Timeline from '../components/Timeline';

const Home: React.FC = () => {
  const events = [
    { date: '2024-01-01', description: 'Started my career in tech.' },
    { date: '2024-06-01', description: 'Launched my first product.' }
  ];

  return (
    <div>
      <Hologram />
      <Timeline events={events} />
    </div>
  );
};

export default Home;
