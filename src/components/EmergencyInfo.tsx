import React from 'react';
import { AlertCircle, AlertTriangle, Phone } from 'lucide-react';

const EmergencyInfo: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 mt-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">How The Emergency Alexa Skill Works</h2>
      
      <div className="space-y-6">
        <div className="border-l-4 border-blue-600 pl-4">
          <p className="text-gray-600">
            In a real implementation, this Alexa skill would use voice recognition to identify emergency situations
            and automatically contact appropriate first responders based on your location.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <EmergencyCard 
            title="Fire Emergency" 
            icon={<AlertCircle className="w-12 h-12 text-red-500" />} 
            color="bg-red-50"
            textColor="text-red-700"
            description="When you yell 'Fire!' or related terms, Alexa identifies the emergency and contacts the fire department."
          />
          
          <EmergencyCard 
            title="Medical Emergency" 
            icon={<Phone className="w-12 h-12 text-green-500" />} 
            color="bg-green-50"
            textColor="text-green-700"
            description="When you request medical help, Alexa contacts emergency medical services with your location."
          />
          
          <EmergencyCard 
            title="Police Emergency" 
            icon={<AlertTriangle className="w-12 h-12 text-blue-500" />} 
            color="bg-blue-50"
            textColor="text-blue-700"
            description="For security emergencies, Alexa can alert police services and provide them with your location information."
          />
        </div>
        
        <div className="bg-amber-50 rounded-lg p-4 mt-6">
          <h3 className="font-semibold text-amber-700 mb-2">Safety Confirmation</h3>
          <p className="text-amber-800">
            For ambiguous situations, Alexa will ask for confirmation to prevent false alarms.
            If there's no response to a confirmation request, Alexa will err on the side of caution
            and dispatch emergency services.
          </p>
        </div>
        
        <div className="border-t border-gray-200 pt-6 mt-6">
          <h3 className="font-semibold text-gray-700 mb-2">Important Notes</h3>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>This is a demonstration only. In a real implementation, the skill would require integration with emergency services.</li>
            <li>Location services would use your registered address or device location.</li>
            <li>Voice recognition would be trained to identify distress signals and emergency keywords.</li>
            <li>False alarm prevention mechanisms would be incorporated while prioritizing safety.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

interface EmergencyCardProps {
  title: string;
  icon: React.ReactNode;
  color: string;
  textColor: string;
  description: string;
}

const EmergencyCard: React.FC<EmergencyCardProps> = ({ 
  title, icon, color, textColor, description 
}) => {
  return (
    <div className={`${color} rounded-lg p-6 flex flex-col items-center text-center`}>
      <div className="mb-4">
        {icon}
      </div>
      <h3 className={`${textColor} font-semibold text-lg mb-2`}>{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default EmergencyInfo;