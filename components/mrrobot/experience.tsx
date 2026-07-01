'use client';

import { useState } from 'react';
import BootSequence from './boot-sequence';
import { useBootComplete } from './hooks';
import MainSite from './main-site';

export default function MrRobotExperience() {
  const { bootComplete, completeBoot, reboot, hydrated } = useBootComplete();
  const [exiting, setExiting] = useState(false);

  const handleBootComplete = () => {
    setExiting(true);
    setTimeout(() => completeBoot(), 500);
  };

  if (!hydrated) {
    return <div className="min-h-screen bg-mr-black" />;
  }

  return (
    <>
      {!bootComplete && (
        <div
          className={`transition-opacity duration-500 ${exiting ? 'opacity-0' : 'opacity-100'}`}
        >
          <BootSequence onComplete={handleBootComplete} />
        </div>
      )}
      {bootComplete && (
        <div className="animate-mr-fade-in">
          <MainSite onReboot={reboot} />
        </div>
      )}
    </>
  );
}
