import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import logo from "@/assets/logo.png";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Events & Exhibitions", href: "#events" },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Determine active section based on scroll position
      const sections = ["home", "events", "about", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header 
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 ease-out rounded-2xl border border-border/50 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-xl shadow-lg" 
          : "bg-background/60 backdrop-blur-md shadow-md"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center gap-3 group transition-transform duration-300 hover:scale-105"
            >
              <img 
                src={logo} 
                alt="Evensia" 
                className="h-12 w-auto transition-all duration-300 group-hover:drop-shadow-lg" 
              />
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex lg:items-center lg:gap-1 bg-muted/30 rounded-full px-2 py-1">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  const targetId = item.href.replace("#", "");
                  const element = document.getElementById(targetId);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full cursor-pointer ${
                  activeSection === item.href.replace("#", "")
                    ? "text-primary-foreground bg-primary shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right side - Theme toggle & Login */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            {/* Theme Toggle */}
            <div className="flex items-center gap-2 bg-muted/30 rounded-full px-3 py-2">
              <Sun className="h-4 w-4 text-muted-foreground transition-colors" />
              <Switch
                checked={isDark}
                onCheckedChange={toggleTheme}
                className="data-[state=checked]:bg-primary"
              />
              <Moon className="h-4 w-4 text-muted-foreground transition-colors" />
            </div>
            
            <Button 
              variant="default" 
              size="sm" 
              className="rounded-full px-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              Login
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Mobile Theme Toggle */}
            <div className="flex items-center gap-1 bg-muted/30 rounded-full px-2 py-1">
              <Sun className="h-3 w-3 text-muted-foreground" />
              <Switch
                checked={isDark}
                onCheckedChange={toggleTheme}
                className="data-[state=checked]:bg-primary scale-75"
              />
              <Moon className="h-3 w-3 text-muted-foreground" />
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="transition-transform duration-300 hover:scale-110"
            >
              <div className={`transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : ''}`}>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
            mobileMenuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2 border-t border-border/50 pt-4">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  const targetId = item.href.replace("#", "");
                  const element = document.getElementById(targetId);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                  setMobileMenuOpen(false);
                }}
                className={`text-sm font-medium transition-all duration-300 px-4 py-2 rounded-lg cursor-pointer ${
                  activeSection === item.href.replace("#", "")
                    ? "text-primary-foreground bg-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)'
                }}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2 border-t border-border/50 mt-2">
              <Button 
                variant="default" 
                size="sm" 
                className="w-full rounded-full transition-all duration-300 hover:scale-[1.02]"
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
