
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import PageLayout from "@/components/layout/PageLayout";
import { Search, Filter, Star, Code, FileCode, PieChart, TagIcon, ShoppingCart, Check } from "lucide-react";

// Mock marketplace items data
const marketplaceItems = [
  {
    id: 1,
    title: "Modern Dashboard Template",
    description: "A responsive admin dashboard with dark mode, analytics, and user management",
    price: 49,
    category: "Templates",
    rating: 4.8,
    sales: 325,
    tags: ["Admin", "Dashboard", "React"],
    image: "bg-gradient-to-br from-vibe-blue/30 to-vibe-purple/30",
    slug: "modern-dashboard"
  },
  {
    id: 2,
    title: "E-commerce Starter Kit",
    description: "Complete e-commerce solution with product listings, cart, and checkout",
    price: 79,
    category: "Templates",
    rating: 4.9,
    sales: 512,
    tags: ["E-commerce", "Next.js", "Stripe"],
    image: "bg-gradient-to-br from-vibe-pink/30 to-vibe-orange/30",
    slug: "ecommerce-starter"
  },
  {
    id: 3,
    title: "Animation Library",
    description: "Collection of ready-to-use React animations for modern web applications",
    price: 39,
    category: "Components",
    rating: 4.7,
    sales: 283,
    tags: ["Animation", "React", "Motion"],
    image: "bg-gradient-to-br from-vibe-green/30 to-vibe-blue/30",
    slug: "animation-library"
  },
  {
    id: 4,
    title: "Advanced React Patterns",
    description: "Learn advanced React patterns and techniques from industry experts",
    price: 99,
    category: "Courses",
    rating: 4.9,
    sales: 750,
    tags: ["React", "Advanced", "Patterns"],
    image: "bg-gradient-to-br from-vibe-purple/30 to-vibe-pink/30",
    slug: "advanced-react"
  },
  {
    id: 5,
    title: "UI Component Library",
    description: "Extensive collection of customizable UI components for React applications",
    price: 59,
    category: "Components",
    rating: 4.6,
    sales: 412,
    tags: ["UI", "Components", "React"],
    image: "bg-gradient-to-br from-vibe-orange/30 to-vibe-yellow/30",
    slug: "ui-component-library"
  },
  {
    id: 6,
    title: "Full Stack Development",
    description: "Comprehensive course on building full stack applications with Next.js and Supabase",
    price: 129,
    category: "Courses",
    rating: 4.8,
    sales: 630,
    tags: ["Full Stack", "Next.js", "Supabase"],
    image: "bg-gradient-to-br from-vibe-blue/30 to-vibe-green/30",
    slug: "fullstack-development"
  },
];

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 150]);
  
  const filteredItems = marketplaceItems.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || item.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const categories = ["all", ...Array.from(new Set(marketplaceItems.map(item => item.category.toLowerCase())))];

  const getCategoryIcon = (category: string) => {
    switch(category.toLowerCase()) {
      case "templates":
        return <FileCode className="h-4 w-4" />;
      case "components":
        return <Code className="h-4 w-4" />;
      case "courses":
        return <PieChart className="h-4 w-4" />;
      default:
        return <TagIcon className="h-4 w-4" />;
    }
  };

  return (
    <PageLayout>
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-8">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              <span className="text-gradient">Marketplace</span>
            </h1>
            <p className="text-muted-foreground max-w-[700px]">
              Discover premium templates, components, and courses to accelerate your development
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Filters Sidebar */}
            <div className="w-full lg:w-64 space-y-6">
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filters
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Price Range</label>
                    <div className="pt-4 px-2">
                      <Slider
                        defaultValue={[0, 150]}
                        max={150}
                        step={1}
                        value={priceRange}
                        onValueChange={setPriceRange}
                        className="mb-6"
                      />
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <label className="text-sm font-medium mb-2 block">Popular Tags</label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">React</Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">Next.js</Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">UI</Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">Full Stack</Badge>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <label className="text-sm font-medium mb-2 block">Rating</label>
                    <div className="space-y-1 mt-2">
                      {[4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="flex items-center">
                          <input type="checkbox" id={`rating-${rating}`} className="mr-2" />
                          <label htmlFor={`rating-${rating}`} className="text-sm flex items-center">
                            {Array(rating).fill(0).map((_, i) => (
                              <Star key={i} className="h-3 w-3 fill-vibe-yellow text-vibe-yellow mr-0.5" />
                            ))}
                            {Array(5 - rating).fill(0).map((_, i) => (
                              <Star key={i} className="h-3 w-3 text-muted-foreground/30 mr-0.5" />
                            ))}
                            <span className="ml-1">& up</span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row gap-4 items-center mb-6">
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search items..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Tabs value={activeCategory} className="w-full sm:w-auto">
                  <TabsList className="grid grid-cols-4 h-auto">
                    {categories.map((category) => (
                      <TabsTrigger 
                        key={category} 
                        value={category}
                        onClick={() => setActiveCategory(category)}
                        className="capitalize flex items-center gap-1"
                      >
                        {category !== "all" && getCategoryIcon(category)}
                        {category}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>

              {filteredItems.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredItems.map((item) => (
                    <Link to={`/marketplace/${item.slug}`} key={item.id}>
                      <Card className="h-full transition-all hover:shadow-md overflow-hidden">
                        <div className={`h-36 ${item.image} flex items-center justify-center`}>
                          {getCategoryIcon(item.category)}
                        </div>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-center mb-2">
                            <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                              {item.category}
                            </Badge>
                            <div className="flex items-center">
                              <Star className="h-3 w-3 fill-vibe-yellow text-vibe-yellow" />
                              <span className="text-xs ml-1">{item.rating}</span>
                            </div>
                          </div>
                          <CardTitle className="line-clamp-1">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap gap-1 mt-3">
                            {item.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between pt-2">
                          <div className="text-lg font-bold">${item.price}</div>
                          <Button size="sm" className="gap-1">
                            <ShoppingCart className="h-4 w-4" />
                            Buy Now
                          </Button>
                        </CardFooter>
                      </Card>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <ShoppingCart className="h-12 w-12 text-muted-foreground/50 mb-4" />
                  <h3 className="text-xl font-semibold">No items found</h3>
                  <p className="text-muted-foreground max-w-md">
                    We couldn't find any marketplace items matching your criteria. Try adjusting your filters.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Why Choose <span className="text-gradient">VybeCoding</span> Marketplace
            </h2>
            <p className="text-muted-foreground max-w-[700px] mx-auto">
              High-quality resources created by experts, vetted by AI, and loved by developers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-background/50 backdrop-blur-md">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">Quality Guaranteed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  All resources are thoroughly reviewed and tested to ensure the highest quality standards.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur-md">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">AI-Enhanced Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our resources leverage AI technologies to provide cutting-edge solutions and enhanced functionality.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur-md">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">Continuous Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  All marketplace items receive regular updates to ensure compatibility with the latest technologies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Ready to Sell Your <span className="text-gradient">Creations</span>?
            </h2>
            <p className="text-muted-foreground">
              Join our marketplace as a seller and reach thousands of developers worldwide
            </p>
            <Button size="lg">Become a Seller</Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Marketplace;
