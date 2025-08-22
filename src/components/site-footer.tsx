"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";

const quickLinks = [
  { label: "Dịch vụ", href: "#services" },
  { label: "Về chúng tôi", href: "#about" },
  { label: "Liên hệ", href: "#contact" },
];

const services = [
  { label: "Thiết kế Website", href: "#services" },
  { label: "Phát triển Phần mềm", href: "#services" },
  { label: "Ứng dụng Mobile", href: "#services" },
  { label: "Giải pháp AI", href: "#services" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function SiteFooter() {
  const footerRef = useScrollReveal();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={footerRef}
      className="bg-muted/50 border-t animate-scroll-reveal"
    >
      <div className="max-w-7xl mx-auto container-padding">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg hero-gradient flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <span className="text-xl font-bold text-foreground">
                  Aydada
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Đối tác công nghệ đáng tin cậy, chuyên cung cấp dịch vụ
                outsourcing công nghệ chất lượng cao cho doanh nghiệp.
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Theo dõi chúng tôi</h4>
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className="h-9 w-9 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                      asChild
                    >
                      <a href={social.href} aria-label={social.label}>
                        <IconComponent className="h-4 w-4" />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold">Liên kết nhanh</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-semibold">Dịch vụ</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(service.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-semibold">Thông tin liên hệ</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm leading-relaxed">
                  C2-610 chung cư An Viên 2, khu dân cư Nam Long, quận 7, tp HCM
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href="tel:+84931519393"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  +84 93 151 9393
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:contact@aydada.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  contact@aydada.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground text-sm">
                  <div>Thứ 2 - Thứ 6: 8:00 - 17:30</div>
                  <div>Thứ 7: 8:00 - 12:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Aydada. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Về đầu trang
            </button>
            <span className="text-muted-foreground text-sm">
              Made with ❤️ in Ho Chi Minh City
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
