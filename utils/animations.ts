import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Initialize horizontal scroll animation for experience section
 * @param scrollerSelector - CSS selector for the scroller element
 * @param sectionSelector - CSS selector for individual sections
 */
export const initHorizontalScroll = (
  scrollerSelector: string,
  sectionSelector: string,
) => {
  const scroller = document.querySelector(
    scrollerSelector,
  ) as HTMLElement | null;
  const sections = gsap.utils.toArray(sectionSelector) as HTMLElement[];

  if (!scroller || !sections.length) return;

  const timeline = gsap.timeline({
    defaults: {ease: 'none'},
    scrollTrigger: {
      trigger: scroller,
      pin: true,
      scrub: 2,
      end: () => `+=${scroller.offsetWidth}`,
    },
  });

  timeline.to(scroller, {xPercent: -80}, '<');

  sections.forEach(section => {
    const content = section.querySelector('.exp-content');
    const monster = section.querySelector('.monster-img');

    if (content) {
      timeline.from(content, {
        yPercent: -50,
        ease: 'elastic.out(1,1)',
        opacity: 0,
        scrollTrigger: {
          trigger: content,
          start: 'top 80%',
          end: 'top 0%',
          containerAnimation: timeline,
          scrub: true,
        },
      });
    }

    if (monster) {
      timeline.from(
        monster,
        {
          xPercent: 40,
          yPercent: -100,
          ease: 'elastic.out(1,1)',
          scrollTrigger: {
            trigger: monster,
            start: 'top 125%',
            end: 'top 50%',
            scrub: 2,
            containerAnimation: timeline,
          },
        },
        '<',
      );
    }
  });
};

/**
 * Animate floating buttons on scroll
 */
export const animateFloatingButtons = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to('.floating-buttons', {
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
    },
    y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
    ease: 'none',
  });
};

/**
 * Parallax scroll animation for banner
 */
export const initParallaxScroll = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray<HTMLElement>('.parallax').forEach(element => {
    const depth = element.dataset.depth || '0.5';
    const movement = -(parseFloat(depth) * 100);

    gsap.to(element, {
      y: movement,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });
};
