import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './header.scss';

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
  }, []);

  const handleDropdownToggle = (menu) => {
    // On mobile, toggle the dropdown
    if (window.innerWidth <= 968) {
      setActiveDropdown(activeDropdown === menu ? null : menu);
    } else {
      // On desktop, just set it (handled by hover)
      setActiveDropdown(menu);
    }
  };

  const handleMouseLeave = () => {
    // Only close on desktop
    if (window.innerWidth > 968) {
      setActiveDropdown(null);
    }
  };

  const menuItems = [
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
      label: 'Press',
      hasDropdown: true,
      dropdownItems: [
        { label: 'News & Updates', link: '/press/news' },
        { label: 'Press Releases', link: '/press/releases' },
        { label: 'Media Kit', link: '/press/media-kit' },
        { label: 'Awards & Recognition', link: '/press/awards' }
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
    <header ref={headerRef} className="main-header">
      <div className="header-container">
        <div className="logo-container">
          <div className="logo">
            <div className="logo-icon">
              <div className="logo-sun"></div>
              <div className="logo-building"></div>
            </div>
            <div className="logo-text">
              <span className="logo-main">ADITYA</span>
              <span className="logo-sub">INFRA AND CONSTRUCTION</span>
            </div>
          </div>
        </div>

        <nav ref={navRef} className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`nav-item ${activeDropdown === item.label ? 'dropdown-open' : ''}`}
              onMouseEnter={() => item.hasDropdown && window.innerWidth > 968 && handleDropdownToggle(item.label)}
              onMouseLeave={handleMouseLeave}
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
                <a href={item.link} className="nav-link">
                  {item.label}
                </a>
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

