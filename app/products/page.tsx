"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { featuredProducts } from "../page"

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
   ...featuredProducts,
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
                <img src={product.image} alt="My Pic" style={{
                    height:'200px',width:'300px',borderRadius:'20px'
                  }}/>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{product.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    {/* <span className="text-muted-foreground text-sm ml-2">per {product.pack}</span> */}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1">Get Quote</Button>
                  
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
