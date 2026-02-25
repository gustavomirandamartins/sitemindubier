import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";

const CountUp = ({ end, duration = 2000, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start * 10) / 10);
    }, 16);
    return () => clearInterval(timer);
  }, [started, end, duration]);

  return <span ref={ref}>{prefix}{typeof end === 'number' && end % 1 !== 0 ? count.toFixed(1) : Math.floor(count)}{suffix}</span>;
};

const ResilienceScoreCard = () => (
  <Card className="bg-primary-foreground/20 backdrop-blur-[20px] rounded-2xl p-5 shadow-genesis-elevated border border-primary-foreground/25 w-full max-w-[320px]">
    <div className="flex items-center justify-between mb-3">
      <span className="text-sm font-medium text-primary-foreground/70">Resilience score</span>
      <span className="text-xs bg-primary-foreground/15 text-primary-foreground/90 px-2 py-0.5 rounded-full font-medium backdrop-blur-sm border border-primary-foreground/20">Top 30%</span>
    </div>
    <div className="flex items-end gap-3 mb-3">
      <span className="text-4xl font-bold text-primary-foreground"><CountUp end={6.5} /></span>
      <span className="text-sm text-accent font-medium mb-1">Good</span>
    </div>
    {/* Score bar */}
    <div className="w-full h-2.5 bg-primary-foreground/10 rounded-full overflow-hidden mb-2">
      <div className="h-full rounded-full animate-fill-bar" style={{ width: '65%', background: 'linear-gradient(90deg, hsl(var(--soil-degraded)), hsl(var(--soil-fair)), hsl(var(--soil-good)))' }} />
    </div>
    <div className="flex justify-between text-xs text-primary-foreground/50">
      <span>0</span>
      <span>10</span>
    </div>
    <div className="flex items-center gap-1 mt-2">
      <TrendingUp size={12} className="text-accent" />
      <span className="text-xs text-accent font-medium">+0.2 pts since 2021</span>
    </div>
  </Card>
);

const SoilHealthCard = () => {
  const segments = [
    { label: "Critical", range: "0 to 2", value: 3, color: "bg-destructive" },
    { label: "Degraded", range: "2 to 4", value: 9, color: "bg-soil-degraded" },
    { label: "Fair", range: "4 to 6", value: 15, color: "bg-soil-fair" },
    { label: "Good", range: "6 to 8", value: 51, color: "bg-soil-good" },
    { label: "Optimal", range: "8 to 10", value: 23, color: "bg-soil-optimal" },
  ];

  return (
    <Card className="bg-primary-foreground/20 backdrop-blur-[20px] rounded-2xl p-5 shadow-genesis-elevated border border-primary-foreground/25 w-full max-w-[380px]">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-primary-foreground/70">Share of soils in good health</span>
      </div>
      <div className="flex items-baseline gap-2 mb-1">
        <span className="text-4xl font-bold text-primary-foreground"><CountUp end={74} /></span>
        <span className="text-xl font-bold text-primary-foreground">%</span>
      </div>
      <p className="text-xs text-primary-foreground/60 mb-3">in good health &middot; 9.5k of 13.4k ha</p>
      {/* Stacked bar */}
      <div className="w-full h-6 rounded-full overflow-hidden flex mb-3">
        {segments.map((seg) => (
          <div
            key={seg.label}
            className={`${seg.color} h-full`}
            style={{ width: `${seg.value}%` }}
          />
        ))}
      </div>
      {/* Legend */}
      <div className="grid grid-cols-5 gap-1">
        {segments.map((seg) => (
          <div key={seg.label} className="text-center">
            <span className="text-sm font-semibold text-primary-foreground">{seg.value}</span>
            <p className="text-[10px] text-primary-foreground/60 leading-tight">{seg.label}</p>
            <p className="text-[9px] text-primary-foreground/40">{seg.range}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/5980/food-sunset-love-field.jpg')`,
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/20 to-foreground/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Business Sustainability
            <br />
            <span className="font-display italic">powered by </span>
            <span className="text-primary-foreground font-display italic">Soil Intelligence</span>
          </h1>
          <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Genesis empowers companies with science-based, verifiable land data
            to inform decision-making.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="rounded-full px-8 py-6 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 shadow-genesis-elevated">
              Book a demo
              <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-8 py-6 text-base font-medium border-primary-foreground/25 text-primary-foreground bg-primary-foreground/15 hover:bg-primary-foreground/25 backdrop-blur-[16px]"
            >
              How it works
            </Button>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8"
        >
          <ResilienceScoreCard />
          <SoilHealthCard />
        </motion.div>
      </div>
    </section>
  );
};
