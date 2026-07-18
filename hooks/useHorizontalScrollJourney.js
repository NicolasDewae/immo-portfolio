'use client';

import { useEffect, useRef } from 'react';

// Horizontal scroll journey: vertical wheel/trackpad input drives a
// translateX on the track, exactly like the old FullPageImg gallery did
// for a single section — generalized here to the whole page.
export function useHorizontalScrollJourney(mobileBreakpoint) {
  const stageRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    const track = trackRef.current;
    if (!stage || !track) return;

    const isDesktop = () => window.innerWidth > mobileBreakpoint;

    const setHeight = () => {
      if (!isDesktop()) {
        stage.style.height = 'auto';
        track.style.transform = 'none';
        return;
      }
      const extra = track.scrollWidth - window.innerWidth;
      stage.style.height = `${extra + window.innerHeight}px`;
    };

    const handleScroll = () => {
      if (!isDesktop()) return;
      const stageTop = stage.getBoundingClientRect().top + window.scrollY;
      const start = stageTop;
      const end = stageTop + stage.offsetHeight - window.innerHeight;
      const scrollY = window.scrollY;
      const max = track.scrollWidth - window.innerWidth;

      if (scrollY < start) {
        track.style.transform = 'translateX(0px)';
      } else if (scrollY > end) {
        track.style.transform = `translateX(${-max}px)`;
      } else {
        const progress = (scrollY - start) / (end - start);
        track.style.transform = `translateX(${-progress * max}px)`;
      }
    };

    setHeight();
    handleScroll();
    window.addEventListener('resize', setHeight, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', setHeight);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mobileBreakpoint]);

  const scrollToPanel = (name) => {
    const stage = stageRef.current;
    const track = trackRef.current;
    const target = track?.querySelector(`[data-panel="${name}"]`);
    if (!target) return;

    if (window.innerWidth <= mobileBreakpoint) {
      target.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (!stage || !track) return;

    const stageTop = stage.getBoundingClientRect().top + window.scrollY;
    const start = stageTop;
    const end = stageTop + stage.offsetHeight - window.innerHeight;
    const max = track.scrollWidth - window.innerWidth;
    const progress = max > 0 ? target.offsetLeft / max : 0;
    const targetY = start + progress * (end - start);

    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  return { stageRef, trackRef, scrollToPanel };
}
