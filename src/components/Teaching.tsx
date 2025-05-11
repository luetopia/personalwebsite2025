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
    code: "SAI-S-4007",
    title: "	Die unsichtbaren Fäden der Macht - Legitimation in der Geschichte Südasiens",
    description: "Discover how South Asian elites have established and justified their power from early kingdoms to the present. This course equips students with critical tools to analyze historical and contemporary strategies of legitimation-deepening their understanding of both South Asian history and today’s global political challenges.",
    level: "undergraduate and graduate"
  },
  {
    id: 2,
    code: "SAI-Ü-4004",
    title: "Fremde Welten, deutsche Blicke - Reiseberichte im langen 19. Jahrhundert",
    description: "Explore the “long 19th century” through the eyes of German-speaking travelers who visited South Asia and the Himalayas and left behind fascinating travel reports that were also shaped by colonial thought patterns. In this course, you will critically analyze original sources, learn basic methods of source criticism and gain insights into the complex relationships between Europe and South Asia.",
    level: "undergraduate and graduate"
  },
  
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
            I regularly teach courses in South Asian and Himalayan History at both undergraduate and graduate levels.
          </p>
        </div>
        
        <div className="flex items-center justify-center mb-12">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-5">
            <Users className="h-8 w-8 text-blue-800" />
          </div>
          <div className="max-w-lg">
            <h3 className="font-serif text-2xl text-blue-900 mb-2">Teaching Philosophy</h3>
            <p className="text-gray-600">
            My teaching philosophy emphasizes active learning, critical thinking, and inclusive participation. Drawing on my special training in “Inquiry-Based Learning,” I am particularly committed to creating a learning environment where students feel empowered to voice their ideas and engage in thoughtful discussions by engaging in their own small-scale research projects.
            </p>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <h3 className="font-serif text-2xl text-blue-900 mb-6 text-center">Current Courses - Summer semester 2025</h3>
          {courses.map(course => (
            <CourseItem key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teaching;