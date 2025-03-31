
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import PageLayout from "@/components/layout/PageLayout";
import { Search, FileText, Calendar, Tag, Clock } from "lucide-react";

// Mock blog data - in a real app, this would come from an API
const blogPosts = [
  {
    id: 1,
    title: "The Rise of AI-Powered Development Tools",
    excerpt: "Explore how AI is transforming the way developers write code, debug applications, and design user interfaces...",
    category: "AI",
    date: "Feb 28, 2024",
    readTime: "5 min read",
    tags: ["AI", "Development", "Tools"],
    slug: "ai-development-tools"
  },
  {
    id: 2,
    title: "Building Responsive UIs with React and Tailwind",
    excerpt: "Learn how to combine the power of React with the utility-first approach of Tailwind CSS to build beautiful, responsive interfaces...",
    category: "Frontend",
    date: "Feb 25, 2024",
    readTime: "7 min read",
    tags: ["React", "Tailwind CSS", "UI Design"],
    slug: "react-tailwind-ui"
  },
  {
    id: 3,
    title: "The Future of Web Development: What's Next?",
    excerpt: "From WebAssembly to Edge Computing, discover the emerging technologies that are shaping the future of web development...",
    category: "Trends",
    date: "Feb 20, 2024",
    readTime: "6 min read",
    tags: ["Future", "Web Development", "Trends"],
    slug: "future-web-dev"
  },
  {
    id: 4,
    title: "Getting Started with Next.js and TypeScript",
    excerpt: "A comprehensive guide to setting up a new Next.js project with TypeScript, including best practices and common pitfalls to avoid...",
    category: "Tutorial",
    date: "Feb 18, 2024",
    readTime: "8 min read",
    tags: ["Next.js", "TypeScript", "Tutorial"],
    slug: "nextjs-typescript"
  },
  {
    id: 5,
    title: "Optimizing React Performance: A Deep Dive",
    excerpt: "Learn advanced techniques to optimize your React applications, from memoization to virtualization and beyond...",
    category: "Performance",
    date: "Feb 15, 2024",
    readTime: "10 min read",
    tags: ["React", "Performance", "Optimization"],
    slug: "react-performance"
  },
  {
    id: 6,
    title: "Implementing Authentication with Supabase",
    excerpt: "A step-by-step guide to adding secure authentication to your web application using Supabase...",
    category: "Security",
    date: "Feb 12, 2024",
    readTime: "9 min read",
    tags: ["Supabase", "Authentication", "Security"],
    slug: "supabase-auth"
  },
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || post.category.toLowerCase() === activeCategory.toLowerCase();
    
    return matchesSearch && matchesCategory;
  });

  const categories = ["all", ...Array.from(new Set(blogPosts.map(post => post.category.toLowerCase())))];

  return (
    <PageLayout>
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-8">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              The <span className="text-gradient">VybeCoding</span> Blog
            </h1>
            <p className="text-muted-foreground max-w-[700px]">
              AI-generated insights, tutorials, and trends in web development, AI, and tech
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Tabs value={activeCategory} className="flex-none w-full md:w-auto">
              <TabsList className="grid grid-cols-3 md:grid-cols-6 h-auto">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    onClick={() => setActiveCategory(category)}
                    className="capitalize"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <Link to={`/blog/${post.slug}`} key={post.id}>
                  <Card className="h-full transition-all hover:shadow-md">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center mb-3">
                        <Badge variant="outline" className="bg-muted/50">
                          {post.category}
                        </Badge>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {post.excerpt}
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-2">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Tag className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">
                          {post.tags.slice(0, 2).join(", ")}
                          {post.tags.length > 2 ? "..." : ""}
                        </span>
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-12">
                <FileText className="h-12 w-12 text-muted-foreground/50 mb-4" />
                <h3 className="text-xl font-semibold">No articles found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Stay Updated with <span className="text-gradient">AI-Generated</span> Content
            </h2>
            <p className="text-muted-foreground">
              Subscribe to our newsletter to receive the latest articles, tutorials, and insights
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <Input placeholder="Enter your email" type="email" className="flex-1" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Blog;
