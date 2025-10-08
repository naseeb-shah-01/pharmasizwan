import Link from "next/link"
import { ArrowRight, Shield, Truck, Clock, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const featuredProducts = [
  {
    name: "R Cod Softgel ",
    description: "Omega -3  Fatty Acid,Vitamin E & Wheat Germ Oil Softgel Capsules",
    price: "₹45",
    category: "Pain Relief",
    image:"pic/rcod.jpeg"
  },
  {
    name: "Doxsiz-200",
    description: "Cefotaxime Dispersible Tablets  200mg",
    price: "₹120",
    category: "Antibiotics",
    image:'/pic/doc.jpeg'
  },
  {
    name: "Sinmoxy CV 625",
    description: "Amoxicillin Potassuim Clavulanic Tablets 625mg",
    price: "₹85",
    category: "Gastric Care",
    image:"/pic/sin.jpeg"
  },
  {
    name: "Sinmoxy CV ",
    description: "Amoxicillin Potassuim Clavulanic Oral suspension Ip",
    price: "₹95",
    category: "Diabetes Care",
    image:"/pic/sinmox.jpeg"
  },
]

export default function HomePage() {
  const features = [
    {
      icon: Shield,
      title: "Quality Assured",
      description: "All medicines are sourced from licensed manufacturers and undergo strict quality checks.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and reliable delivery across India with proper temperature-controlled logistics.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your pharmaceutical needs and queries.",
    },
  ]

 
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-balance mb-6">
              Trusted Medicines,
              <span className="block">Affordable Prices</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed mb-8 text-pretty">
              Your reliable pharmaceutical partner providing quality medicines and healthcare solutions across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <Link href="/products">
                  Browse Products <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Why Choose Sizwan Pharma?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              We are committed to providing the highest quality pharmaceutical products with exceptional service and
              competitive pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Featured Products</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover our most popular and trusted pharmaceutical products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{product.name}</h3>
                  <img src={product.image} alt="My Pic" style={{
                    height:'200px',width:'300px',borderRadius:'20px'
                  }}/>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button size="sm" variant="outline">
                      Inquire
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/products">
                View All Products <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Trusted by Healthcare Professionals</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Healthcare Partners</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <p className="text-muted-foreground">Products Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
          </div>

          <div className="mt-16 bg-muted rounded-2xl p-8 lg:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl text-foreground mb-6 text-pretty">
                "Sizwan Pharma has been our trusted pharmaceutical partner for over 5 years. Their commitment to quality
                and timely delivery is exceptional."
              </blockquote>
              <cite className="text-muted-foreground">Dr. Rajesh Kumar, Chief Medical Officer, City Hospital</cite>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Ready to Partner with Us?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto text-pretty">
            Get in touch today to discuss your pharmaceutical needs and discover how we can support your healthcare
            requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Get Quote <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              <Link href="/products">Browse Catalog</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
