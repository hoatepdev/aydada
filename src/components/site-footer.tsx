'use client'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Linkedin,
  Github,
  Twitter,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import TechnovaLogo from '@/components/ui/logo'

const quickLinks = [
  { label: 'Dịch vụ', href: '#services' },
  { label: 'Về chúng tôi', href: '#about' },
  { label: 'Liên hệ', href: '#contact' },
]

const services = [
  { label: 'Thiết kế Website', href: '#services' },
  { label: 'Phát triển Phần mềm', href: '#services' },
  { label: 'Ứng dụng Mobile', href: '#services' },
  { label: 'Giải pháp AI', href: '#services' },
]

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
]

export function SiteFooter({ className }: { className?: string }) {
  const footerRef = useScrollReveal()
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      ref={footerRef}
      className={cn(
        'bg-muted animate-scroll-reveal relative overflow-hidden border-t',
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="from-primary/10 to-primary-light/10 absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-gradient-to-tr blur-3xl" />
        <div className="from-primary/10 to-primary-light/20 absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gradient-to-bl blur-3xl" />
      </div>
      <div className="container-padding mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid gap-8 py-6 md:grid-cols-2 md:py-16 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <TechnovaLogo className="h-12 w-12" />
                <span className="text-foreground text-xl font-bold">
                  TechNova
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Đối tác công nghệ đáng tin cậy, chuyên cung cấp dịch vụ
                outsourcing công nghệ chất lượng cao cho doanh nghiệp.
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Theo dõi chúng tôi</h4>
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className="hover:bg-primary hover:text-primary-foreground hover:border-primary h-9 w-9 transition-all"
                      asChild
                    >
                      <a href={social.href} aria-label={social.label}>
                        <IconComponent className="h-4 w-4" />
                      </a>
                    </Button>
                  )
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
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
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
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
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
                <MapPin className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                <span className="text-muted-foreground text-sm leading-relaxed">
                  29 Liễu Giai, Ngọc Khánh, Hà Nội, Việt Nam
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary h-4 w-4 flex-shrink-0" />
                <a
                  href="tel:+84931519393"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  +84 88 888 8888
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-primary h-4 w-4 flex-shrink-0" />
                <a
                  href="mailto:contact@TechNova.com"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  contact@TechNova.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
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
        <div className="flex flex-col items-center justify-between gap-4 py-4 md:flex-row md:py-6">
          <p className="text-muted-foreground text-sm">
            © 2025 TechNova. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-primary text-sm transition-colors"
            >
              Về đầu trang
            </button>
            <span className="text-muted-foreground text-sm">
              Made with ❤️&nbsp; in Ha Noi City
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
