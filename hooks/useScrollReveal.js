'use client';

import { useEffect } from 'react';

// Adds `.visible` to any `.reveal`/`.reveal-x` element once it scrolls into view.
export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal, .reveal-x').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
