import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="about" 
      className="pt-28 pb-20 md:pt-32 md:pb-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl flex-shrink-0 border-4 border-white">
              <img 
                src="Portrait Stefan Lueder_website.webp" 
                alt="Dr. Stefan Lueder"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="text-center md:text-left flex-1">
              <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-blue-900 mb-6">
                Dr. Stefan Lueder
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 mb-8">
              Assistant Professor | Department of History | South Asia Institute | Heidelberg University
              </h2>
              <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                I am a historian specializing in the globally entangeled histories of the Himalaya and South Asia in the long 19th century. 
                My research bridges regional and global history, informed by political sciences and sociology, as well as media and cultural studies.
              </p> 
             
              <div className="flex justify-center md:justify-start space-x-4">
                <a 
                  href="#research" 
                  className="px-6 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors duration-300"
                >
                  My Research
                </a>
                <a 
                  href="#contact" 
                  className="px-6 py-3 border border-blue-900 text-blue-900 rounded-md hover:bg-blue-50 transition-colors duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;