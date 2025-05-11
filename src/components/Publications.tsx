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
    title: "Staatsbildung und Legitimation im Himalaya: Eine Verflechtungsgeschichte des Gorkhā-Staates im überlangen 19. Jahrhundert",
    publisher: "Springer",
    year: 2024,
    type: 'book'
  },
  {
    id: 2,
    title: "Review of: Bajracharya, Manik (Hrsg.): Slavery and Unfree Labour in Nepal. Documents from the 18th to Early 20th Century.",
    journal: "H-Soz-Kult",
    year: 2023,
    type: 'article'
  },
  {
    id: 3,
    title: "Review of Hindu Kingship Rituals: Power Relation and Historical Revolution by Nawaraj Chaulagain.",
    journal: "HIMALAYA - The Journal of the Association for Nepal and Himalayan Studies, 42(1), 169-172.",
    year: 2023,
    type: 'article',
  },
  {
    id: 4,
    title: "Of Education, Humanism and Civilizational Progress: An Explorative Study of Jaya Prithvi Bahadur Singh s Life and Work from the Perspective of Global Intellectual History",
    journal: "HIMALAYA - The Journal of the Association for Nepal and Himalayan Studies, 40(1), 59-78",
    year: 2021,
    type: 'article'
  },
  {
    id: 5,
    title: "»Globaler Süden« in der Wissenschaft",
    journal: "Forum Wissenschaft 38 (3), p. 4-7",
    year: 2021,
    type: 'article'
  },
  {
    id: 6,
    title: "»Grenzen wissenschaftlicher Erkenntnis – Wissensproduktion und Wissensdiskurse um Ethnizität in Nepal",
    journal: "Südasien – Chronik / South Asia – Chronicle 3, p. 242 – 270",
    year: 2013,
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