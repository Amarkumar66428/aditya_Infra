import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './NewsSection.scss';

gsap.registerPlugin(ScrollTrigger);

const NewsSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Animate cards on scroll
    if (cardsRef.current.length > 0) {
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 80,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const newsItems = [
    {
      id: 1,
      date: '04 FEB',
      title: 'ADITYA INFRA Won the "Infrastructure Contractor of the Year" Award and "Offsite Construction Project of the Year"',
      snippet: 'Recently, The Big Project ME (BPME) Awards were held in Dubai. This year, Civil & Infrastructure Branch has been recognized for outstanding achievements in infrastructure development and innovative construction methodologies.',
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80',
      link: '/news/award-2025'
    },
    {
      id: 2,
      date: '14 JAN',
      title: 'ADITYA INFRA Civil & Infrastructure Branch Awarded R1013/2F Improvement of Al Shindagha Corridor – Access to Dubai Island from Bur Dubai Side Project',
      snippet: 'ADITYA INFRA has recently received the Letter of Acceptance from the Dubai Roads and Transport Authority for this major infrastructure project, further strengthening our presence in the region.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      link: '/news/dubai-project'
    },
    {
      id: 3,
      date: '14 OCT',
      title: 'ADITYA INFRA Awarded Oceano by the Luxe Developers at Al Marjan Island in Ras Al Khaimah',
      snippet: 'Recently, ADITYA INFRA officially signed an agreement with The Luxe Developers FZ-LLC for the Oceano project, a prestigious residential development on the beautiful Al Marjan Island.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      link: '/news/oceano-project'
    }
  ];

  return (
    <section ref={sectionRef} className="news-section">
      <div className="news-container">
        <div className="section-header">
          <div className="timeline-indicator">
            <div className="timeline-month">JANUARY 2025</div>
            <div className="timeline-line">
              <div className="timeline-dot"></div>
              <div className="timeline-dot"></div>
              <div className="timeline-dot"></div>
            </div>
            <div className="timeline-month">FEBRUARY 2025</div>
          </div>
        </div>

        <div className="news-grid">
          {newsItems.map((item, index) => (
            <article
              key={item.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="news-card"
            >
              <div className="news-card-image">
                <img src={item.image} alt={item.title} />
                <div className="news-date-badge">{item.date}</div>
              </div>
              <div className="news-card-content">
                <h3 className="news-card-title">{item.title}</h3>
                <p className="news-card-snippet">{item.snippet}</p>
                <a href={item.link} className="news-card-button">
                  Read more
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;

