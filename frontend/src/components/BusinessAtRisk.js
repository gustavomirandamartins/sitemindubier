import { useRef, useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { AlertTriangle, Droplets, Bug, Leaf } from "lucide-react";

const AnimatedNumber = ({ value, suffix = "", prefix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = value / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= value) { setDisplay(value); clearInterval(timer); }
      else setDisplay(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{prefix}{display}{suffix}</span>;
};

export const BusinessAtRisk = () => {
  const metrics = [
    {
      icon: <Droplets size={24} />,
      label: "Water retention",
      value: 246,
      unit: "m³/ha",
      desc: "of max. water stock",
    },
    {
      icon: <Bug size={24} />,
      label: "Biodiversity",
      value: 11,
      unit: "kg/ha",
      desc: "of microorganisms",
    },
    {
      icon: <Leaf size={24} />,
      label: "Carbon stock",
      value: 260,
      unit: "t/ha",
      desc: "of equivalent CO2",
    },
  ];

  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1770583287085-135748e01164')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-foreground/85" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <AlertTriangle size={20} className="text-warning" />
              <span className="text-warning text-sm font-medium uppercase tracking-wider">Critical insight</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-8">
              Business at risk.
              <br />
              <span className="font-display italic">It is time to act.</span>
            </h2>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <span className="text-4xl lg:text-5xl font-bold text-primary-foreground">
                  +<AnimatedNumber value={50} suffix="%" />
                </span>
                <p className="text-sm text-primary-foreground/60 mt-2">of global GDP depends on soil health</p>
              </div>
              <div>
                <span className="text-4xl lg:text-5xl font-bold text-primary-foreground">
                  +<AnimatedNumber value={60} suffix="%" />
                </span>
                <p className="text-sm text-primary-foreground/60 mt-2">of cultivated soils are degraded or very degraded</p>
              </div>
            </div>

            <p className="text-base text-primary-foreground/70 leading-relaxed">
              We have set as a goal to reverse the trend by promoting sustainable agriculture.
            </p>
          </motion.div>

          {/* Right Content - Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {metrics.map((metric, i) => (
              <Card
                key={metric.label}
                className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-5 hover:bg-primary-foreground/10 transition-colors duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                    {metric.icon}
                  </div>
                  <div>
                    <p className="text-xs text-primary-foreground/50 uppercase tracking-wider mb-0.5">{metric.label}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl lg:text-3xl font-bold text-primary-foreground">
                        <AnimatedNumber value={metric.value} />
                      </span>
                      <span className="text-sm text-primary-foreground/70">{metric.unit}</span>
                    </div>
                    <p className="text-xs text-primary-foreground/50">{metric.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
