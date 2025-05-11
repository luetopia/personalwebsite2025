import React from 'react';
import { Award, Book, Users } from 'lucide-react';

interface Course {
  id: number;
  code: string;
  title: string;
  description: string;
  level: 'Undergraduate' | 'Graduate';
}

const courses: Course[] = [
  {
    id: 1,
    code: "HIST 3250",
    title: "Modern European Intellectual History",
    description: "Survey of major intellectual movements in Europe from the Enlightenment to the present, examining their historical context and lasting influence.",
    level: "Undergraduate"
  },
  {
    id: 2,
    code: "HIST 4150",
    title: "German History, 1848-1945",
    description: "Political, social, and cultural developments in the German-speaking lands from the revolutions of 1848 through the end of World War II.",
    level: "Undergraduate"
  },
  {
    id: 3,
    code: "HIST 5530",
    title: "Seminar: Democracy and Its Critics",
    description: "Advanced analysis of democratic theory and practice in modern Europe, with emphasis on challenges to democratic institutions and ideals.",
    level: "Graduate"
  },
  {
    id: 4,
    code: "HIST 5620",
    title: "Research Methods in Intellectual History",
    description: "Discussion of methodological approaches and archival sources for the study of intellectual history, with practical research exercises.",
    level: "Graduate"
  }
];

const CourseItem: React.FC<{ course: Course }> = ({ course }) => {
  return (
    <div className="mb-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start">
        <div className="mr-4">
          {course.level === "Undergraduate" ? (
            <Book className="h-6 w-6 text-blue-700" />
          ) : (
            <Award className="h-6 w-6 text-blue-900" />
          )}
        </div>
        <div>
          <h3 className="font-serif text-xl text-gray-800 mb-2">
            {course.code}: {course.title}
          </h3>
          <p className="text-sm text-blue-800 mb-2">{course.level} Level</p>
          <p className="text-gray-600">{course.description}</p>
        </div>
      </div>
    </div>
  );
};

const Teaching: React.FC = () => {
  return (
    <section id="teaching" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-blue-900 mb-4">Teaching</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            I regularly teach courses in European history and historical methods at both undergraduate and graduate levels.
          </p>
        </div>
        
        <div className="flex items-center justify-center mb-12">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-5">
            <Users className="h-8 w-8 text-blue-800" />
          </div>
          <div className="max-w-lg">
            <h3 className="font-serif text-2xl text-blue-900 mb-2">Teaching Philosophy</h3>
            <p className="text-gray-600">
              My approach to teaching history emphasizes critical engagement with primary sources, 
              contextual understanding, and connecting historical developments to contemporary issues.
            </p>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <h3 className="font-serif text-2xl text-blue-900 mb-6 text-center">Current Courses</h3>
          {courses.map(course => (
            <CourseItem key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teaching;