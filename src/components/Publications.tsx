import React from 'react';

interface Publication {
  id: number;
  title: string;
  journal?: string;
  publisher?: string;
  year: number;
  coauthors?: string;
  type: 'book' | 'article' | 'chapter';
  url?: string;
}

const publications: Publication[] = [
  {
    id: 1,
    title: "Intellectual Networks and Democratic Theory: Transnational Exchange in Post-War Europe",
    publisher: "Oxford University Press",
    year: 2023,
    type: 'book'
  },
  {
    id: 2,
    title: "Rethinking the Public Sphere: German Intellectuals and Civil Society, 1871-1918",
    journal: "Journal of Modern European History",
    year: 2022,
    type: 'article'
  },
  {
    id: 3,
    title: "Crisis of Liberalism? Political Thought in the Weimar Republic",
    journal: "History of Political Thought",
    year: 2021,
    type: 'article',
    coauthors: "with Dr. Maria Schmidt"
  },
  {
    id: 4,
    title: "The Legacy of 1848: Democratic Movements and Constitutional Reform",
    publisher: "Cambridge University Press",
    year: 2020,
    type: 'chapter'
  },
  {
    id: 5,
    title: "Theorizing Democracy: German Political Thought in Comparative Perspective",
    journal: "German Studies Review",
    year: 2019,
    type: 'article'
  }
];

const PublicationItem: React.FC<{ publication: Publication }> = ({ publication }) => {
  const renderCitation = () => {
    const { title, journal, publisher, year, coauthors, type } = publication;
    
    if (type === 'book') {
      return (
        <p className="text-gray-700">
          <span className="italic">{title}</span>. {publisher}, {year}.
          {coauthors && <span> {coauthors}.</span>}
        </p>
      );
    } else if (type === 'article') {
      return (
        <p className="text-gray-700">
          "{title}." <span className="italic">{journal}</span>, {year}.
          {coauthors && <span> {coauthors}.</span>}
        </p>
      );
    } else {
      return (
        <p className="text-gray-700">
          "{title}." In <span className="italic">{publisher}</span>, {year}.
          {coauthors && <span> {coauthors}.</span>}
        </p>
      );
    }
  };

  return (
    <div className="mb-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      {renderCitation()}
    </div>
  );
};

const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-blue-900 mb-4">Publications</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            A selection of my recent academic publications in the field of European intellectual history.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {publications.map(publication => (
            <PublicationItem key={publication.id} publication={publication} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;