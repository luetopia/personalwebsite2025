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
          
          <a 
            target="_blank" href="mailto:contact@stefanlueder.com" 
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