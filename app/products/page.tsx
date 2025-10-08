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

        <div className="w-full h-screen">
  <iframe
    src="/list.pdf"
    className="w-full h-full rounded-lg"
  />
</div>
        {/* Search and Filter */}
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
