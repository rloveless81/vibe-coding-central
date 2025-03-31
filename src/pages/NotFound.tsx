
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  return (
    <PageLayout>
      <div className="container flex flex-col items-center justify-center min-h-[70vh] px-4 md:px-6 py-12">
        <div className="text-center space-y-6">
          <div className="relative w-32 h-32 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-vibe-purple via-vibe-blue to-vibe-pink opacity-20 animate-pulse-soft"></div>
            <div className="absolute inset-4 rounded-full bg-background flex items-center justify-center">
              <span className="text-5xl font-extrabold text-gradient">404</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Page Not Found</h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved to another URL.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" className="gap-2" asChild>
              <Link to="/">
                <Home className="h-4 w-4" />
                Go to Home
              </Link>
            </Button>
            <Button variant="outline" className="gap-2" onClick={() => window.history.back()}>
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </Button>
          </div>

          <div className="pt-8 border-t border-border mt-8">
            <p className="text-sm text-muted-foreground">
              Looking for something specific? Try using the search function.
            </p>
            <div className="relative max-w-md mx-auto mt-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full pl-10 pr-4 py-2 bg-background border rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
