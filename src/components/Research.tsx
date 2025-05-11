import React from 'react';
import { FileText, BookOpen, Globe } from 'lucide-react';

const ResearchItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="mb-4 text-blue-900">{icon}</div>
    <h3 className="font-serif text-xl mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Research: React.FC = () => {
  return (
    <section id="research" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-blue-900 mb-4">Research Interests</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            My academic work encompasses several interconnected areas of historical inquiry:
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <ResearchItem
            title="Regional History"
            description="Studying Himalayan and South Asian Histories."
          />
          <ResearchItem
            title="Global History"
            description="Exploring global dimensions and connections between the Himalayas, South Asia and the rest of the world"
          />
          <ResearchItem
            title="Entangled History"
            description="Investigating circulation, networks and interdependencies across borders and continents"
          />
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="font-serif text-2xl text-blue-900 mb-6">Current Project</h3>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h4 className="font-serif text-xl mb-4 text-gray-800">Global Intellectual History from the Margins: The Voyage, Vocation, and Vision of Jaya Prithvi Bahadur Singh</h4>
            <p className="text-gray-600 mb-6">
            In my current research project, I examine the intellectual legacy of Jaya Prithvi Bahadur Singh, a late 19th-century Gorkhā prince who renounced his aristocratic privilege to become a philosopher and peace activist in the early 20th century.
            </p>
            <p className="text-gray-600">
            Through Singh's extraordinary life trajectory, this study reconceptualizes the relationship between Himalayan, South Asian, and global intellectual history, challenging conventional, Western-centric narratives of knowledge production and circulation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;