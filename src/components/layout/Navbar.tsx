import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, Github } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    
    toast({
      title: `Switched to ${newTheme} mode`,
      duration: 1500,
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Learn", path: "/learn" },
    { name: "Showcase", path: "/showcase" },
    { name: "Marketplace", path: "/marketplace" },
    { name: "News", path: "/news" },
    { name: "Blog", path: "/blog" }
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-lg bg-background/80 border-b">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative h-8 w-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-vibe-purple via-vibe-blue to-vibe-pink rounded-md animate-pulse-soft"></div>
            <div className="absolute inset-1 bg-background rounded-md flex items-center justify-center">
              <span className="font-bold text-lg text-foreground">V</span>
            </div>
          </div>
          <span className="font-bold text-xl hidden md:block">VybeCoding</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="mr-2"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
          
          <Link to="/login">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Login
            </Button>
          </Link>
          
          <Link to="/signup">
            <Button size="sm" className="hidden md:flex bg-primary hover:bg-primary/90">
              Sign Up
            </Button>
          </Link>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="md:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden p-4 pt-0 bg-background border-b">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="px-2 py-1 text-sm font-medium"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex gap-2 pt-2">
              <Link to="/login" className="flex-1">
                <Button variant="outline" size="sm" className="w-full">
                  Login
                </Button>
              </Link>
              <Link to="/signup" className="flex-1">
                <Button size="sm" className="w-full">
                  Sign Up
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
