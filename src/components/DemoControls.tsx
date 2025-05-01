import React from 'react';
import { useEmergencyState } from '../context/EmergencyContext';

const DemoControls: React.FC = () => {
  const { simulateEmergency, simulateUnclearEmergency } = useEmergencyState();

  return (
    <div className="mt-12 bg-gray-50 rounded-lg p-4 max-w-md mx-auto">
      <h3 className="text-lg font-medium text-gray-700 mb-4">Simulation Controls</h3>
      
      <div className="space-y-4">
        <p className="text-sm text-gray-500">
          Use these buttons to simulate different voice inputs without actually speaking:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <SimulationButton 
            onClick={() => simulateEmergency('fire')}
            label="Simulate: 'Fire!'"
            color="bg-red-100 hover:bg-red-200 text-red-700"
          />
          
          <SimulationButton 
            onClick={() => simulateEmergency('medical')}
            label="Simulate: 'I need an ambulance!'"
            color="bg-green-100 hover:bg-green-200 text-green-700"
          />
          
          <SimulationButton 
            onClick={() => simulateEmergency('police')}
            label="Simulate: 'Help! Intruder!'"
            color="bg-blue-100 hover:bg-blue-200 text-blue-700"
          />
          
          <SimulationButton 
            onClick={simulateUnclearEmergency}
            label="Simulate: Unclear Emergency"
            color="bg-amber-100 hover:bg-amber-200 text-amber-700"
          />
        </div>
        
        <p className="text-xs text-gray-400 italic mt-2">
          Note: These controls simulate what would happen in a real Alexa skill when specific phrases are detected.
        </p>
      </div>
    </div>
  );
};

interface SimulationButtonProps {
  onClick: () => void;
  label: string;
  color: string;
}

const SimulationButton: React.FC<SimulationButtonProps> = ({ onClick, label, color }) => {
  return (
    <button 
      onClick={onClick}
      className={`py-2 px-4 rounded-md text-sm font-medium transition-colors ${color}`}
    >
      {label}
    </button>
  );
};

export default DemoControls;