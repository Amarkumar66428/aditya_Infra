import React, { useRef, useEffect } from 'react'
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';

const SecondaryHero = ({ title, subtitle }) => {
    const titleRef = useRef(null);
    useEffect(() => {
        let text = titleRef.current;
        gsap.set(text, { opacity: 1 });
        let mySplitText = SplitText.create(text, {
            type: "chars, words",
            charsClass: "char"
        });
        let chars = mySplitText.chars;

        if (!text.isSplit) {
            mySplitText.split({
                type: "chars, words",
                charsClass: "char"
            });
        }
        gsap.from(chars, {
            duration: 1,
            opacity: 0,
            scale: 0,
            y: 80,
            rotationX: 180,
            transformOrigin: "0% 50% -50",
            ease: "back",
            stagger: 0.05,
            onComplete: () => {
                mySplitText.revert();
                text.removeAttribute("aria-hidden");
            }
        });
    }, []);
    
    return (
        <div className="page-hero">
            <div className="secondary-hero-img">
                <svg
                    preserveAspectRatio="xMidYMid slice"
                    id="secondary-hero-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2278 483"
                    width="100%"
                    height="100%"
                >
                    <defs>
                        <linearGradient
                            id="grad-1"
                            x1="0"
                            y1="0"
                            x2="2278"
                            y2="683"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.2" stopColor="#1a1a1a"></stop>
                            <stop offset="0.8" stopColor="#383b47"></stop>
                        </linearGradient>
                    </defs>
                    <path
                        className="secondary-hero-svg"
                        id="secondary-hero-path"
                        fill="url(#grad-1)"
                        d="M0-0.3C0-0.3,683,156,0,0S683-0.3,2278-683.3V683H0V-0.3z"
                    />
                </svg>
            </div>
            <div className="hero-content">
                <h1 ref={titleRef} className="hero-title">{title}</h1>
                <p className="hero-subtitle">{subtitle}</p>
            </div>
        </div>
    )
}

export default SecondaryHero