'use client';

import { useEffect } from 'react';

export default function ScrollController() {
  useEffect(() => {
    // Parallax dots
    const dots = document.getElementById('parallax-dots');
    const handleScroll = () => {
      if (dots) {
        dots.style.transform = `translateY(${window.scrollY * 0.25}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Scroll reveal observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el));

    // Spotlight mouse tracking
    const setupSpotlight = () => {
      document.querySelectorAll('.spotlight-group').forEach((group) => {
        group.addEventListener('mousemove', (e: Event) => {
          const mouseEvent = e as MouseEvent;
          group.querySelectorAll('.spotlight-card').forEach((card) => {
            const rect = (card as HTMLElement).getBoundingClientRect();
            const x = mouseEvent.clientX - rect.left;
            const y = mouseEvent.clientY - rect.top;
            (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
            (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
          });
        });
      });
    };

    setupSpotlight();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return null;
}