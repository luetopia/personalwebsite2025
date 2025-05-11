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
    year: "2015",
    title: "Ph.D. in Modern European History",
    institution: "University of Oxford",
    description: "Dissertation: 'Democratic Thought and Political Culture in Germany, 1848-1918'"
  },
  {
    id: 2,
    year: "2011",
    title: "M.Phil. in Modern European History",
    institution: "University of Cambridge",
    description: "Thesis on intellectual networks in post-war Europe"
  },
  {
    id: 3,
    year: "2009",
    title: "B.A. in History and Political Science",
    institution: "Ludwig Maximilian University of Munich",
    description: "Graduated summa cum laude"
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
            Academic credentials and professional achievements in the field of European history.
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
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-blue-900 mr-3" />
                <h3 className="font-serif text-2xl text-blue-900">Honors & Awards</h3>
              </div>
              <div className="space-y-4 mb-12">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-serif text-lg text-gray-800 mb-2">Fritz Stern Dissertation Prize</h4>
                  <p className="text-gray-600">German Historical Institute, 2016</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-serif text-lg text-gray-800 mb-2">DAAD Research Fellowship</h4>
                  <p className="text-gray-600">German Academic Exchange Service, 2013-2014</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <Briefcase className="h-8 w-8 text-blue-900 mr-3" />
                <h3 className="font-serif text-2xl text-blue-900">Professional Experience</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-serif text-lg text-gray-800 mb-2">Associate Professor of History</h4>
                  <p className="text-gray-600">Current Position, Since 2019</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-serif text-lg text-gray-800 mb-2">Assistant Professor of History</h4>
                  <p className="text-gray-600">2015-2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block px-6 py-3 text-blue-900 border border-blue-900 rounded-md hover:bg-blue-50 transition-colors duration-300"
          >
            Request Full CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;