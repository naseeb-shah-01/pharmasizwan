import { Shield, Award, Users, Clock, CheckCircle, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Quality First",
      description:
        "We never compromise on the quality of our pharmaceutical products. Every medicine undergoes rigorous testing.",
    },
    {
      icon: Users,
      title: "Customer Focused",
      description: "Our customers' health and satisfaction are at the center of everything we do.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in all aspects of our business, from sourcing to delivery.",
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "Consistent, timely service that healthcare professionals and patients can depend on.",
    },
  ]

  const achievements = [
    "Licensed pharmaceutical distributor since 2009",
    "ISO 9001:2015 certified quality management system",
    "Partnership with 50+ leading pharmaceutical manufacturers",
    "Temperature-controlled storage and logistics facility",
    "24/7 customer support and emergency supply services",
    "Serving 500+ healthcare institutions across India",
  ]

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">About Sizwan Pharma</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            For over 15 years, Sizwan Pharma has been a trusted partner in healthcare, providing quality pharmaceutical
            products to medical professionals and institutions across India.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <Card className="border-primary/20">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide accessible, affordable, and high-quality pharmaceutical products while maintaining the
                highest standards of safety and efficacy. We are committed to supporting healthcare professionals in
                delivering the best possible care to their patients.
              </p>
            </CardContent>
          </Card>

          <Card className="border-accent/20">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To become India's most trusted pharmaceutical distribution company, known for our unwavering commitment
                to quality, innovation, and customer service. We envision a healthier future where quality medicines are
                accessible to all.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Company Story */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed mb-6">
                Founded in 2009 by a team of healthcare professionals and business experts, Sizwan Pharma began with a
                simple yet powerful vision: to bridge the gap between pharmaceutical manufacturers and healthcare
                providers by ensuring reliable access to quality medicines.
              </p>
              <p className="leading-relaxed mb-6">
                What started as a small distribution company has grown into a comprehensive pharmaceutical solutions
                provider, serving hospitals, clinics, pharmacies, and healthcare institutions across multiple states in
                India. Our growth has been driven by our unwavering commitment to quality and customer satisfaction.
              </p>
              <p className="leading-relaxed">
                Today, we maintain strategic partnerships with leading pharmaceutical manufacturers, operate
                state-of-the-art storage facilities, and employ a dedicated team of professionals who share our passion
                for healthcare excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Achievements</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-muted rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">By the Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">15+</div>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Healthcare Partners</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">10K+</div>
              <p className="text-muted-foreground">Products Delivered</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">99.8%</div>
              <p className="text-muted-foreground">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
