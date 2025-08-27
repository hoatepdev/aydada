"use client";

import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-secion";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { useMobileMenu } from "@/contexts/mobile-menu-context";
import { cn } from "@/lib/utils";

export default function Home() {
  const { isMobileMenuOpen } = useMobileMenu();

  return (
    <>
      <SiteHeader />
      <main className={cn(
        "transition-all duration-300",
        isMobileMenuOpen && "blur-xs pointer-events-none"
      )}>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter className={cn(
        "transition-all duration-300",
        isMobileMenuOpen && "blur-xs pointer-events-none"
      )} />
    </>
  );
}
