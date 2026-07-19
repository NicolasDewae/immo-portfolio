'use client';

import Nav from '../components/nav/Nav';
import Main from '../components/main/Main';
import Collage from '../components/collage/Collage';
import Mosaic from '../components/mosaic/Mosaic';
import Price from '../components/price/Price';
import Faq from '../components/faq/Faq';
import Contact from '../components/contact/Contact';
import { images, aboutComponent, figuresComponent } from '../data/content';
import { useHorizontalScrollJourney } from '../hooks/useHorizontalScrollJourney';
import { useScrollReveal } from '../hooks/useScrollReveal';

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
  useScrollReveal();
  const { stageRef, trackRef, scrollToPanel } = useHorizontalScrollJourney(MOBILE_BREAKPOINT);

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
              images={[images.lilloiseDressingBleu, images.piscineInterieure]}
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
              images={[images.chambreTeteLitRayee, images.salonCoussinsLosanges]}
            />

            <Price />
            <Faq />
            <Contact />

            <Mosaic images={portfolioGallery} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
