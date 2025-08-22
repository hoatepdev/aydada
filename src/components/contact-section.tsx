"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Sparkles } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Địa chỉ",
    value: "C2-610 chung cư An Viên 2, khu dân cư Nam Long, quận 7, tp HCM",
    color: "bg-red-500",
  },
  {
    icon: Phone,
    title: "Điện thoại",
    value: "+84 93 151 9393",
    href: "tel:+84931519393",
    color: "bg-blue-500",
  },
  {
    icon: Mail,
    title: "Email",
    value: "contact@aydada.com",
    href: "mailto:contact@aydada.com",
    color: "bg-green-500",
  },
  {
    icon: Clock,
    title: "Giờ làm việc",
    value: "Thứ 2 - Thứ 6: 8:00 - 17:30\nThứ 7: 8:00 - 12:00",
    color: "bg-purple-500",
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const sectionRef = useScrollReveal();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Gửi thành công!",
        description: "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (_error) {
      toast({
        title: "Có lỗi xảy ra",
        description:
          "Vui lòng thử lại hoặc liên hệ trực tiếp qua số điện thoại.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

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
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-padding bg-gradient-to-br from-muted/20 via-background to-muted/30 animate-scroll-reveal relative overflow-hidden"
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
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-gradient-to-bl from-primary/10 to-primary-light/10 blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm"
          >
            <MessageCircle className="h-4 w-4" />
            Liên hệ với chúng tôi
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
            Liên hệ với <span className="text-gradient">chúng tôi</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
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
          className="grid lg:grid-cols-3 gap-12 lg:gap-16"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="lg:col-span-1 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold">Thông tin liên hệ</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                const content = (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4, scale: 1.02 }}
                  >
                    <Card className="p-6 glass-effect border-0 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer group relative overflow-hidden">
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl ${info.color} flex items-center justify-center flex-shrink-0`}
                        >
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div className="space-y-1 min-w-0">
                          <h4 className="font-semibold text-sm">{info.title}</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );

                return info.href ? (
                  <a key={index} href={info.href} className="block">
                    {content}
                  </a>
                ) : (
                  content
                );
              })}
            </div>

            {/* Quick Call CTA */}
            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  <h4 className="font-semibold">Cần tư vấn ngay?</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Gọi điện trực tiếp cho chúng tôi để được tư vấn miễn phí và
                  nhanh chóng nhất.
                </p>
                <div className="flex flex-col gap-2">
                  <Button asChild className="hero-gradient">
                    <a href="tel:+84931519393">
                      <Phone className="h-4 w-4 mr-2" />
                      +84 93 151 9393
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="mailto:contact@aydada.com">
                      <Mail className="h-4 w-4 mr-2" />
                      contact@aydada.com
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Card className="p-8 card-shadow bg-white/70 backdrop-blur-sm">
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
                  <div className="grid md:grid-cols-2 gap-4">
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
                    className="w-full hero-gradient hover:opacity-90 animate-button-press"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Đang gửi...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Gửi tin nhắn
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Bằng cách gửi tin nhắn, bạn đồng ý với việc chúng tôi liên
                    hệ với bạn để tư vấn dự án.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
