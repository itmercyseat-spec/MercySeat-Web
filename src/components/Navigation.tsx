import { NavLink } from "./NavLink";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import churchLogo from "@/assets/church-logo.png";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/events", label: "Events" },
    { to: "/calendar", label: "Calendar" },
    { to: "/departments", label: "Departments" },
    { to: "/sermons", label: "Sermons" },
    { to: "/gallery", label: "Gallery" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 text-xl font-bold text-primary">
            <img src={churchLogo} alt="Mercy Seat Family Fellowship" className="h-14 w-auto" />
            <span className="hidden sm:inline">Mercy Seat Family Fellowship</span>
            <span className="sm:hidden">MSFF</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-accent hover:text-accent/80 transition-colors font-medium"
                activeClassName="text-accent font-bold"
              >
                {link.label}
              </NavLink>
            ))}
            <ThemeToggle />
            <NavLink to="/give">
              <Button className="bg-church-gold hover:bg-church-gold-light text-foreground font-semibold">
                Give
              </Button>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="text-accent hover:text-accent/80 transition-colors font-medium py-2"
                  activeClassName="text-accent font-bold"
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="flex items-center gap-3 py-2">
                <span className="text-sm text-muted-foreground">Theme:</span>
                <ThemeToggle />
              </div>
              <NavLink to="/give" onClick={() => setIsOpen(false)}>
                <Button className="bg-church-gold hover:bg-church-gold-light text-foreground font-semibold w-full">
                  Give
                </Button>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
