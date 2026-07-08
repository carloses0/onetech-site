"use client";

import { useEffect, useRef, useState } from "react";

type ScrollDirection = "up" | "down";

const TOP_THRESHOLD = 10;
const SCROLL_DELTA = 8;

export function useScrollDirection() {
  const [direction, setDirection] = useState<ScrollDirection>("up");
  const [scrollY, setScrollY] = useState(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const current = window.scrollY;
      const diff = current - lastScrollY.current;

      if (Math.abs(diff) >= SCROLL_DELTA) {
        setDirection(diff > 0 ? "down" : "up");
        lastScrollY.current = current;
      }

      setScrollY(current);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    lastScrollY.current = window.scrollY;
    setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isAtTop = scrollY <= TOP_THRESHOLD;
  const isNavbarHidden = !isAtTop && direction === "down";

  return { direction, scrollY, isAtTop, isNavbarHidden };
}
