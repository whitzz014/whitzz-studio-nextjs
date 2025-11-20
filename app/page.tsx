"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [isDarkBackground, setIsDarkBackground] = useState(true);
  const headerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        // Get the element at the header's position
        const headerRect = headerRef.current.getBoundingClientRect();
        const centerX = headerRect.left + headerRect.width / 2;
        const centerY = headerRect.top + headerRect.height / 2;

        // Get the element behind the header
        headerRef.current.style.pointerEvents = 'none';
        const elementBehind = document.elementFromPoint(centerX, centerY);
        headerRef.current.style.pointerEvents = 'auto';

        if (elementBehind) {
          // Get the computed background color
          const bgColor = window.getComputedStyle(elementBehind).backgroundColor;

          // Check if background is light (white/light colors) or dark (black/dark colors)
          // Parse RGB values from the background color
          const rgbMatch = bgColor.match(/\d+/g);
          if (rgbMatch) {
            const [r, g, b] = rgbMatch.map(Number);
            // Calculate luminance (perceived brightness)
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
            // If luminance > 0.5, it's a light background, so use dark text
            setIsDarkBackground(luminance <= 0.5);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main>
      <header className="mb-12">
      <ul className={`fixed flex w-full justify-evenly text-lg font-medium top-5 transition-colors duration-300 z-50 ${isDarkBackground ? 'text-white' : 'text-black'}`} ref={headerRef}>
          <li className="absolute left-10 headerHover">
            <Image
              src="/images/white-w.svg"
              alt="Whitzz Studio Logo"
              width={40}
              height={40}
              className={isDarkBackground ? "" : "invert"}
            />
          </li>
          <li className="headerHover">Calendar</li>
          <li className="headerHover">Faith</li>
          <li className="headerHover">Finance</li>
          <li className="headerHover">Fitness</li>
          <li className="headerHover">Portfolio</li>

        </ul>
      </header>
      <div className="openingSection">
        <h1 className="headerHover welcomeH1">Welcome To Whitzz Studio</h1>

        <p className="headerHover absolute right-[10%] bottom-[25%] glass-text text-[250%] font-medium ml-[5%] mt-4">built by the unorganized for the unorganized.</p>

        <p className="headerHover glass-text text-4xl font-medium absolute right-[10%] bottom-[10%]">By: Brock Whitson</p>
      </div>

      <div className="calendarSection">
        <h2 className="headerHover TitleHead">Calendar</h2>
        <p className="headerHover absolute w-[50%] bottom-[5%] right-[5%] glass-text text-[250%] font-medium ml-[5%] mt-4">Keep track of your life's journey with a built-in journal system, day planner, and reminders — all designed to help you stay organized and manage your life with ease.</p>
      </div>

      <div className="faithSection">
        <h2 className="headerHover TitleHead">Faith</h2>
        <p className="headerHover absolute w-[50%] bottom-[10%] right-[10%] glass-text text-[250%] font-medium ml-[5%] mt-4">I now realize how true it is 
          God does not show favoritism but accepts from every nation the one who fears him and does what is right.
        </p>
        <p className="headerHover absolute w=[50%] bottom-[5%] right-[10%] glass-text text-[250%] font-medium mt-4">Acts 10:34-35</p>
        <Image
        className="headerHover absolute bottom-[5%] left-[5%]"
          src="/images/cross.svg"
          alt="cross"
          width={250}
          height={250}
        />
      </div>
    </main>
  );
}
