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
            My academic work encompasses several interconnected areas of historical inquiry, examining how ideas shape social and political developments.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <ResearchItem
            icon={<FileText size={48} />}
            title="Intellectual History"
            description="Studying the evolution of philosophical and political thought in modern Europe, with emphasis on democratic theory and critique."
          />
          <ResearchItem
            icon={<BookOpen size={48} />}
            title="Cultural Movements"
            description="Analyzing the relationship between intellectual currents and cultural expressions, particularly in literature and the arts."
          />
          <ResearchItem
            icon={<Globe size={48} />}
            title="Transnational History"
            description="Investigating knowledge circulation and intellectual networks across European borders during periods of political transformation."
          />
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="font-serif text-2xl text-blue-900 mb-6">Current Project</h3>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h4 className="font-serif text-xl mb-4 text-gray-800">The Transformation of Political Thought in Central Europe, 1848-1918</h4>
            <p className="text-gray-600 mb-6">
              This project examines how revolutionary movements, institutional reforms, and emerging social theories reshaped political discourse in the German-speaking lands during a period of rapid industrialization and nation-building.
            </p>
            <p className="text-gray-600">
              Through archival research in multiple countries and close analysis of published works, I trace the development of key concepts that would later shape European political systems in the 20th century.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;