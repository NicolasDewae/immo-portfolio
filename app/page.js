'use client';

import { useEffect, useRef } from 'react';
import Nav from '../components/nav/Nav';
import Main from '../components/main/Main';
import Collage from '../components/collage/Collage';
import Mosaic from '../components/mosaic/Mosaic';
import Price from '../components/price/Price';
import Contact from '../components/contact/Contact';
import { images, aboutComponent, figuresComponent } from '../data/i18n';

const lilloiseGalleryA = [
  images.lilloiseEscalier,
  images.lilloiseSalleAManger,
  images.lilloiseBibliotheque,
  images.lilloiseMaisonPiscine,
  images.salonPiano,
  images.lilloiseExterieurBoisZinc,
];
const portfolioGallery = [
  images.cuisineBlanche,
  images.cuisineCarrelageVert,
  images.lilloiseSalonModerne,
  images.cuisineVeranda,
  images.salonPiano,
  images.grangeExterieur,
  images.lilloiseCuisineBlanche,
  images.lilloiseChambreJauneNoire,
];

const MOBILE_BREAKPOINT = 800;

function HomePage() {
  const stageRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal, .reveal-x').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // ── Horizontal scroll journey: vertical wheel/trackpad input drives
  // a translateX on the track, exactly like the old FullPageImg gallery
  // did for a single section — generalized here to the whole page.
  useEffect(() => {
    const stage = stageRef.current;
    const track = trackRef.current;
    if (!stage || !track) return;

    const isDesktop = () => window.innerWidth > MOBILE_BREAKPOINT;

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
  }, []);

  const scrollToPanel = (name) => {
    const stage = stageRef.current;
    const track = trackRef.current;
    const target = track?.querySelector(`[data-panel="${name}"]`);
    if (!target) return;

    if (window.innerWidth <= MOBILE_BREAKPOINT) {
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

  return (
    <div className="App">
      <Nav onNavigate={scrollToPanel} />

      <div className="scroll-stage" ref={stageRef}>
        <div className="scroll-viewport">
          <div className="scroll-track" ref={trackRef}>
            <Main />

            <Collage
              variant="light"
              dataPanel="about"
              label={aboutComponent.label}
              title={aboutComponent.title}
              body={aboutComponent.body}
              images={[images.lilloiseDressingBleu, images.cuisineIlot]}
            />

            <Mosaic images={lilloiseGalleryA} />

            <Collage
              variant="dark"
              dataPanel="figures"
              label={figuresComponent.label}
              title={figuresComponent.title}
              body={figuresComponent.body}
              cta={figuresComponent.cta}
              onCta={(e) => { e.preventDefault(); scrollToPanel('contact'); }}
              images={[images.chambreTeteLit, images.chambreBleue]}
            />

            <Price />
            <Contact />

            <Mosaic images={portfolioGallery} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
