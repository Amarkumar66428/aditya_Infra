import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Initialize scroll-triggered animations
 */
export const initScrollAnimations = () => {
  // Check for reduced motion and mobile
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.innerWidth < 768;
  
  // Simplified animation config for mobile/reduced motion
  const baseConfig = prefersReducedMotion || isMobile
    ? { duration: 0.4, ease: "power1.out" }
    : { duration: 0.8, ease: "power2.out" };

  // Fade in from top
  gsap.utils.toArray(".hidden").forEach((element) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: prefersReducedMotion || isMobile ? -20 : -50,
        filter: "blur(0)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0)",
        ...baseConfig,
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // Slide in from left
  gsap.utils.toArray(".left").forEach((element) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: prefersReducedMotion || isMobile ? -30 : -100,
        filter: "blur(0)",
      },
      {
        opacity: 1,
        x: 0,
        filter: "blur(0)",
        ...baseConfig,
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // Slide in from right
  gsap.utils.toArray(".right").forEach((element) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: prefersReducedMotion || isMobile ? 30 : 100,
        filter: "blur(0)",
      },
      {
        opacity: 1,
        x: 0,
        filter: "blur(0)",
        ...baseConfig,
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // Slide up from bottom
  gsap.utils.toArray(".up").forEach((element, index) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: prefersReducedMotion || isMobile ? 30 : 60, // Reduced from 80
        filter: "blur(0)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0)",
        ...baseConfig,
        delay: index * (prefersReducedMotion || isMobile ? 0.05 : 0.08), // Reduced stagger
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // Drop down animation
  gsap.utils.toArray(".drop-hidden, .late-drop").forEach((element) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: -50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: element,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );
  });
};

/**
 * Animate text reveal (character by character or word by word)
 */
export const animateTextReveal = (element, type = "word") => {
  if (!element) return;

  if (type === "word") {
    const words = element.textContent.split(" ");
    element.innerHTML = words
      .map((word) => `<span class="word">${word}</span>`)
      .join(" ");

    gsap.fromTo(
      ".word",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.out",
      }
    );
  } else {
    const chars = element.textContent.split("");
    element.innerHTML = chars
      .map((char) => `<span class="char">${char === " " ? "&nbsp;" : char}</span>`)
      .join("");

    gsap.fromTo(
      ".char",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.02,
        ease: "power2.out",
      }
    );
  }
};

/**
 * Create a smooth hover animation for cards
 */
export const addCardHoverAnimation = (element) => {
  if (!element) return;

  const handleMouseEnter = () => {
    gsap.to(element, {
      y: -10,
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  element.addEventListener("mouseenter", handleMouseEnter);
  element.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    element.removeEventListener("mouseenter", handleMouseEnter);
    element.removeEventListener("mouseleave", handleMouseLeave);
  };
};

/**
 * Animate loader with GSAP
 */
export const animateLoader = (element) => {
  if (!element) return;

  const tl = gsap.timeline({ repeat: -1 });
  tl.to(element, {
    rotation: 360,
    duration: 1,
    ease: "none",
  });
};

/**
 * Smooth page transition
 */
export const pageTransition = (callback) => {
  const tl = gsap.timeline({
    onComplete: callback,
  });

  tl.to(".page-transition", {
    opacity: 1,
    duration: 0.3,
    ease: "power2.in",
  }).to(".page-transition", {
    opacity: 0,
    duration: 0.3,
    ease: "power2.out",
    delay: 0.2,
  });
};

/**
 * Header scroll animation
 */
export const animateHeaderOnScroll = (headerElement, scrolledClass = "scrolled") => {
  if (!headerElement) return;

  ScrollTrigger.create({
    start: "top -50",
    end: 99999,
    toggleClass: { className: scrolledClass, targets: headerElement },
  });
};

/**
 * Parallax effect
 */
export const addParallaxEffect = (element, speed = 0.5) => {
  if (!element) return;

  gsap.to(element, {
    yPercent: -50 * speed,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
};

/**
 * Stagger animation for multiple elements
 */
export const staggerAnimation = (selector, options = {}) => {
  const {
    from = { opacity: 0, y: 50 },
    to = { opacity: 1, y: 0 },
    duration = 0.6,
    stagger = 0.1,
    ease = "power2.out",
    start = "top 85%",
  } = options;

  gsap.fromTo(
    selector,
    from,
    {
      ...to,
      duration,
      stagger,
      ease,
      scrollTrigger: {
        trigger: selector[0] || selector,
        start,
        toggleActions: "play none none none",
      },
    }
  );
};

/**
 * Cleanup function for ScrollTrigger
 */
export const cleanupScrollTriggers = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
};

