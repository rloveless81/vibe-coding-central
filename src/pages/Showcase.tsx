
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import PageLayout from "@/components/layout/PageLayout";
import { Search, Heart, ExternalLink, Github, Eye } from "lucide-react";

// Mock showcase projects data
const showcaseProjects = [
  {
    id: 1,
    title: "AI-Powered Blog Generator",
    description: "A Next.js application that generates blog posts using OpenAI's GPT-4",
    imageClass: "bg-gradient-to-br from-vibe-purple/30 to-vibe-blue/30",
    category: "AI",
    author: {
      name: "Alex Johnson",
      avatar: ""
    },
    likes: 284,
    views: 1520,
    tags: ["Next.js", "OpenAI", "React"],
    demoUrl: "#",
    githubUrl: "#",
    slug: "ai-blog-generator"
  },
  {
    id: 2,
    title: "Interactive Data Visualization Dashboard",
    description: "A responsive dashboard for visualizing complex datasets using D3.js and React",
    imageClass: "bg-gradient-to-br from-vibe-blue/30 to-vibe-green/30",
    category: "Data Viz",
    author: {
      name: "Sarah Miller",
      avatar: ""
    },
    likes: 176,
    views: 932,
    tags: ["React", "D3.js", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
    slug: "data-viz-dashboard"
  },
  {
    id: 3,
    title: "E-commerce Platform with AR Product View",
    description: "A full-stack e-commerce site with augmented reality product visualization",
    imageClass: "bg-gradient-to-br from-vibe-green/30 to-vibe-yellow/30",
    category: "E-commerce",
    author: {
      name: "David Park",
      avatar: ""
    },
    likes: 342,
    views: 1876,
    tags: ["Next.js", "AR.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
    slug: "ar-ecommerce"
  },
  {
    id: 4,
    title: "Collaborative Code Editor",
    description: "Real-time collaborative code editor with syntax highlighting and execution",
    imageClass: "bg-gradient-to-br from-vibe-yellow/30 to-vibe-orange/30",
    category: "Developer Tools",
    author: {
      name: "Emma Wilson",
      avatar: ""
    },
    likes: 205,
    views: 1123,
    tags: ["WebSockets", "Monaco Editor", "Express"],
    demoUrl: "#",
    githubUrl: "#",
    slug: "collab-code-editor"
  },
  {
    id: 5,
    title: "AI Image Generation Portfolio",
    description: "A portfolio site showcasing AI-generated artwork with DALL-E integration",
    imageClass: "bg-gradient-to-br from-vibe-orange/30 to-vibe-pink/30",
    category: "AI",
    author: {
      name: "Michael Chen",
      avatar: ""
    },
    likes: 298,
    views: 1675,
    tags: ["DALL-E", "Next.js", "Framer Motion"],
    demoUrl: "#",
    githubUrl: "#",
    slug: "ai-image-portfolio"
  },
  {
    id: 6,
    title: "Blockchain Voting Application",
    description: "A decentralized voting platform built on Ethereum with web3.js integration",
    imageClass: "bg-gradient-to-br from-vibe-pink/30 to-vibe-purple/30",
    category: "Blockchain",
    author: {
      name: "Olivia Rodriguez",
      avatar: ""
    },
    likes: 231,
    views: 1287,
    tags: ["Ethereum", "Web3.js", "React"],
    demoUrl: "#",
    githubUrl: "#",
    slug: "blockchain-voting"
  },
];

const Showcase = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredProjects = showcaseProjects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = activeCategory === "all" || project.category.toLowerCase() === activeCategory.toLowerCase();
    
    return matchesSearch && matchesCategory;
  });

  const categories = ["all", ...Array.from(new Set(showcaseProjects.map(project => project.category.toLowerCase())))];

  return (
    <PageLayout>
      <section className="relative py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-8">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Project <span className="text-gradient">Showcase</span>
            </h1>
            <p className="text-muted-foreground max-w-[700px]">
              Discover innovative projects built with modern technologies and AI integration
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center mb-8">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Tabs value={activeCategory} className="w-full md:w-auto">
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
            {filteredProjects.map((project) => (
              <Link to={`/showcase/${project.slug}`} key={project.id}>
                <Card className="h-full overflow-hidden hover:shadow-md transition-all">
                  <div className={`h-48 ${project.imageClass} relative`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-bold text-foreground/20">Preview</span>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 capitalize">
                        {project.category}
                      </Badge>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          <Heart className="h-4 w-4 mr-1 text-vibe-pink" />
                          <span className="text-xs">{project.likes}</span>
                        </div>
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span className="text-xs">{project.views}</span>
                        </div>
                      </div>
                    </div>
                    <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                    <div className="flex items-center mt-1">
                      <Avatar className="h-6 w-6 mr-2">
                        <AvatarFallback>{project.author.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-muted-foreground">{project.author.name}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 gap-1">
                        <ExternalLink className="h-3 w-3" />
                        Demo
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 gap-1">
                        <Github className="h-3 w-3" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Project CTA */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Have a Project to <span className="text-gradient">Showcase</span>?
            </h2>
            <p className="text-muted-foreground">
              Submit your project to be featured in our showcase and get noticed by the VybeCoding community
            </p>
            <Button size="lg">Submit Your Project</Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Showcase;
