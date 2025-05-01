import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type EmergencyType = 'fire' | 'medical' | 'police' | null;

interface EmergencyContextType {
  isListening: boolean;
  emergencyType: EmergencyType;
  location: string | null;
  isProcessing: boolean;
  isConfirming: boolean;
  startListening: () => void;
  stopListening: () => void;
  cancelEmergency: () => void;
  confirmEmergency: () => void;
  denyEmergency: () => void;
  simulateEmergency: (type: EmergencyType) => void;
  simulateUnclearEmergency: () => void;
}

const EmergencyContext = createContext<EmergencyContextType | undefined>(undefined);

export const EmergencyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isListening, setIsListening] = useState(false);
  const [emergencyType, setEmergencyType] = useState<EmergencyType>(null);
  const [location, setLocation] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const [tempEmergencyType, setTempEmergencyType] = useState<EmergencyType>(null);

  // Simulated location fetch
  useEffect(() => {
    if (emergencyType) {
      setTimeout(() => {
        setLocation("123 Main Street, Anytown, USA");
      }, 800);
    } else {
      setLocation(null);
    }
  }, [emergencyType]);

  const startListening = () => {
    setIsListening(true);
  };

  const stopListening = () => {
    setIsListening(false);
  };

  const cancelEmergency = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setEmergencyType(null);
      setIsProcessing(false);
      setIsConfirming(false);
    }, 1000);
  };

  const confirmEmergency = () => {
    setIsConfirming(false);
    setEmergencyType(tempEmergencyType);
    setTempEmergencyType(null);
  };

  const denyEmergency = () => {
    setIsConfirming(false);
    setTempEmergencyType(null);
  };

  const simulateEmergency = (type: EmergencyType) => {
    if (!emergencyType && !isConfirming) {
      setIsListening(true);
      
      // Simulate voice processing
      setTimeout(() => {
        setEmergencyType(type);
        setIsListening(false);
      }, 1500);
    }
  };

  const simulateUnclearEmergency = () => {
    if (!emergencyType && !isConfirming) {
      setIsListening(true);
      
      // Simulate voice processing then confirming
      setTimeout(() => {
        setIsListening(false);
        setTempEmergencyType('police'); // Default to police for unclear emergency
        setIsConfirming(true);
      }, 1500);
    }
  };

  return (
    <EmergencyContext.Provider
      value={{
        isListening,
        emergencyType,
        location,
        isProcessing,
        isConfirming,
        startListening,
        stopListening,
        cancelEmergency,
        confirmEmergency,
        denyEmergency,
        simulateEmergency,
        simulateUnclearEmergency
      }}
    >
      {children}
    </EmergencyContext.Provider>
  );
};

export const useEmergencyState = () => {
  const context = useContext(EmergencyContext);
  if (context === undefined) {
    throw new Error('useEmergencyState must be used within an EmergencyProvider');
  }
  return context;
};