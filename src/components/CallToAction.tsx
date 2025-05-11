import React from 'react';
import { Mail, Calendar, FileText } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Get in Touch</h2>
          <p className="text-lg mb-10 text-blue-100">
            I welcome inquiries about my research, potential collaborations, speaking engagements, or academic consultations.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="bg-blue-800 p-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex flex-col items-center">
              <Mail className="h-10 w-10 mb-4" />
              <h3 className="font-serif text-xl mb-2">Email Me</h3>
              <p className="text-blue-200">For research inquiries and general correspondence</p>
            </div>
            
            <div className="bg-blue-800 p-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex flex-col items-center">
              <Calendar className="h-10 w-10 mb-4" />
              <h3 className="font-serif text-xl mb-2">Schedule a Meeting</h3>
              <p className="text-blue-200">For students, colleagues, and collaboration discussions</p>
            </div>
            
            <div className="bg-blue-800 p-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex flex-col items-center">
              <FileText className="h-10 w-10 mb-4" />
              <h3 className="font-serif text-xl mb-2">Request Materials</h3>
              <p className="text-blue-200">For copies of publications or course syllabi</p>
            </div>
          </div>
          
          <a 
            href="mailto:contact@stefanlueder.edu" 
            className="inline-block px-8 py-4 bg-white text-blue-900 rounded-md font-medium hover:bg-blue-100 transition-colors duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;