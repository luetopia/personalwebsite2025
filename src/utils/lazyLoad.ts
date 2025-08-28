// Intersection Observer for lazy loading
export const createLazyLoadObserver = (callback: (entries: IntersectionObserverEntry[]) => void) => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }

  return new IntersectionObserver(callback, {
    rootMargin: '50px 0px',
    threshold: 0.01
  });
};

// Preload critical resources
export const preloadCriticalResources = () => {
  // Preload hero image
  const heroImageLink = document.createElement('link');
  heroImageLink.rel = 'preload';
  heroImageLink.as = 'image';
  heroImageLink.href = '/Portrait Stefan Lueder_website.webp';
  heroImageLink.fetchPriority = 'high';
  document.head.appendChild(heroImageLink);
};

// Font loading optimization
export const optimizeFontLoading = () => {
  // Preload critical fonts
  const fontLinks = [
    { href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600&display=swap', family: 'Noto Sans' },
    { href: 'https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;600;700&display=swap', family: 'Noto Serif' }
  ];

  fontLinks.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = font.href;
    link.onload = () => {
      link.rel = 'stylesheet';
    };
    document.head.appendChild(link);
  });
};