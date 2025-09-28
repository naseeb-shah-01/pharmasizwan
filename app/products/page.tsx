"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = [
    "All",
    "Pain Relief",
    "Antibiotics",
    "Gastric Care",
    "Diabetes Care",
    "Cardiovascular",
    "Respiratory",
  ]

  const products = [
    {
      name: "Paracetamol 500mg",
      description: "Effective pain relief and fever reducer for adults and children above 12 years",
      price: "₹45",
      category: "Pain Relief",
      pack: "10 tablets",
    },
    {
      name: "Amoxicillin 250mg",
      description: "Broad-spectrum antibiotic for treating bacterial infections",
      price: "₹120",
      category: "Antibiotics",
      pack: "10 capsules",
    },
    {
      name: "Omeprazole 20mg",
      description: "Proton pump inhibitor for acid reflux and heartburn treatment",
      price: "₹85",
      category: "Gastric Care",
      pack: "14 tablets",
    },
    {
      name: "Metformin 500mg",
      description: "First-line medication for type 2 diabetes management",
      price: "₹95",
      category: "Diabetes Care",
      pack: "30 tablets",
    },
    {
      name: "Amlodipine 5mg",
      description: "Calcium channel blocker for hypertension and angina",
      price: "₹75",
      category: "Cardiovascular",
      pack: "30 tablets",
    },
    {
      name: "Salbutamol Inhaler",
      description: "Bronchodilator for asthma and COPD relief",
      price: "₹180",
      category: "Respiratory",
      pack: "200 doses",
    },
    {
      name: "Ibuprofen 400mg",
      description: "Anti-inflammatory pain reliever for various conditions",
      price: "₹65",
      category: "Pain Relief",
      pack: "20 tablets",
    },
    {
      name: "Azithromycin 500mg",
      description: "Macrolide antibiotic for respiratory and skin infections",
      price: "₹150",
      category: "Antibiotics",
      pack: "3 tablets",
    },
    {
      name: "Pantoprazole 40mg",
      description: "Proton pump inhibitor for gastroesophageal reflux disease",
      price: "₹110",
      category: "Gastric Care",
      pack: "15 tablets",
    },
    {
      name: "Glimepiride 2mg",
      description: "Sulfonylurea for blood sugar control in type 2 diabetes",
      price: "₹125",
      category: "Diabetes Care",
      pack: "30 tablets",
    },
    {
      name: "Atorvastatin 20mg",
      description: "Statin medication for cholesterol management",
      price: "₹140",
      category: "Cardiovascular",
      pack: "30 tablets",
    },
    {
      name: "Montelukast 10mg",
      description: "Leukotriene receptor antagonist for asthma prevention",
      price: "₹160",
      category: "Respiratory",
      pack: "30 tablets",
    },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">Our Products</h1>
          <p className="text-xl text-muted-foreground max-w-3xl text-pretty">
            Discover our comprehensive range of quality pharmaceutical products. All medicines are sourced from licensed
            manufacturers and undergo strict quality control.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{product.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <span className="text-muted-foreground text-sm ml-2">per {product.pack}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1">Get Quote</Button>
                  <Button variant="outline" size="sm">
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-16 bg-muted rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Need a Custom Quote?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty">
            Looking for bulk orders or specific products not listed? Contact us for personalized pricing and
            availability.
          </p>
          <Button size="lg">Contact for Custom Quote</Button>
        </div>
      </div>
    </div>
  )
}
