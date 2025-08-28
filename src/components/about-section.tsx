'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Users, Award, Clock, HeartHandshake } from 'lucide-react'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'

// unused data removed for cleanliness

// unused data removed for cleanliness

const commitments = [
  {
    icon: Award,
    title: 'Chất lượng đảm bảo',
    description: 'Cam kết chất lượng cao với quy trình kiểm soát nghiêm ngặt',
    color: '#2563EB',
  },
  {
    icon: Clock,
    title: 'Giao hàng đúng hạn',
    description: 'Tuân thủ timeline và milestone đã cam kết với khách hàng',
    color: '#16A34A',
  },
  {
    icon: Users,
    title: 'Đội ngũ chuyên nghiệp',
    description: 'Kỹ sư giàu kinh nghiệm và tận tâm với dự án',
    color: '#9333EA',
  },
  {
    icon: HeartHandshake,
    title: 'Hỗ trợ dài hạn',
    description: 'Bảo trì và hỗ trợ kỹ thuật sau khi bàn giao dự án',
    color: '#EA580C',
  },
]

// unused data removed for cleanliness

export function AboutSection() {
  const sectionRef = useScrollReveal()

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const blobY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const blobOpacity = useTransform(scrollYProgress, [0, 1], [0.12, 0.05])
  const gridParallaxY = useTransform(scrollYProgress, [0, 1], [0, 20])

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
      id="about"
      className="section-padding animate-scroll-reveal relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="from-primary/10 to-primary-light/10 absolute bottom-0 left-0 h-96 w-96 rounded-full bg-gradient-to-tr blur-3xl"
          style={{ y: blobY, opacity: blobOpacity }}
        />
      </div>

      <div className="container-padding mx-auto max-w-7xl space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4 text-center"
        >
          <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl">
            Cam kết của <span className="text-gradient">TechNova</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground mx-auto max-w-3xl"
          >
            Chúng tôi đồng hành cùng bạn, vì một tương lai bền vững. Với kinh
            nghiệm thực chiến và tư duy thiết kế hiện đại, TechNova cam kết mang
            đến những giải pháp công nghệ chất lượng cao, đáp ứng mọi nhu cầu
            của doanh nghiệp.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          style={{ y: gridParallaxY }}
        >
          {commitments.map((commitment, index) => {
            const IconComponent = commitment.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.25 }}
              >
                <Card className="card-shadow animate-card-hover group text-center">
                  <CardContent className="space-y-4">
                    <div
                      style={{
                        backgroundColor: `${commitment.color}20`,
                        border: `1px solid ${commitment.color}30`,
                      }}
                      className="bg-primary/10 mx-auto flex h-16 w-16 transform items-center justify-center rounded-2xl transition-colors duration-300 ease-in-out group-hover:rotate-6"
                    >
                      <IconComponent
                        className="h-8 w-8"
                        style={{ color: commitment.color }}
                      />
                    </div>
                    <h4 className="group-hover:text-primary font-semibold">
                      {commitment.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {commitment.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
      {/* Section scroll progress indicator */}
      <motion.div
        className="bg-primary/40 absolute top-0 left-0 h-0.5 w-full origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </section>
  )
}
