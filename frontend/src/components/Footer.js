import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, ArrowRight } from "lucide-react";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Links */}
          <div>
            <div className="flex flex-col gap-3">
              <a href="#use-cases" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors duration-200">Use cases</a>
              <a href="#science" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors duration-200">Science</a>
              <a href="#press" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors duration-200">Press</a>
              <Button className="w-fit rounded-full px-6 mt-2 bg-primary text-primary-foreground hover:bg-primary/90">
                Book a demo
              </Button>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-primary-foreground mb-4">Don&apos;t miss what&apos;s next.</h4>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-full bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:ring-primary"
              />
              <Button type="submit" size="icon" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 flex-shrink-0">
                <ArrowRight size={16} />
              </Button>
            </form>
            {submitted && (
              <p className="text-xs text-accent mt-2">Thanks for subscribing!</p>
            )}
            <p className="text-xs text-primary-foreground/40 mt-3">
              By submitting you agree to receive our emails. You can unsubscribe anytime.
            </p>
          </div>

          {/* Contact */}
          <div>
            <div className="flex flex-col gap-3">
              <a href="mailto:contact@genesis.live" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors duration-200">
                <Mail size={14} />
                contact@genesis.live
              </a>
              <div className="flex items-start gap-2 text-primary-foreground/70 text-sm">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>9 rue Saint-Fiacre<br />75002 Paris, France</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-primary-foreground/10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xl font-bold tracking-widest uppercase text-primary-foreground/30">Genesis</span>
          <p className="text-xs text-primary-foreground/30">&copy; {new Date().getFullYear()} Genesis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
