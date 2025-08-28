'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Monitor,
  Code,
  Smartphone,
  Brain,
  Globe,
  Search,
  ShoppingCart,
  FileText,
  Database,
  Settings,
  Zap,
  BarChart,
  ArrowRight,
} from 'lucide-react'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'

const services = [
  {
    icon: Monitor,
    title: 'Thiết kế & Phát triển Website',
    description:
      'Tạo ra những website đẹp mắt, responsive và tối ưu SEO, mang lại trải nghiệm người dùng tuyệt vời cho doanh nghiệp.',
    features: [
      'Responsive Design',
      'SEO Optimization',
      'E-commerce Platform',
      'Landing Page',
    ],
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Code,
    title: 'Phát triển Phần mềm',
    description:
      'Xây dựng ứng dụng web, desktop và hệ thống quản lý với công nghệ hiện đại, đảm bảo hiệu suất cao và bảo mật tối ưu.',
    features: [
      'Web Application',
      'Desktop Software',
      'System Integration',
      'API Development',
    ],
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Smartphone,
    title: 'Ứng dụng Mobile',
    description:
      'Phát triển ứng dụng di động native và cross-platform cho iOS và Android với trải nghiệm người dùng tối ưu.',
    features: [
      'iOS Development',
      'Android Development',
      'React Native',
      'Flutter',
    ],
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Brain,
    title: 'Giải pháp AI & Automation',
    description:
      'Ứng dụng trí tuệ nhân tạo và machine learning để tự động hóa quy trình và nâng cao hiệu quả kinh doanh.',
    features: [
      'Machine Learning',
      'Chatbot Development',
      'Process Automation',
      'Data Analytics',
    ],
    color: 'from-orange-500 to-orange-600',
  },
]

const featureIcons = {
  'Responsive Design': Globe,
  'SEO Optimization': Search,
  'E-commerce Platform': ShoppingCart,
  'Landing Page': FileText,
  'Web Application': Monitor,
  'Desktop Software': Code,
  'System Integration': Database,
  'API Development': Settings,
  'iOS Development': Smartphone,
  'Android Development': Smartphone,
  'React Native': Code,
  Flutter: Code,
  'Machine Learning': Brain,
  'Chatbot Development': Brain,
  'Process Automation': Zap,
  'Data Analytics': BarChart,
}

export function ServicesSection() {
  const sectionRef = useScrollReveal()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  }

  return (
    <section
      ref={sectionRef}
      id="services"
      className="section-padding from-muted/20 via-background to-muted/30 relative overflow-hidden bg-gradient-to-br md:px-4"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.05, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="from-primary/10 to-primary/5 absolute top-0 right-0 h-96 w-96 rounded-full bg-gradient-to-br blur-3xl"
        />
      </div>

      <div className="container-padding relative z-10 mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 space-y-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-primary/10 border-primary/20 text-primary inline-flex items-center gap-2 rounded-full border px-4 py-2"
          >
            <Zap className="h-4 w-4" />
            Dịch vụ chuyên nghiệp
          </motion.div>

          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl">
            Dịch vụ{' '}
            <span className="from-primary to-primary/80 text-primary bg-gradient-to-r bg-clip-text">
              Outsourcing
            </span>{' '}
            Công nghệ
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-muted-foreground mx-auto max-w-4xl text-lg leading-relaxed md:text-xl"
          >
            Chúng tôi cung cấp đầy đủ các dịch vụ outsourcing công nghệ từ thiết
            kế website, phát triển phần mềm, ứng dụng mobile đến các giải pháp
            AI tiên tiến cho doanh nghiệp.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:gap-10"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-background/80 hover:shadow-primary/10 group relative h-full cursor-pointer overflow-hidden rounded-2xl border-1 shadow-md backdrop-blur-sm transition-all duration-500 hover:shadow-2xl">
                  {/* Card background gradient */}
                  <div className="from-primary/5 absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <CardHeader className="relative z-10 flex items-center gap-4 px-4 md:gap-8 md:px-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 6 }}
                      transition={{ duration: 0.3 }}
                      className={`h-20 w-20 rounded-xl bg-gradient-to-br ${service.color} flex transform items-center justify-center shadow-lg duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl`}
                    >
                      <IconComponent className="h-10 w-10 text-white transition-transform duration-300" />
                    </motion.div>
                    <CardTitle className="group-hover:text-primary card-title-hover flex-1 text-2xl font-bold transition-all duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative z-10 flex flex-1 flex-col space-y-2 px-4 md:px-10">
                    <p className="text-muted-foreground flex-1 text-lg leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-2 py-2">
                      {service.features.map((feature, featureIndex) => {
                        const FeatureIcon =
                          featureIcons[feature as keyof typeof featureIcons]
                        return (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.4,
                              delay: featureIndex * 0.1,
                            }}
                            viewport={{ once: true }}
                          >
                            <Badge
                              variant="secondary"
                              className="bg-muted/50 hover:bg-primary/10 hover:text-primary w-full justify-start p-3 text-sm transition-colors duration-300"
                            >
                              <FeatureIcon className="text-primary mr-2 h-4 w-4 flex-shrink-0" />
                              <span className="truncate">{feature}</span>
                            </Badge>
                          </motion.div>
                        )
                      })}
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="text-primary flex items-center text-xl font-bold"
                    >
                      <span className="text-primary ml-4">Tìm hiểu thêm</span>
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
