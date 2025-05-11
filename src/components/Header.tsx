import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-blue-900 mr-2" />
            <span className="font-serif text-xl font-bold text-blue-900">Dr. Stefan Lueder</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-900 transition-colors">About</a>
            <a href="#research" className="text-gray-700 hover:text-blue-900 transition-colors">Research</a>
            <a href="#publications" className="text-gray-700 hover:text-blue-900 transition-colors">Publications</a>
            <a href="#teaching" className="text-gray-700 hover:text-blue-900 transition-colors">Teaching</a>
            <a href="#qualifications" className="text-gray-700 hover:text-blue-900 transition-colors">Qualifications</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-900 transition-colors">Contact</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 py-3 space-y-3 bg-white shadow-lg">
            <a 
              href="#about" 
              className="block text-gray-700 hover:text-blue-900"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a 
              href="#research" 
              className="block text-gray-700 hover:text-blue-900"
              onClick={() => setIsOpen(false)}
            >
              Research
            </a>
            <a 
              href="#publications" 
              className="block text-gray-700 hover:text-blue-900"
              onClick={() => setIsOpen(false)}
            >
              Publications
            </a>
            <a 
              href="#teaching" 
              className="block text-gray-700 hover:text-blue-900"
              onClick={() => setIsOpen(false)}
            >
              Teaching
            </a>
            <a 
              href="#qualifications" 
              className="block text-gray-700 hover:text-blue-900"
              onClick={() => setIsOpen(false)}
            >
              Qualifications
            </a>
            <a 
              href="#contact" 
              className="block text-gray-700 hover:text-blue-900"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;