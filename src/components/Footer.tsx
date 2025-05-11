import React from 'react';
import { Twitter, Linkedin, BookOpen, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center mb-4">
              <BookOpen className="h-6 w-6 mr-2" />
              <span className="font-serif text-xl font-bold text-white">Dr. Stefan Lueder</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
            Assistant Professor | Department of History | South Asia Institute | Heidelberg University
            </p>
            <div className="flex space-x-4">
              <a target="_blank" href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a target="_blank" href="mailto:contact@stefanlueder.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-lg text-white mb-4">Office</h3>
            
            <p className="text-sm text-gray-400">
              Heidelberg University<br />
              South Asia Institute<br />
              Department of History <br />
              Voßstr. 2<br />
              69115 Heidelberg<br />
              Germany
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-gray-500 text-center">
          <p>&copy; {new Date().getFullYear()} Dr. Stefan Lueder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;