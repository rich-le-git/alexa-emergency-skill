import React, { useState, useEffect } from 'react';
import { Mic, AlertCircle, X, MapPin, Phone, AlertTriangle } from 'lucide-react';
import VoiceWaves from './VoiceWaves';
import { useEmergencyState } from '../context/EmergencyContext';

const AlexaDevice: React.FC = () => {
  const { 
    isListening, 
    emergencyType, 
    location, 
    isProcessing, 
    isConfirming, 
    startListening, 
    stopListening, 
    cancelEmergency,
    confirmEmergency,
    denyEmergency
  } = useEmergencyState();

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div 
        className={`relative w-64 h-64 rounded-full flex items-center justify-center mb-8 transition-all duration-500
          ${isListening ? 'scale-110' : 'scale-100'}
          ${emergencyType === 'fire' ? 'bg-red-100' : ''}
          ${emergencyType === 'medical' ? 'bg-green-100' : ''}
          ${emergencyType === 'police' ? 'bg-blue-100' : ''}
          ${!emergencyType ? 'bg-gray-100' : ''}
          ${isProcessing ? 'animate-pulse' : ''}
        `}
      >
        <div 
          className={`absolute w-56 h-56 rounded-full flex items-center justify-center
            ${emergencyType === 'fire' ? 'bg-red-200' : ''}
            ${emergencyType === 'medical' ? 'bg-green-200' : ''}
            ${emergencyType === 'police' ? 'bg-blue-200' : ''}
            ${!emergencyType ? 'bg-gray-200' : ''}
          `}
        >
          <div 
            className={`w-48 h-48 rounded-full flex items-center justify-center shadow-lg
              ${emergencyType === 'fire' ? 'bg-red-500' : ''}
              ${emergencyType === 'medical' ? 'bg-green-500' : ''}
              ${emergencyType === 'police' ? 'bg-blue-500' : ''}
              ${!emergencyType ? 'bg-blue-900' : ''}
              transition-all duration-300
            `}
          >
            {isListening && !emergencyType && (
              <VoiceWaves />
            )}
            
            {isListening && !emergencyType && (
              <Mic 
                className="text-white w-16 h-16 absolute" 
                strokeWidth={1.5} 
              />
            )}
            
            {emergencyType && (
              <div className="flex flex-col items-center justify-center text-white">
                {emergencyType === 'fire' && <AlertCircle className="w-16 h-16 mb-2" strokeWidth={1.5} />}
                {emergencyType === 'medical' && <Phone className="w-16 h-16 mb-2" strokeWidth={1.5} />}
                {emergencyType === 'police' && <AlertTriangle className="w-16 h-16 mb-2" strokeWidth={1.5} />}
                <span className="text-sm font-semibold uppercase tracking-wider">
                  {emergencyType}
                </span>
              </div>
            )}
          </div>
        </div>
        
        {/* Ring effect for emergency */}
        {emergencyType && (
          <div 
            className={`absolute w-64 h-64 rounded-full border-4 
              ${emergencyType === 'fire' ? 'border-red-500' : ''}
              ${emergencyType === 'medical' ? 'border-green-500' : ''}
              ${emergencyType === 'police' ? 'border-blue-500' : ''}
              animate-ping opacity-50
            `}
          ></div>
        )}
      </div>
      
      {/* Location indicator */}
      {location && emergencyType && (
        <div className="flex items-center mb-6 text-gray-700">
          <MapPin className="w-5 h-5 mr-2" />
          <span className="text-sm">{location}</span>
        </div>
      )}
      
      {/* Status text */}
      <div className="text-center mb-8">
        {!isListening && !emergencyType && (
          <p className="text-lg font-medium text-gray-700">
            Press the button to activate Alexa
          </p>
        )}
        
        {isListening && !emergencyType && (
          <p className="text-lg font-medium text-blue-700">
            Listening... Say "Fire!", "Help!", or describe your emergency
          </p>
        )}
        
        {isConfirming && (
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold text-amber-600 mb-4">
              Is this a real emergency?
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={confirmEmergency}
                className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
              >
                Yes, it's an emergency
              </button>
              <button 
                onClick={denyEmergency}
                className="px-6 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition"
              >
                No, cancel
              </button>
            </div>
          </div>
        )}
        
        {emergencyType && !isConfirming && (
          <div className="flex flex-col items-center">
            <p className={`text-lg font-bold mb-2
              ${emergencyType === 'fire' ? 'text-red-600' : ''}
              ${emergencyType === 'medical' ? 'text-green-600' : ''}
              ${emergencyType === 'police' ? 'text-blue-600' : ''}
            `}>
              {emergencyType === 'fire' && 'Fire Department Dispatched'}
              {emergencyType === 'medical' && 'Medical Services Dispatched'}
              {emergencyType === 'police' && 'Police Services Dispatched'}
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Help is on the way. Stay on the line.
            </p>
            <button 
              onClick={cancelEmergency}
              className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition"
            >
              <X className="w-4 h-4 mr-2" />
              Cancel Emergency
            </button>
          </div>
        )}
      </div>
      
      {/* Voice activation button */}
      {!isListening && !emergencyType && (
        <button 
          onClick={startListening}
          className="bg-blue-900 text-white rounded-full p-6 hover:bg-blue-800 transition-all duration-300 shadow-lg"
        >
          <Mic className="w-8 h-8" />
        </button>
      )}
      
      {/* Stop listening button */}
      {isListening && !emergencyType && (
        <button 
          onClick={stopListening}
          className="bg-red-500 text-white rounded-full p-6 hover:bg-red-600 transition-all duration-300 shadow-lg"
        >
          <X className="w-8 h-8" />
        </button>
      )}
    </div>
  );
};

export default AlexaDevice;