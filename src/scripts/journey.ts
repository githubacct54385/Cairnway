import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// The finished map is in the HTML. For visitors who allow motion, the page pins the map while they
// scroll and draws each route in turn, so the story of the journeys plays out as they read.
const section = document.querySelector<HTMLElement>('[data-journey]');

if (section) {
  const mm = gsap.matchMedia();

  mm.add('(prefers-reduced-motion: no-preference)', () => {
    const paths = gsap.utils.toArray<SVGPathElement>('[data-leg-path]', section);
    const cities = gsap.utils.toArray<SVGGElement>('[data-city]', section);
    const notes = gsap.utils.toArray<HTMLElement>('[data-leg-note]', section);

    paths.forEach((p) => {
      const length = p.getTotalLength();
      gsap.set(p, { strokeDasharray: length, strokeDashoffset: length });
    });
    gsap.set(cities, { opacity: 0 });
    gsap.set(notes, { opacity: 0.3 });

    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=300%',
        pin: true,
        scrub: 0.6,
      },
    });

    paths.forEach((p, i) => {
      const legCities = cities.filter((c) => c.dataset.first === String(i));
      tl.to(notes[i], { opacity: 1, duration: 0.2 });
      tl.to(legCities, { opacity: 1, duration: 0.2, stagger: 0.05 }, '<');
      tl.to(p, { strokeDashoffset: 0, duration: 1 });
    });
  });
}
