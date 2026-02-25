import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Use cases", href: "#use-cases" },
    { label: "Science", href: "#science" },
    { label: "Press", href: "#press" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-card/90 backdrop-blur-md border-b border-border/50 shadow-genesis-soft"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <span
                className={`text-xl font-bold tracking-widest uppercase ${
                  scrolled ? "text-primary" : "text-primary-foreground"
                }`}
              >
                Genesis
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 hover:opacity-80 ${
                    scrolled
                      ? "text-foreground"
                      : "text-primary-foreground/90"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <Button
                className="rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium"
              >
                Book a demo
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X className={scrolled ? "text-foreground" : "text-primary-foreground"} size={24} />
              ) : (
                <Menu className={scrolled ? "text-foreground" : "text-primary-foreground"} size={24} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-16 z-40 bg-card/95 backdrop-blur-md border-b border-border shadow-genesis-elevated p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-foreground text-base font-medium py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 mt-2">
                Book a demo
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
