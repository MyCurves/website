'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

const slides = [
  { src: '/images/hero/D0308445-1-1.jpg', alt: 'Hero Slide 1' },
  { src: '/images/hero/D0308277-1-1.jpg', alt: 'Hero Slide 2' },
  { src: '/images/hero/D0308435.jpg', alt: 'Hero Slide 3' },
  { src: '/images/hero/D0304503.jpg', alt: 'Hero Slide 4' },
  { src: '/images/hero/D0304346.jpg', alt: 'Hero Slide 5' },
  { src: '/images/hero/Homepage-2.jpg', alt: 'Hero Slide 6' },
];

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const syncSelectedIndex = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', syncSelectedIndex);
    return () => {
      emblaApi.off('select', syncSelectedIndex);
    };
  }, [emblaApi]);

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (!emblaApi || isPaused) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [emblaApi, isPaused]);

  return (
    <div
      className="relative w-full h-[400px] md:h-[600px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Embla Viewport */}
      <div className="h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative flex-[0_0_100%] min-w-0 h-full transition-opacity duration-1000"
              style={{
                opacity: selectedIndex === index ? 1 : 0,
              }}
            >
              {/* Image */}
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30 z-[1]" />

              {/* Text Overlay */}
              <div className="absolute inset-0 z-10 flex items-center pl-[10%]">
                <div className="text-white">
                  <h1
                    className="text-3xl md:text-5xl lg:text-6xl font-montserrat font-bold uppercase mb-4"
                    style={{
                      letterSpacing: '0.2em',
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
                    }}
                  >
                    EMBRACE YOUR CURVES
                  </h1>
                  <p
                    className="text-xl md:text-2xl lg:text-3xl font-montserrat"
                    style={{
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
                    }}
                  >
                    FALL IN LOVE WITH YOURSELF
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              selectedIndex === index
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
