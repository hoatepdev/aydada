'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Địa chỉ',
    value: 'C2-610 chung cư An Viên 2, khu dân cư Nam Long, quận 7, tp HCM',
    color: 'bg-red-500',
    href: 'https://maps.google.com/?q=C2-610+chung+cư+An+Viên+2,+khu+dân+cư+Nam+Long,+quận+7,+tp+HCM',
  },
  {
    icon: Phone,
    title: 'Điện thoại',
    value: '+84 93 151 9393',
    href: 'tel:+84931519393',
    color: 'bg-blue-500',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'contact@aydada.com',
    href: 'mailto:contact@aydada.com',
    color: 'bg-green-500',
  },
  {
    icon: Clock,
    title: 'Giờ làm việc',
    value: 'Thứ 2 - Thứ 6: 8:00 - 17:30\nThứ 7: 8:00 - 12:00',
    color: 'bg-purple-500',
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const sectionRef = useScrollReveal()

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: 'Gửi thành công!',
        description: 'Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.',
      })

      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch {
      toast({
        title: 'Có lỗi xảy ra',
        description:
          'Vui lòng thử lại hoặc liên hệ trực tiếp qua số điện thoại.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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
      id="contact"
      className="from-muted/20 via-background to-muted/30 animate-scroll-reveal relative overflow-hidden bg-gradient-to-br"
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
          className="from-primary/10 to-primary-light/10 absolute top-1/4 right-0 h-96 w-96 rounded-full bg-gradient-to-bl blur-3xl"
        />
      </div>

      <div className="container-padding relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10 space-y-6 text-center md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-primary/10 border-primary/20 text-primary inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium"
          >
            <MessageCircle className="h-4 w-4" />
            Liên hệ với chúng tôi
          </motion.div>

          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl">
            Liên hệ với <span className="text-gradient">chúng tôi</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-muted-foreground mx-auto max-w-4xl text-lg leading-relaxed md:text-xl"
          >
            Sẵn sàng bắt đầu dự án của bạn? Hãy liên hệ với chúng tôi để được tư
            vấn miễn phí và nhận báo giá chi tiết cho dự án công nghệ của bạn.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 grid gap-8 md:mb-20 lg:grid-cols-3 lg:gap-16"
        >
          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="space-y-8 lg:col-span-1"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold lg:text-3xl">
                Thông tin liên hệ
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                const content = (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4, scale: 1.02 }}
                  >
                    <Card className="glass-effect hover:shadow-primary/10 group relative cursor-pointer overflow-hidden border-0 px-4 py-4 transition-all duration-500 hover:shadow-xl md:px-6 md:py-8">
                      <div className="flex items-start gap-4">
                        <div
                          className={`h-12 w-12 rounded-xl ${info.color} flex flex-shrink-0 items-center justify-center`}
                        >
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div className="min-w-0 space-y-1">
                          <h4 className="text-sm font-semibold">
                            {info.title}
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                            {info.value}
                          </p>
                          {info.title === 'Địa chỉ' && (
                            <Button
                              variant="outline"
                              size="sm"
                              asChild
                              className="mt-2 text-xs"
                            >
                              <a
                                href={info.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1"
                              >
                                <MapPin className="h-3 w-3" />
                                Xem trên Google Maps
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )

                return info.title === 'Địa chỉ' ? (
                  content
                ) : info.href ? (
                  <a key={index} href={info.href} className="block">
                    {content}
                  </a>
                ) : (
                  content
                )
              })}
            </div>

            {/* Quick Call CTA */}
            <Card className="bg-primary/5 border-primary/20 p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MessageCircle className="text-primary h-6 w-6" />
                  <h4 className="font-semibold">Cần tư vấn ngay?</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  Gọi điện trực tiếp cho chúng tôi để được tư vấn miễn phí và
                  nhanh chóng nhất.
                </p>
                <div className="flex flex-col gap-2">
                  <Button asChild className="hero-gradient">
                    <a href="tel:+84931519393">
                      <Phone className="mr-2 h-4 w-4" />
                      +84 93 151 9393
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="mailto:contact@aydada.com">
                      <Mail className="mr-2 h-4 w-4" />
                      contact@aydada.com
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-10 lg:col-span-2"
          >
            <Card className="card-shadow bg-white/70 p-2 px-4 py-4 backdrop-blur-sm md:px-8 md:py-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl font-bold">
                  Gửi tin nhắn cho chúng tôi
                </CardTitle>
                <p className="text-muted-foreground">
                  Điền thông tin bên dưới và chúng tôi sẽ liên hệ với bạn trong
                  24 giờ.
                </p>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Họ và tên <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Nhập họ và tên của bạn"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Số điện thoại
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+84 xxx xxx xxx"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Tin nhắn <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Hãy chia sẻ với chúng tôi về dự án của bạn..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="hero-gradient animate-button-press w-full hover:opacity-90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-b-2 border-white"></div>
                        Đang gửi...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Gửi tin nhắn
                      </>
                    )}
                  </Button>

                  <p className="text-muted-foreground text-center text-xs">
                    Bằng cách gửi tin nhắn, bạn đồng ý với việc chúng tôi liên
                    hệ với bạn để tư vấn dự án.
                  </p>
                </form>
              </CardContent>
            </Card>
            <Card className="card-shadow h-full bg-white/70 p-2 px-4 py-4 backdrop-blur-sm md:px-8 md:py-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl font-bold">
                  Địa chỉ của chúng tôi
                </CardTitle>
              </CardHeader>
              <CardContent className="h-full px-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.4615323898697!2d105.8470445!3d21.0142112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad1221cb5101%3A0x12b185a225968c84!2sISOFH%20Technology%20Joint%20Stock%20Company!5e0!3m2!1sen!2s!4v1756350057983!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0, maxWidth: '800px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full max-w-4xl"
                />
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
