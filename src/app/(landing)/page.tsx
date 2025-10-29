"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useResponsive } from "../../lib/useResponsive";
import { gsap } from "gsap";

export default function LandingPage() {
  const { isMobile, isTablet } = useResponsive();
  const heroTextRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate hero text badge
      gsap.from(heroTextRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Animate title "High & Dynamic"
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      // Animate subtitle "모두의 성장이 시작되는 곳"
      gsap.from(subtitleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      });

      // Animate CTA button
      gsap.from(ctaRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.7,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  if (isMobile || isTablet) {
    return (
      <main
        className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #3355b8 0%, #232b40 50%, #1f1f1f 100%)",
        }}
      >
        {/* Hero Section */}
        <div className="w-full space-y-8 text-center flex flex-col items-center justify-center">
          {/* Repeated Text with gradient effect */}
          <div
            ref={heroTextRef}
            className="space-y-4 rounded-3xl bg-white/10 p-2 w-2/3 md:w-1/2"
          >
            <h4 className="text-sm md:text-base font-bold text-white leading-tight">
              성과를 만드는 디지털 마케팅
            </h4>
          </div>

          {/* Main Tagline */}
          <div className="pt-8 space-y-8">
            <h3
              ref={titleRef}
              className="text-3xl md:text-4xl font-bold text-white leading-relaxed"
            >
              High & Dynamic
            </h3>
            <h3
              ref={subtitleRef}
              className="text-3xl md:text-4xl font-bold text-white leading-relaxed"
            >
              모두의 성장이 시작되는 곳
            </h3>
          </div>

          {/* CTA Button */}
          <div ref={ctaRef} className="pt-12">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-blue-500 text-white text-lg font-medium rounded-md hover:bg-gray-800 transition-colors duration-200"
            >
              문의하기
            </Link>
          </div>
        </div>

        {/* Infinite Logo Slider */}
        <div className="absolute top-full w-full overflow-hidden py-6 bg-white/5">
          <div className="flex animate-scroll">
            {/* First Set */}
            <div className="flex items-center gap-12 min-w-max px-6">
              <span className="text-lg font-bold text-white/80 whitespace-nowrap">
                Logoipsum
              </span>
              <span className="text-lg font-bold text-white/80 whitespace-nowrap">
                CompanyName
              </span>
              <span className="text-lg font-bold text-white/80 whitespace-nowrap">
                BrandStudio
              </span>
              <span className="text-lg font-bold text-white/80 whitespace-nowrap">
                DesignCo
              </span>
              <span className="text-lg font-bold text-white/80 whitespace-nowrap">
                TechLab
              </span>
              <span className="text-lg font-bold text-white/80 whitespace-nowrap">
                CreativeHub
              </span>
              <span className="text-lg font-bold text-white/80 whitespace-nowrap">
                InnoWorks
              </span>
              <span className="text-lg font-bold text-white/80 whitespace-nowrap">
                DigitalPro
              </span>
            </div>
            {/* Second Set (Duplicate for seamless loop) */}
            <div className="flex items-center gap-12 min-w-max px-6">
              <span className="text-lg font-bold text-white/80 whitespace-nowrap">
                Logoipsum
              </span>
              <span className="text-lg font-bold text-white/80 whitespace-nowrap">
                CompanyName
              </span>
              <span className="text-lg font-bold text-white/80 whitespace-nowrap">
                BrandStudio
              </span>
              <span className="text-lg font-bold text-white/80 whitespace-nowrap">
                DesignCo
              </span>
              <span className="text-lg font-bold text-white/80 whitespace-nowrap">
                TechLab
              </span>
              <span className="text-lg font-bold text-white/80 whitespace-nowrap">
                CreativeHub
              </span>
              <span className="text-lg font-bold text-white/80 whitespace-nowrap">
                InnoWorks
              </span>
              <span className="text-lg font-bold text-white/80 whitespace-nowrap">
                DigitalPro
              </span>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-16 py-32"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, #3355b8 0%, #232b40 50%, #1f1f1f 100%)",
      }}
    >
      {/* Hero Section */}
      <div className="w-full space-y-12 text-center flex flex-col items-center justify-center">
        {/* Repeated Text with gradient effect */}
        <div
          ref={heroTextRef}
          className="space-y-4 rounded-3xl bg-white/10 p-2 w-1/6"
        >
          <h4 className="text-lg font-bold text-white leading-tight">
            성과를 만드는 디지털 마케팅
          </h4>
        </div>

        {/* Main Tagline */}
        <div className="pt-12 space-y-8">
          <h3
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-relaxed"
          >
            HIGH & DYNAMIC
          </h3>
          <h3
            ref={subtitleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-relaxed"
          >
            모두의 성장이 시작되는 곳
          </h3>
        </div>

        {/* CTA Button */}
        <div ref={ctaRef} className="pt-16">
          <Link
            href="/contact"
            className="inline-block px-12 py-5 bg-blue-500 text-white text-xl font-medium rounded-md hover:bg-gray-800 transition-colors duration-200"
          >
            문의하기
          </Link>
        </div>
      </div>

      {/* Infinite Logo Slider */}
      <div className="absolute top-full w-full overflow-hidden py-8 bg-white/5">
        <div className="flex animate-scroll">
          {/* First Set */}
          <div className="flex items-center gap-16 min-w-max px-8">
            <span className="text-2xl font-bold text-white/80 whitespace-nowrap">
              Logoipsum
            </span>
            <span className="text-2xl font-bold text-white/80 whitespace-nowrap">
              CompanyName
            </span>
            <span className="text-2xl font-bold text-white/80 whitespace-nowrap">
              BrandStudio
            </span>
            <span className="text-2xl font-bold text-white/80 whitespace-nowrap">
              DesignCo
            </span>
            <span className="text-2xl font-bold text-white/80 whitespace-nowrap">
              TechLab
            </span>
            <span className="text-2xl font-bold text-white/80 whitespace-nowrap">
              CreativeHub
            </span>
            <span className="text-2xl font-bold text-white/80 whitespace-nowrap">
              InnoWorks
            </span>
            <span className="text-2xl font-bold text-white/80 whitespace-nowrap">
              DigitalPro
            </span>
          </div>
          {/* Second Set (Duplicate for seamless loop) */}
          <div className="flex items-center gap-16 min-w-max px-8">
            <span className="text-2xl font-bold text-white/80 whitespace-nowrap">
              Logoipsum
            </span>
            <span className="text-2xl font-bold text-white/80 whitespace-nowrap">
              CompanyName
            </span>
            <span className="text-2xl font-bold text-white/80 whitespace-nowrap">
              BrandStudio
            </span>
            <span className="text-2xl font-bold text-white/80 whitespace-nowrap">
              DesignCo
            </span>
            <span className="text-2xl font-bold text-white/80 whitespace-nowrap">
              TechLab
            </span>
            <span className="text-2xl font-bold text-white/80 whitespace-nowrap">
              CreativeHub
            </span>
            <span className="text-2xl font-bold text-white/80 whitespace-nowrap">
              InnoWorks
            </span>
            <span className="text-2xl font-bold text-white/80 whitespace-nowrap">
              DigitalPro
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
