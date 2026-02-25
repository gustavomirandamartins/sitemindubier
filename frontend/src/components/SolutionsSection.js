import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Map, BarChart3 } from "lucide-react";

const ScoreNode = ({ score, label, x, y, color = "accent" }) => (
  <div className="absolute" style={{ left: `${x}%`, top: `${y}%` }}>
    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-genesis-soft backdrop-blur-[12px] border ${
      score >= 7 ? 'bg-soil-good/30 border-soil-good/30 text-foreground' : 
      score >= 5 ? 'bg-soil-fair/30 border-soil-fair/30 text-foreground' : 
      'bg-soil-degraded/30 border-soil-degraded/30 text-foreground'
    }`}>
      {score}
    </div>
    {label && <span className="text-[10px] text-muted-foreground mt-0.5 block text-center">{label}</span>}
  </div>
);

export const SolutionsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-subtle" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground bg-card/25 backdrop-blur-[12px] border border-border/20">
            Solutions
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Tackle the <span className="font-display italic text-accent">key challenges</span>
          </h2>
          <p className="text-base text-muted-foreground mt-3">of sustainable agriculture</p>
        </motion.div>

        {/* Two Solution Cards */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* For Industrials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="rounded-2xl overflow-hidden border border-border/30 shadow-genesis hover:shadow-genesis-hover transition-shadow duration-300 h-full flex flex-col bg-card/30 backdrop-blur-[16px]">
              {/* Map Visualization */}
              <div className="relative h-56 lg:h-64 bg-muted/10 overflow-hidden p-4">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
                <Map size={200} className="absolute right-4 top-4 text-accent/10" strokeWidth={0.5} />
                <ScoreNode score={4.8} label="Spain" x={60} y={15} />
                <ScoreNode score={8.3} label="" x={40} y={25} />
                <ScoreNode score={6.3} label="Canada" x={20} y={20} />
                <ScoreNode score={5.8} label="USA" x={15} y={45} />
                <ScoreNode score={5.4} label="" x={30} y={55} />
                <ScoreNode score={7.1} label="Brasil" x={45} y={65} />
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8 flex-1 flex flex-col">
                <Badge variant="secondary" className="w-fit mb-3 text-xs rounded-full px-3">
                  For Industrials
                </Badge>
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3">
                  Strategic planning for sustainable sourcing
                </h3>
                <p className="text-sm text-muted-foreground mb-5">
                  Understand the resilience and the environmental impact of your raw material supplies.
                </p>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {[
                    "Get impact data specific to your sourcing",
                    "Create your baseline, identify areas for improvement",
                    "Project and monitor progress",
                    "Involve your suppliers",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#use-cases"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200 mt-auto"
                >
                  Read the Chandon Use-case
                  <ArrowRight size={14} />
                </a>
              </div>
            </Card>
          </motion.div>

          {/* For Suppliers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="rounded-2xl overflow-hidden border border-border/30 shadow-genesis hover:shadow-genesis-hover transition-shadow duration-300 h-full flex flex-col bg-card/30 backdrop-blur-[16px]">
              {/* Chart Visualization */}
              <div className="relative h-56 lg:h-64 bg-muted/10 overflow-hidden p-4">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
                <BarChart3 size={200} className="absolute right-4 top-4 text-accent/10" strokeWidth={0.5} />
                <div className="relative z-10 flex flex-wrap gap-3 p-4">
                  {[
                    { crop: "Rapeseed", score: 6.7 },
                    { crop: "Vine", score: 8.3 },
                    { crop: "Wheat", score: 6.9 },
                    { crop: "Beetroot", score: 5.5 },
                    { crop: "Cognac", score: 6.1 },
                  ].map((item) => (
                    <div key={item.crop} className="bg-card/20 backdrop-blur-[16px] rounded-xl px-3 py-2 shadow-genesis-soft border border-border/20">
                      <span className={`text-lg font-bold ${
                        item.score >= 7 ? 'text-soil-good' : 
                        item.score >= 5 ? 'text-soil-fair' : 'text-soil-degraded'
                      }`}>{item.score}</span>
                      <p className="text-[10px] text-muted-foreground">{item.crop}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8 flex-1 flex flex-col">
                <Badge variant="secondary" className="w-fit mb-3 text-xs rounded-full px-3">
                  For Suppliers
                </Badge>
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3">
                  Promoting sustainable value chains
                </h3>
                <p className="text-sm text-muted-foreground mb-5">
                  Get unprecedented levels of data attached to the raw materials production.
                </p>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {[
                    "Identify the level of resilience in your production lines",
                    "Spot the best agricultural practices",
                    "Provide your clients with the best data quality",
                    "Involve your producers",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground mt-auto">
                  Use case coming soon
                </span>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
