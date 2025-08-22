"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Code,
  Users,
  CheckCircle,
  Headphones,
  Sparkles,
  Zap,
  Award,
} from "lucide-react";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

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
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background flex items-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-primary/20 to-primary-light/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full bg-gradient-to-tr from-primary-dark/20 to-primary/20 blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto container-padding w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm"
              >
                <Sparkles className="h-4 w-4" />
                Đối tác công nghệ hàng đầu
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="block"
                >
                  Aydada –
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="block text-gradient"
                >
                  Đối tác công nghệ
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="block"
                >
                  đáng tin cậy
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
              >
                Chuyên cung cấp dịch vụ outsourcing công nghệ: thiết kế website,
                phát triển phần mềm, ứng dụng mobile và giải pháp AI cho doanh
                nghiệp.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="hero-gradient hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 text-lg px-8 py-6 font-semibold"
                >
                  <Zap className="h-5 w-5 mr-2" />
                  Liên hệ ngay
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("services")}
                  className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold"
                >
                  Khám phá giải pháp
                </Button>
              </motion.div>
            </motion.div>

            {/* Value Props */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6 text-sm"
            >
              {[
                { icon: CheckCircle, text: "Chất lượng cao" },
                { icon: Award, text: "Uy tín" },
                { icon: Users, text: "Chuyên nghiệp" },
                { icon: Headphones, text: "Hỗ trợ 24/7" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <item.icon className="h-4 w-4 text-primary" />
                  <span className="font-medium">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Card */}
          <motion.div variants={itemVariants} className="relative">
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative"
            >
              <Card className="p-8 lg:p-10 card-shadow glass-effect border-0 relative overflow-hidden">
                {/* Card background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-light/5 rounded-xl" />

                <div className="space-y-8 relative z-10">
                  <div className="text-center space-y-3">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.5 }}
                      className="w-16 h-16 mx-auto rounded-2xl hero-gradient flex items-center justify-center mb-4"
                    >
                      <Code className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl lg:text-3xl font-bold">
                      Dịch vụ Outsourcing
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      Đối tác tin cậy cho dự án công nghệ của bạn
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    {[
                      { number: "5+", label: "Năm kinh nghiệm" },
                      { number: "100+", label: "Dự án hoàn thành" },
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.8 + index * 0.2 }}
                        className="text-center space-y-2"
                      >
                        <div className="text-4xl lg:text-5xl font-bold text-gradient">
                          {stat.number}
                        </div>
                        <div className="text-sm text-muted-foreground font-medium">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 2.2 }}
                    className="flex items-center justify-center gap-6 text-primary"
                  >
                    {[Code, Users, Headphones].map((Icon, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                      >
                        <Icon className="h-6 w-6" />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </Card>
            </motion.div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{
                y: [-20, 20, -20],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -right-6 w-24 h-24 rounded-full hero-gradient opacity-20"
            />
            <motion.div
              animate={{
                y: [20, -20, 20],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-primary/20"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
