"use client";

import { Children, useEffect, useEffectEvent, useRef, useState, type ReactNode } from "react";
import { Icon } from "./icon";

type CarouselProps = {
  /** Rendered to the left of the arrow controls. */
  heading: ReactNode;
  /** Slides. Each one should set its own width and `snap-start`. */
  children: ReactNode;
};

const slidesOf = (track: HTMLElement) => Array.from(track.children) as HTMLElement[];

const isAtEnd = (track: HTMLElement) =>
  track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;

const arrowClass =
  "flex h-12 w-12 items-center justify-center rounded-full border border-line-strong bg-white text-ink shadow-sm transition-all duration-200 hover:border-ocean hover:bg-ocean hover:text-white";

export function Carousel({ heading, children }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  // False when every slide already fits on screen, so there is nothing to scroll to.
  const [scrollable, setScrollable] = useState(true);
  const count = Children.count(children);

  const goTo = (index: number) => {
    const track = trackRef.current;
    const slide = track && slidesOf(track)[index];
    if (!track || !slide) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left: slide.offsetLeft, behavior: reduceMotion ? "auto" : "smooth" });
    // Update now so rapid clicks keep advancing while the smooth scroll is still running.
    setActive(index);
  };

  const syncActive = () => {
    const track = trackRef.current;
    if (!track) return;
    // The last slides can't reach the left edge, so treat "scrolled to the end" as the last slide.
    if (track.scrollLeft > 0 && isAtEnd(track)) {
      setActive(count - 1);
      return;
    }
    const distances = slidesOf(track).map((slide) => Math.abs(slide.offsetLeft - track.scrollLeft));
    setActive(distances.indexOf(Math.min(...distances)));
  };

  // Re-sync from the scroll position only once scrolling settles (manual swipes, snap adjustments).
  const settleTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const onScroll = () => {
    clearTimeout(settleTimer.current);
    settleTimer.current = setTimeout(syncActive, 120);
  };

  const onResize = useEffectEvent(() => {
    const track = trackRef.current;
    if (!track) return;
    setScrollable(track.scrollWidth > track.clientWidth + 2);
    syncActive();
  });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const observer = new ResizeObserver(() => onResize());
    observer.observe(track);
    return () => {
      observer.disconnect();
      clearTimeout(settleTimer.current);
    };
  }, []);

  const next = () => {
    const track = trackRef.current;
    if (!track) return;
    goTo(isAtEnd(track) || active >= count - 1 ? 0 : active + 1);
  };

  const prev = () => goTo(active === 0 ? count - 1 : active - 1);

  return (
    <>
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">{heading}</div>
        {scrollable && (
          <div className="flex items-center gap-3">
            <button type="button" aria-label="Previous slide" onClick={prev} className={arrowClass}>
              <Icon name="arrow_back" className="text-xl" />
            </button>
            <button type="button" aria-label="Next slide" onClick={next} className={arrowClass}>
              <Icon name="arrow_forward" className="text-xl" />
            </button>
          </div>
        )}
      </div>

      <div
        ref={trackRef}
        onScroll={onScroll}
        className="relative -mx-2 flex snap-x snap-mandatory gap-6 overflow-x-auto px-2 py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      {scrollable && (
        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: count }, (_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === active}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all ${
                i === active ? "h-3 w-3 bg-toffee" : "h-2.5 w-2.5 bg-skyline hover:bg-ocean"
              }`}
            />
          ))}
        </div>
      )}
    </>
  );
}
