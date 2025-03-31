import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import PageLayout from "@/components/layout/PageLayout";
import { Sparkles, Code, Server, Database, Layout, Brain, Play, Clock, BookOpen, CheckCircle } from "lucide-react";

const Learn = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-vibe-purple/10 via-vibe-blue/10 to-vibe-pink/10 pointer-events-none" />
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Learn with <span className="text-gradient">AI-Powered</span> Guidance
              </h1>
              <p className="text-muted-foreground max-w-[500px]">
                Personalized learning paths, tutorials, and resources to enhance your development skills
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="gap-2">
                  <Sparkles className="h-4 w-4" />
                  Get Started
                </Button>
                <Button variant="outline">Take Assessment</Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="aspect-video rounded-lg border overflow-hidden bg-muted/50 backdrop-blur-sm">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-background/80 flex items-center justify-center shadow-lg mb-4">
                    <Play className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-lg font-medium">Introduction to Learning Paths</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter">
              Choose Your <span className="text-gradient">Learning Path</span>
            </h2>
            <p className="text-muted-foreground max-w-[700px] mx-auto mt-2">
              Select a path that aligns with your goals and let our AI tailor a learning journey for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Frontend Path */}
            <Card className="relative overflow-hidden">
              <CardHeader className="pb-2">
                <div className="p-2 bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center mb-2">
                  <Layout className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Frontend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Master modern UI development with React, Next.js, and cutting-edge design techniques.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-vibe-green mt-0.5" />
                    <span className="text-sm">Modern JavaScript & TypeScript</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-vibe-green mt-0.5" />
                    <span className="text-sm">React & Next.js Framework</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-vibe-green mt-0.5" />
                    <span className="text-sm">Responsive UI with Tailwind CSS</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link to="/learn/frontend" className="w-full">
                  <Button className="w-full">Start Path</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Backend Path */}
            <Card className="relative overflow-hidden">
              <CardHeader className="pb-2">
                <div className="p-2 bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center mb-2">
                  <Server className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Backend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Build robust server-side applications, APIs, and database solutions.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-vibe-green mt-0.5" />
                    <span className="text-sm">Node.js & Express</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-vibe-green mt-0.5" />
                    <span className="text-sm">Database Design & ORM</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-vibe-green mt-0.5" />
                    <span className="text-sm">API Development & Security</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link to="/learn/backend" className="w-full">
                  <Button className="w-full">Start Path</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* AI Development Path */}
            <Card className="relative overflow-hidden">
              <div className="absolute top-2 right-2">
                <Badge className="bg-vibe-purple text-white border-none">Popular</Badge>
              </div>
              <CardHeader className="pb-2">
                <div className="p-2 bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center mb-2">
                  <Brain className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>AI Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn to integrate and leverage AI technologies in your applications.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-vibe-green mt-0.5" />
                    <span className="text-sm">LLM Integration & Prompt Engineering</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-vibe-green mt-0.5" />
                    <span className="text-sm">AI-Powered UX Design</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-vibe-green mt-0.5" />
                    <span className="text-sm">Building AI Web Applications</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link to="/learn/ai" className="w-full">
                  <Button className="w-full">Start Path</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Courses Section */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-2xl font-bold tracking-tighter">
              Recently Added <span className="text-gradient">Tutorials</span>
            </h2>
            <Link to="/learn/all">
              <Button variant="outline" size="sm">View All</Button>
            </Link>
          </div>

          <Tabs defaultValue="all">
            <TabsList className="mb-6">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="ai">AI</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Tutorial Card 1 */}
                <Card>
                  <div className="aspect-video rounded-t-lg bg-gradient-to-br from-vibe-purple/20 to-vibe-blue/20 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Code className="h-10 w-10 text-muted-foreground" />
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center mb-1">
                      <Badge variant="outline">Beginner</Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        25 min
                      </div>
                    </div>
                    <CardTitle className="line-clamp-1">Building a Blog with Next.js and Tailwind</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      Learn how to build a modern blog using Next.js, MDX, and Tailwind CSS with dark mode support.
                    </p>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <Link to="/learn/tutorial/nextjs-blog" className="w-full">
                      <Button variant="outline" className="w-full gap-1">
                        <BookOpen className="h-4 w-4" />
                        Start Learning
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                {/* Tutorial Card 2 */}
                <Card>
                  <div className="aspect-video rounded-t-lg bg-gradient-to-br from-vibe-blue/20 to-vibe-green/20 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Database className="h-10 w-10 text-muted-foreground" />
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center mb-1">
                      <Badge variant="outline">Intermediate</Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        40 min
                      </div>
                    </div>
                    <CardTitle className="line-clamp-1">Supabase Authentication and Database Setup</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      Implement authentication and database functionality in your web app using Supabase.
                    </p>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <Link to="/learn/tutorial/supabase-auth" className="w-full">
                      <Button variant="outline" className="w-full gap-1">
                        <BookOpen className="h-4 w-4" />
                        Start Learning
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                {/* Tutorial Card 3 */}
                <Card>
                  <div className="aspect-video rounded-t-lg bg-gradient-to-br from-vibe-green/20 to-vibe-purple/20 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Brain className="h-10 w-10 text-muted-foreground" />
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center mb-1">
                      <Badge variant="outline">Advanced</Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        35 min
                      </div>
                    </div>
                    <CardTitle className="line-clamp-1">Integrating OpenAI's GPT-4 with React</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      Build intelligent UIs by integrating OpenAI's GPT-4 API into your React applications.
                    </p>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <Link to="/learn/tutorial/openai-react" className="w-full">
                      <Button variant="outline" className="w-full gap-1">
                        <BookOpen className="h-4 w-4" />
                        Start Learning
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            
            {/* Other tab contents would be similar */}
            <TabsContent value="frontend">
              {/* Frontend-specific tutorials */}
              <div className="text-center py-8">
                <p className="text-muted-foreground">Frontend-specific tutorials would appear here</p>
              </div>
            </TabsContent>
            
            <TabsContent value="backend">
              {/* Backend-specific tutorials */}
              <div className="text-center py-8">
                <p className="text-muted-foreground">Backend-specific tutorials would appear here</p>
              </div>
            </TabsContent>
            
            <TabsContent value="ai">
              {/* AI-specific tutorials */}
              <div className="text-center py-8">
                <p className="text-muted-foreground">AI-specific tutorials would appear here</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* My Progress Section (requires login) */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tighter mb-6">
            My <span className="text-gradient">Learning</span> Progress
          </h2>

          <Card>
            <CardHeader>
              <CardTitle>Sign in to track your progress</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Create an account or sign in to track your learning progress, earn badges, and get personalized recommendations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/login">
                  <Button variant="outline">Sign In</Button>
                </Link>
                <Link to="/signup">
                  <Button>Create Account</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
};

export default Learn;
