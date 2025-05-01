import React from 'react';
import AlexaDevice from './components/AlexaDevice';
import EmergencyInfo from './components/EmergencyInfo';
import DemoControls from './components/DemoControls';
import { EmergencyProvider } from './context/EmergencyContext';

function App() {
  return (
    <EmergencyProvider>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            First Responder Alexa Skill
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A voice-activated emergency response system that detects emergencies
            and automatically dispatches appropriate first responders
          </p>
        </header>
        
        <main className="max-w-4xl mx-auto">
          <section className="mb-16">
            <AlexaDevice />
          </section>
          
          <section>
            <DemoControls />
          </section>
          
          <section>
            <EmergencyInfo />
          </section>
        </main>
        
        <footer className="text-center text-gray-500 text-sm mt-16">
          <p>This is a conceptual demonstration only. In a real implementation, this would be developed as an Alexa Skill.</p>
        </footer>
      </div>
    </EmergencyProvider>
  );
}

export default App;