
import React from "react";
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="relative h-8 w-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-vibe-purple via-vibe-blue to-vibe-pink rounded-md"></div>
                <div className="absolute inset-1 bg-background rounded-md flex items-center justify-center">
                  <span className="font-bold text-lg text-foreground">V</span>
                </div>
              </div>
              <span className="font-bold text-xl">VybeCoding</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Bringing the vibes to your coding journey with AI-powered learning, resources, and a vibrant community.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link to="/marketplace" className="text-sm text-muted-foreground hover:text-primary transition-colors">Templates</Link></li>
              <li><Link to="/marketplace/courses" className="text-sm text-muted-foreground hover:text-primary transition-colors">Courses</Link></li>
              <li><Link to="/marketplace/components" className="text-sm text-muted-foreground hover:text-primary transition-colors">Components</Link></li>
              <li><Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/learn" className="text-sm text-muted-foreground hover:text-primary transition-colors">Tutorials</Link></li>
              <li><Link to="/showcase" className="text-sm text-muted-foreground hover:text-primary transition-colors">Showcase</Link></li>
              <li><Link to="/forum" className="text-sm text-muted-foreground hover:text-primary transition-colors">Community</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy</Link></li>
              <li><Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col items-center border-t mt-8 pt-8">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} VybeCoding. All rights reserved.
          </p>
          <div className="mt-2 text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-vibe-pink" /> by the VybeCoding team
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
