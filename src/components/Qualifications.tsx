import React from 'react';
import { GraduationCap, Award, Briefcase } from 'lucide-react';

interface Achievement {
  id: number;
  year: string;
  title: string;
  institution: string;
  description: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    year: "2024",
    title: "Ph.D. in South Asian Studies",
    institution: "Humboldt-University Berlin, Institute for Asian- and African Studies",
    description: "summe cum laude"
  },
  {
    id: 2,
    year: "2015",
    title: "M.A. Modern South and Southeast Asian Studies",
    institution: "Humboldt-University Berlin, Institute for Asian- and African Studies"},
  {
    id: 3,
    year: "2012",
    title: "B.A. Area Studies of Asia and Africa",
    institution: "Humboldt-University Berlin, Institute for Asian- and African Studies",
  }
];

const AchievementItem: React.FC<{ achievement: Achievement }> = ({ achievement }) => {
  return (
    <div className="mb-8 relative pl-8 border-l-2 border-blue-200">
      <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
      </div>
      <div className="text-sm text-blue-900 font-medium mb-1">{achievement.year}</div>
      <h3 className="font-serif text-xl text-gray-800 mb-1">{achievement.title}</h3>
      <p className="text-blue-800 mb-1">{achievement.institution}</p>
      <p className="text-gray-600">{achievement.description}</p>
    </div>
  );
};

const Qualifications: React.FC = () => {
  return (
    <section id="qualifications" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-blue-900 mb-4">Qualifications & Experience</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Academic credentials and professional achievements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <div className="flex items-center mb-6">
              <GraduationCap className="h-8 w-8 text-blue-900 mr-3" />
              <h3 className="font-serif text-2xl text-blue-900">Education</h3>
            </div>
            <div className="space-y-6">
              {achievements.map(achievement => (
                <AchievementItem key={achievement.id} achievement={achievement} />
              ))}
            </div>
          </div>

          <div>
            <div>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <Briefcase className="h-8 w-8 text-blue-900 mr-3" />
                <h3 className="font-serif text-2xl text-blue-900">Professional Experience</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-serif text-lg text-gray-800 mb-2">Assistant Professor, Department of History, South Asia Institute, Heidelberg University</h4>
                  <p className="text-gray-600">Current Position, Since April 2025</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-serif text-lg text-gray-800 mb-2">Science Communications Specialist</h4>
                  <p className="text-gray-600">Research Campus Central Hessen, January 2023 - March 2025</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-serif text-lg text-gray-800 mb-2">Managing Editor HIMALAYA</h4>
                  <p className="text-gray-600">Association for Nepal and Himalayan Studies, 2021 - 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block px-6 py-3 text-blue-900 border border-blue-900 rounded-md hover:bg-blue-50 transition-colors duration-300"
          >
            Request Full CV
          </a>
        </div>
      </div>
      </div>
      <div className="text-center mb-16">
         
          <p className="max-w-3xl mx-auto text-gray-600">
          </p>
        </div>


        <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-blue-900 mr-3" />
                <h3 className="font-serif text-2xl text-blue-900">Honors & Awards</h3>
              </div>
              <div className="space-y-4 mb-12">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-serif text-lg text-gray-800 mb-2">PhD Scholarship, 2017-2021</h4>
                  <p className="text-gray-600">Studienstiftung des deutschen Volkes, </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-serif text-lg text-gray-800 mb-2">Dor Bahadur Bista Award 2019 </h4>
                  <p className="text-gray-600">Association for Nepal and Himalayan Studies</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-serif text-lg text-gray-800 mb-2">ERASMUS Scholarship, 2013-2014 </h4>
                  <p className="text-gray-600">Studies abroad at University of Vienna, Austria</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-serif text-lg text-gray-800 mb-2">DAAD Scholarship, 2011-2012 </h4>
                  <p className="text-gray-600">Studies abroad at Kathmandu University, Nepal</p>
                </div>
              </div>
        
        
    </section>

  );
};

export default Qualifications;