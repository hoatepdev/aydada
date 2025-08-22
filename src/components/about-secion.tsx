"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Award,
  Clock,
  HeartHandshake,
  Leaf,
  Lightbulb,
  Heart,
  CheckCircle2,
  Target,
  Sparkles,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const stats = [
  {
    value: "10+",
    label: "Năm kinh nghiệm",
    description: "Trong lĩnh vực công nghệ",
  },
  { value: "50+", label: "Dự án hoàn thành", description: "Đa dạng lĩnh vực" },
  {
    value: "100+",
    label: "Khách hàng tin tưởng",
    description: "Từ startup đến doanh nghiệp",
  },
  {
    value: "99%",
    label: "Khách hàng hài lòng",
    description: "Đánh giá tích cực",
  },
];

const values = [
  {
    icon: Leaf,
    title: "Bền vững",
    description:
      "Cam kết phát triển công nghệ xanh, thân thiện với môi trường và hướng tới tương lai bền vững.",
  },
  {
    icon: Lightbulb,
    title: "Đổi mới",
    description:
      "Luôn tiên phong trong việc ứng dụng công nghệ mới nhất để tạo ra những giải pháp sáng tạo.",
  },
  {
    icon: Heart,
    title: "Tận tâm",
    description:
      "Đặt khách hàng làm trung tâm, cam kết mang lại giá trị tốt nhất cho mọi dự án.",
  },
  {
    icon: Award,
    title: "Chất lượng",
    description:
      "Đảm bảo chất lượng cao trong từng sản phẩm, dịch vụ với quy trình kiểm soát nghiêm ngặt.",
  },
];

const commitments = [
  {
    icon: Award,
    title: "Chất lượng đảm bảo",
    description: "Cam kết chất lượng cao với quy trình kiểm soát nghiêm ngặt",
  },
  {
    icon: Clock,
    title: "Giao hàng đúng hạn",
    description: "Tuân thủ timeline và milestone đã cam kết với khách hàng",
  },
  {
    icon: Users,
    title: "Đội ngũ chuyên nghiệp",
    description: "Kỹ sư giàu kinh nghiệm và tận tâm với dự án",
  },
  {
    icon: HeartHandshake,
    title: "Hỗ trợ dài hạn",
    description: "Bảo trì và hỗ trợ kỹ thuật sau khi bàn giao dự án",
  },
];

const whyChooseUs = [
  "Đội ngũ kỹ sư giàu kinh nghiệm và chuyên môn cao",
  "Quy trình làm việc chuyên nghiệp, minh bạch",
  "Cam kết chất lượng và thời gian bàn giao",
  "Hỗ trợ kỹ thuật và bảo trì dài hạn",
];

export function AboutSection() {
  const sectionRef = useScrollReveal();

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
      id="about"
      className="section-padding animate-scroll-reveal bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.05, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-primary/10 to-primary-light/10 blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto container-padding space-y-24 relative z-10">
        {/* About Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm"
          >
            <Target className="h-4 w-4" />
            Về chúng tôi
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
            Về <span className="text-gradient">Aydada</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            Aydada là công ty công nghệ tại TP. Hồ Chí Minh, chuyên cung cấp
            dịch vụ outsourcing công nghệ với đội ngũ chuyên gia giàu kinh
            nghiệm, cam kết mang đến những giải pháp chất lượng cao.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="text-center p-6 lg:p-8 glass-effect border-0 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 relative overflow-hidden group">
                {/* Card background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="space-y-3 relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="font-semibold text-foreground text-lg">{stat.label}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold">
                Đối tác công nghệ đáng tin cậy
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Với hơn 10 năm kinh nghiệm trong lĩnh vực công nghệ, Aydada đã
                trở thành đối tác tin cậy của nhiều doanh nghiệp trong việc
                chuyển đổi số và phát triển các giải pháp công nghệ.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Vì sao chọn Aydada:</h4>
              <div className="space-y-3">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Core Values */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold">Giá trị cốt lõi</h3>
            <div className="space-y-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-lg">{value.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Commitments Section */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold">
              Cam kết của Aydada
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Chúng tôi đồng hành cùng bạn, vì một tương lai bền vững. Với kinh
              nghiệm thực chiến và tư duy thiết kế hiện đại, Aydada cam kết mang
              đến những giải pháp công nghệ chất lượng cao, đáp ứng mọi nhu cầu
              của doanh nghiệp.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitments.map((commitment, index) => {
              const IconComponent = commitment.icon;
              return (
                <Card
                  key={index}
                  className="text-center p-6 card-shadow animate-card-hover group"
                >
                  <CardContent className="space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold">{commitment.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {commitment.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
