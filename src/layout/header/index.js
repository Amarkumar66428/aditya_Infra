import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './header.scss';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

// Register ScrollTrigger for this module (safe to call multiple times)
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const headerRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    // Header scroll animation
    const handleScroll = () => {
      if (window.scrollY > 50) {
        headerRef.current?.classList.add('scrolled');
      } else {
        headerRef.current?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Ensure nav is visible immediately
    if (navRef.current) {
      // Set initial visible state - ensure nav is always visible
      gsap.set(navRef.current, {
        opacity: 1,
        visibility: 'visible',
        display: 'flex'
      });

      // Set nav items to visible
      const navItems = navRef.current.children;
      if (navItems && navItems.length > 0) {
        gsap.set(navItems, {
          opacity: 1,
          y: 0,
          visibility: 'visible',
          display: 'block'
        });

        // Optional: subtle fade-in animation on desktop only
        if (window.innerWidth > 968) {
          gsap.fromTo(navItems,
            { opacity: 0.5, y: -10 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.05,
              delay: 0.2,
              ease: 'power1.out'
            }
          );
        }
      }
    }

    const showAnim = gsap.from('.main-tool-bar', {
      yPercent: -140,
      paused: true,
      duration: 0.2
    }).progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      // markers: true,
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse()
      }
    });

  }, []);

  const handleDropdownToggle = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  // Close dropdowns when clicking outside on desktop
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (window.innerWidth <= 968) return;

      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const menuItems = [
    {
      label: 'Home',
      hasDropdown: false,
      link: '/'
    },
    {
      label: 'About Us',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Company Overview', link: '/about/overview' },
        { label: 'Our History', link: '/about/history' },
        { label: 'Leadership Team', link: '/about/leadership' },
        { label: 'Our Values', link: '/about/values' }
      ]
    },
    {
      label: 'Projects',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Current Projects', link: '/projects/current' },
        { label: 'Completed Projects', link: '/projects/completed' },
        { label: 'Upcoming Projects', link: '/projects/upcoming' },
        { label: 'Project Portfolio', link: '/projects/portfolio' }
      ]
    },
    {
      label: 'Suppliers',
      hasDropdown: false,
      link: '/suppliers'
    },
    {
      label: 'Career',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Job Openings', link: '/career/jobs' },
        { label: 'Why Join Us', link: '/career/why-join' },
        { label: 'Employee Benefits', link: '/career/benefits' },
        { label: 'Apply Now', link: '/career/apply' }
      ]
    },
    {
      label: 'Contact Us',
      hasDropdown: false,
      link: '/contact'
    }
  ];

  return (
    <header ref={headerRef} className="main-header main-tool-bar">
      <div className="header-container">
        <div className="logo-container">
          <figure className="logo-image">
            <img src={"/logo192.png"} alt="logo" />
          </figure>
        </div>

        <nav ref={navRef} className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`nav-item ${activeDropdown === item.label ? 'dropdown-open' : ''}`}
            >
              {item.hasDropdown ? (
                <>
                  <button
                    className="nav-link"
                    onClick={() => handleDropdownToggle(item.label)}
                  >
                    {item.label}
                    <span className={`dropdown-arrow ${activeDropdown === item.label ? 'open' : ''}`}>▼</span>
                  </button>
                  {activeDropdown === item.label && (
                    <div className="dropdown-menu">
                      {item.dropdownItems.map((dropdownItem, idx) => (
                        <a
                          key={idx}
                          href={dropdownItem.link}
                          className="dropdown-item"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link to={item.link} className={`nav-link ${window.location.pathname === item.link ? 'open' : ''}`} onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;

