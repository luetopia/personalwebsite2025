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
              Historian of Modern European Intellectual History
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@stefanlueder.edu" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-lg text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#research" className="hover:text-white transition-colors">Research</a></li>
              <li><a href="#publications" className="hover:text-white transition-colors">Publications</a></li>
              <li><a href="#teaching" className="hover:text-white transition-colors">Teaching</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg text-white mb-4">Office Hours</h3>
            <p className="mb-2">Monday & Wednesday: 2:00 PM - 4:00 PM</p>
            <p className="mb-2">Or by appointment</p>
            <p className="text-sm text-gray-400">
              History Department<br />
              University Hall, Room 305<br />
              123 University Drive
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