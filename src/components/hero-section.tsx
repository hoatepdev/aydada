'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Code,
  Users,
  CheckCircle,
  Headphones,
  Sparkles,
  Zap,
  Award,
  Star,
} from 'lucide-react'

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    },
  }

  return (
    <section className="from-background via-muted/30 to-background relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-gradient-to-br">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 -right-32 h-96 w-96 rounded-full bg-gradient-to-br from-green-200/20 to-green-300/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-1/4 -left-32 h-80 w-80 rounded-full bg-gradient-to-tr from-green-300/20 to-green-200/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-green-100/30 blur-2xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
          className="absolute top-1/3 left-1/4 h-32 w-32 rounded-full bg-green-200/25 blur-xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2.5,
          }}
          className="absolute right-1/4 bottom-1/3 h-40 w-40 rounded-full bg-green-100/20 blur-xl"
        />
      </div>

      <div className="container-padding relative z-10 mx-auto my-12 w-full max-w-7xl sm:my-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
        >
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-6">
              <h1 className="text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-gray-900"
                >
                  Aydada –
                </motion.span>
                &nbsp;
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-green-600"
                >
                  Đối tác công nghệ
                </motion.span>
                &nbsp;
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-gray-900"
                >
                  đáng tin cậy
                </motion.span>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-muted-foreground max-w-2xl text-lg leading-relaxed md:text-xl"
              >
                Chuyên cung cấp dịch vụ outsourcing công nghệ: thiết kế website,
                phát triển phần mềm, ứng dụng mobile và giải pháp AI cho doanh
                nghiệp.
              </motion.p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-4 sm:flex-row sm:gap-8"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1"
              >
                <Button
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                  className="bg-primary text-primary-foreground border-primary hover:shadow-primary/30 w-full border-1 px-0 py-6 text-lg font-semibold transition-all duration-300 hover:shadow-xl"
                >
                  <Zap className="m-0 h-5 w-5" />
                  Liên hệ ngay
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1"
              >
                <Button
                  size="lg"
                  onClick={() => scrollToSection('services')}
                  className="bg-primary-foreground text-primary border-primary hover:shadow-primary/30 w-full border-1 px-0 py-6 text-lg font-semibold transition-all duration-300 hover:shadow-xl"
                >
                  Khám phá giải pháp
                </Button>
              </motion.div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="relative">
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative"
            >
              <Card className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-2xl lg:p-10">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-50/50 to-green-100/30" />

                <div className="relative z-10 space-y-8">
                  <div className="space-y-3 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.5 }}
                      className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500 shadow-lg"
                    >
                      <Code className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                      Dịch vụ Outsourcing
                    </h3>
                    <p className="text-lg text-gray-600">
                      Đối tác tin cậy cho dự án công nghệ của bạn
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    {[
                      { number: '10+', label: 'Năm kinh nghiệm' },
                      { number: '50+', label: 'Dự án hoàn thành' },
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.8 + index * 0.2 }}
                        className="space-y-2 text-center"
                      >
                        <div className="text-4xl font-bold text-green-600 lg:text-5xl">
                          {stat.number}
                        </div>
                        <div className="text-sm font-medium text-gray-600">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 2.2 }}
                    className="flex items-center justify-center gap-2 text-green-600"
                  >
                    <Star className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium text-gray-600">
                      Chất lượng - Uy tín - Chuyên nghiệp - Hỗ trợ 24/7
                    </span>
                  </motion.div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              animate={{
                y: [-20, 20, -20],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-green-400/30 opacity-60"
            />
            <motion.div
              animate={{
                y: [20, -20, 20],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 2,
              }}
              className="absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-green-300/40"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
