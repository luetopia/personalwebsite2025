import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

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
    title: <a href="https://link.springer.com/book/10.1007/978-3-658-44422-8" target="_blank">Staatsbildung und Legitimation im Himalaya: Eine Verflechtungsgeschichte des Gorkhā-Staates im überlangen 19. Jahrhundert</a>,
    publisher: "Springer",
    year: 2024,
    type: 'book'
  },
  {
    id: 2,
    title: <a href="https://www.hsozkult.de/publicationreview/id/reb-133408" target="_blank">Review of: Bajracharya, Manik (Hrsg.): Slavery and Unfree Labour in Nepal. Documents from the 18th to Early 20th Century</a>,
    journal: "H-Soz-Kult",
    year: 2023,
    type: 'article'
  },
  {
    id: 3,
    title: <a href="https://journals.ed.ac.uk/himalaya/article/view/8857" target="_blank">Review of Hindu Kingship Rituals: Power Relation and Historical Revolution by Nawaraj Chaulagain</a>,
    journal: "HIMALAYA - The Journal of the Association for Nepal and Himalayan Studies, 42(1), 169-172.",
    year: 2023,
    type: 'article',
  },
  {
    id: 4,
    title: <a href="https://journals.ed.ac.uk/himalaya/article/view/6591" target="_blank">Of Education, Humanism and Civilizational Progress: An Explorative Study of Jaya Prithvi Bahadur Singh s Life and Work from the Perspective of Global Intellectual History</a>,
    journal: "HIMALAYA - The Journal of the Association for Nepal and Himalayan Studies, 40(1), 59-78",
    year: 2021,
    type: 'article'
  },
  {
    id: 5,
    title: <a href="https://www.bdwi.de/forum/archiv/archiv/11020962.html" target="_blank">»Globaler Süden« in der Wissenschaft</a>,
    journal: "Forum Wissenschaft 38 (3), p. 4-7",
    year: 2021,
    type: 'article'
  },
  {
    id: 6,
    title: <a href="https://edoc.hu-berlin.de/server/api/core/bitstreams/0731d0cd-46eb-438a-975e-9a8fdf1d6bb1/content" target="_blank">Grenzen wissenschaftlicher Erkenntnis – Wissensproduktion und Wissensdiskurse um Ethnizität in Nepal</a>,
    journal: "Südasien – Chronik / South Asia – Chronicle 3, p. 242 – 270",
    year: 2013,
    type: 'article'
  }
  
];

const PublicationItem: React.FC<{ publication: Publication }> = ({ publication }) => {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px'
  });

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
    <div 
      ref={targetRef}
      className={`mb-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}
    >
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