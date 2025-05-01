import React from 'react';

const VoiceWaves: React.FC = () => {
  return (
    <div className="voice-waves flex items-center justify-center space-x-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <div 
          key={index}
          className="bg-white w-1.5 rounded-full"
          style={{
            height: `${Math.random() * 30 + 10}px`,
            animation: `wave 0.5s infinite alternate ${index * 0.1}s`
          }}
        ></div>
      ))}
      <style jsx>{`
        @keyframes wave {
          0% {
            height: 10px;
          }
          100% {
            height: 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default VoiceWaves;